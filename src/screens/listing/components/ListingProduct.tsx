import { ListRenderItem } from "@shopify/flash-list";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
import { useCallback, useRef } from "react";
import { NativeScrollEvent } from "react-native";
import withScrollableHeader from "../../../components/hoc/withScrollableHeader";
import AnimatedFlashList, {
  AnimatedFlashListRef,
} from "../../../components/list/AnimatedFlashList";
import Stack from "../../../components/views/Stack";
import TextFigtree from "../../../components/views/TextFigtree";
import device from "../../../platform/device";
type ListingProps = {
  onScrollWorklet: (e: NativeScrollEvent) => void;
  headerHeight: number;
};
const SPACE = 10;
const SIZE = device.width / 4;
const imageStyle = { width: SIZE, height: SIZE, borderRadius: 5 };
const Listing = ({ headerHeight, onScrollWorklet }: ListingProps) => {
  const { data } = useQuery<Mock[]>({
    queryKey: ["queryKey"],
    queryFn: async () => {
      const res = (
        await fetch("https://api.escuelajs.co/api/v1/products")
      ).json();
      return await res;
    },
  });
  const listRef = useRef(null) as AnimatedFlashListRef;
  const renderItem: ListRenderItem<Mock> = ({ item }) => {
    return (
      <Stack center="both">
        <Image source={{ uri: item.images[0] }} style={imageStyle} />
        <TextFigtree>{item.title.slice(0,10)}</TextFigtree>
      </Stack>
    );
  };
  const keyExtractor = useCallback(
    (item: Mock, index: number) => `${item.id}`,
    []
  );

  return (
    <AnimatedFlashList
      data={data}
      ref={listRef}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        paddingTop: headerHeight,
        paddingLeft: SPACE + 10,
      }}
      headerOffset={headerHeight}
      renderItem={renderItem}
      numColumns={4}
      horizontal={false}
      onScrollWorklet={onScrollWorklet}
      scrollEventThrottle={16}
      estimatedItemSize={560}
    />
  );
};

const ListingProduct = withScrollableHeader(Listing);
export default ListingProduct;
export interface Mock {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}
