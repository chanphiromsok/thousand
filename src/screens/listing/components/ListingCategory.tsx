import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { Image } from "expo-image";
import { RefObject, useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";
import TextFigtree from "../../../components/views/TextFigtree";
import VStack from "../../../components/views/VStack";

const ListingCategory = () => {
  const listRef = useRef(null) as RefObject<FlashList<Mock> | null>;
  const keyExtractor = useCallback(
    (item: Mock, index: number) => `${item.id}`,
    []
  );
  const onScrollTo = useCallback((index: number) => {
    listRef.current?.scrollToIndex({ index, animated: true });
  }, []);

  const renderItem: ListRenderItem<Mock> = useCallback(({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          onScrollTo(index);
        }}
      >
        <VStack center="both" style={{ width: 80 }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          />
          <TextFigtree className={"font-medium mt-1"} numberOfLines={1}>
            {item.name}
          </TextFigtree>
        </VStack>
      </TouchableOpacity>
    );
  }, []);
  return (
    <FlashList
      ref={listRef}
      data={mock}
      horizontal
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 12 }}
      directionalLockEnabled
    />
  );
};

export default ListingCategory;
type Mock = (typeof mock)[0];
export const mock = [
  {
    id: 1,
    name: "Clothes",
    slug: "clothes",
    image: "https://i.imgur.com/QkIa5tT.jpeg",
    creationAt: "2025-04-16T23:02:16.000Z",
    updatedAt: "2025-04-16T23:02:16.000Z",
  },
  {
    id: 2,
    name: "food",
    slug: "food",
    image: "https://i.imgur.com/Ex5x3IU.jpg",
    creationAt: "2025-04-16T23:02:16.000Z",
    updatedAt: "2025-04-17T04:00:48.000Z",
  },
  {
    id: 3,
    name: "Furniture",
    slug: "furniture",
    image: "https://i.imgur.com/Qphac99.jpeg",
    creationAt: "2025-04-16T23:02:16.000Z",
    updatedAt: "2025-04-16T23:02:16.000Z",
  },
  {
    id: 4,
    name: "Shoes",
    slug: "shoes",
    image: "https://i.imgur.com/qNOjJje.jpeg",
    creationAt: "2025-04-16T23:02:16.000Z",
    updatedAt: "2025-04-16T23:02:16.000Z",
  },
  {
    id: 5,
    name: "Miscellaneous",
    slug: "miscellaneous",
    image: "https://i.imgur.com/BG8J0Fj.jpg",
    creationAt: "2025-04-16T23:02:16.000Z",
    updatedAt: "2025-04-16T23:02:16.000Z",
  },
  {
    id: 8,
    name: "category.aDD",
    slug: "category-add",
    image: "https://cdn-icons-png.flaticon.com/512/6028/6028690.png",
    creationAt: "2025-04-16T23:09:30.000Z",
    updatedAt: "2025-04-17T07:57:30.000Z",
  },
  {
    id: 9,
    name: "Books",
    slug: "books",
    image: "https://cdn-icons-png.flaticon.com/512/6028/6028690.png",
    creationAt: "2025-04-16T23:10:38.000Z",
    updatedAt: "2025-04-17T07:59:32.000Z",
  },
  {
    id: 10,
    name: "category.move",
    slug: "category-move",
    image: "https://placehold.co/600x400",
    creationAt: "2025-04-16T23:10:47.000Z",
    updatedAt: "2025-04-16T23:10:47.000Z",
  },
  {
    id: 28,
    name: "new catgory",
    slug: "new-catgory",
    image: "https://i.imgur.com/Ex5x3IU.jpg",
    creationAt: "2025-04-17T04:16:34.000Z",
    updatedAt: "2025-04-17T04:16:34.000Z",
  },
  {
    id: 32,
    name: "test",
    slug: "test",
    image: "https://cdn-icons-png.flaticon.com/512/6028/6028690.png",
    creationAt: "2025-04-17T08:01:32.000Z",
    updatedAt: "2025-04-17T08:18:26.000Z",
  },
];
