import { ListRenderItem } from "@shopify/flash-list";
import { useCallback, useRef } from "react";
import { NativeScrollEvent } from "react-native";
import withScrollableHeader from "../../../components/hoc/withScrollableHeader";
import AnimatedFlashList, {
    AnimatedFlashListRef,
} from "../../../components/list/AnimatedFlashList";
import Stack from "../../../components/views/Stack";
import TextFigtree from "../../../components/views/TextFigtree";

type ListingProps = {
  onScrollWorklet: (e: NativeScrollEvent) => void;
  headerHeight: number;
};
const Listing = ({ headerHeight, onScrollWorklet }: ListingProps) => {
  const listRef = useRef(null) as AnimatedFlashListRef;
  const renderItem: ListRenderItem<string> = ({ item }) => {
    return (
      <Stack >
        <TextFigtree>{item}</TextFigtree>
      </Stack>
    );
  };
  const keyExtractor = useCallback((item: string, index: number) => item, []);
  return (
    <AnimatedFlashList
      data={Array(300)
        .fill(1)
        .map((_, i) => `${i}`)}
      ref={listRef}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        paddingTop: headerHeight,
        paddingHorizontal: 16,
      }}
      nestedScrollEnabled
      renderItem={renderItem}
      onScrollWorklet={onScrollWorklet}
      scrollEventThrottle={16}
      estimatedItemSize={560}
    />
  );
};

const ListingProduct = withScrollableHeader(Listing);
export default ListingProduct;
