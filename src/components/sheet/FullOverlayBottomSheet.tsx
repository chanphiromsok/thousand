import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  PropsWithChildren,
  RefObject,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import { FullWindowOverlay } from "react-native-screens";
import useBottomSheetTheme from "../../hook/useBottomSheetTheme";
import { styles } from "./styles";

export interface FullWindowOverlayBottomSheetRef {
  present: () => void;
  close: () => void;
}

interface FullWindowOverlayBottomSheetProps {
  ref: RefObject<FullWindowOverlayBottomSheetRef | null>;
}

const FullWindowOverlayBottomSheet = ({
  ref,
  children,
}: PropsWithChildren<FullWindowOverlayBottomSheetProps>) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const { bgStyle, indicatorStyle } = useBottomSheetTheme();

  const backdropComponent = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop opacity={1} {...props} disappearsOnIndex={-1} />
    ),
    []
  );

  useImperativeHandle(
    ref,
    () => ({
      present: () => {
        bottomSheetRef.current?.expand();
      },
      close: () => {
        bottomSheetRef.current?.close();
      },
    }),
    []
  );

  return (
    <FullWindowOverlay>
      <BottomSheet
        backdropComponent={backdropComponent}
        ref={bottomSheetRef}
        enableDynamicSizing
        index={-1}
        handleStyle={[styles.handleStyle, bgStyle]}
        handleIndicatorStyle={indicatorStyle}
        enableContentPanningGesture={false}
        backgroundStyle={bgStyle}
      >
        <BottomSheetView className="pb-safe px-4">{children}</BottomSheetView>
      </BottomSheet>
    </FullWindowOverlay>
  );
};

export default FullWindowOverlayBottomSheet;
