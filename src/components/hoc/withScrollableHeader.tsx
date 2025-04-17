import React, { ComponentType, useCallback, useState } from "react";
import { LayoutChangeEvent, NativeScrollEvent } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface ScrollableHeaderProps {
  renderHeader: () => React.ReactNode;
}

interface RenderList {
  onScrollWorklet: (e: NativeScrollEvent) => void;
  headerHeight: number;
}

const withScrollableHeader = (WrappedComponent: ComponentType<RenderList>) => {
  const ScrollableHeader = ({ renderHeader }: ScrollableHeaderProps) => {
    const { top: offsetTop } = useSafeAreaInsets();
    const scrollY = useSharedValue(0);
    const onScrollWorklet = useCallback((e: NativeScrollEvent) => {
      "worklet";
      scrollY.value = e.contentOffset.y;
    }, []);
    const [headerHeight, setHeaderHeight] = useState(0);
    const onHeaderLayout = useCallback((e: LayoutChangeEvent) => {
      if (e.nativeEvent.layout.height > 0) {
        setHeaderHeight(e.nativeEvent.layout.height);
      }
    }, []);
    const collapsibleHeader = useAnimatedStyle(() => {
      return {
        transform: [
          {
            translateY: interpolate(
              scrollY.value,
              [0, headerHeight + offsetTop],
              [offsetTop, -headerHeight],
              "clamp"
            )
          }
        ]
      };
    }, [scrollY, headerHeight, offsetTop]);

    return (
      <>
        <Animated.View
          style={[{ position: "absolute", width: "100%", zIndex: 1 }, collapsibleHeader]}
          onLayout={onHeaderLayout}>
          {renderHeader()}
        </Animated.View>
        <WrappedComponent
          onScrollWorklet={onScrollWorklet}
          headerHeight={headerHeight + offsetTop}
        />
      </>
    );
  };

  return ScrollableHeader;
};

export default withScrollableHeader;
