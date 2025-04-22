import {
  LegendList,
  LegendListRef,
  LegendListRenderItemProps,
} from "@legendapp/list";
import { RefObject, useCallback, useRef } from "react";
import { NativeScrollEvent } from "react-native";
import MaterialSymbolIcons from "../../../components/icons/MaterialSymbolIcons";
import ImageGrid from "../../../components/image/ImageGrid";
import HStack from "../../../components/views/HStack";
import Stack from "../../../components/views/Stack";
import TextFigtree from "../../../components/views/TextFigtree";
import VStack from "../../../components/views/VStack";
import { exploreList, ExploreType } from "../exploreList";
type ListingProps = {
  onScrollWorklet: (e: NativeScrollEvent) => void;
  headerHeight: number;
};
const SPACE = 10;
const Listing = ({ headerHeight, onScrollWorklet }: ListingProps) => {
  const listRef = useRef(null) as RefObject<LegendListRef | null>;
  const renderItem = ({
    item,
  }: LegendListRenderItemProps<ExploreType>) => {
    return (
      <VStack className="mb-6" center="horizontal">
        <VStack center="vertical">
          <HStack className="justify-between" center="vertical">
            <HStack center="vertical">
              <MaterialSymbolIcons
                className="mr-1"
                name="kid_star_fill"
                size={18}
              />
              <TextFigtree className="underline font-semibold">4.5</TextFigtree>
            </HStack>
          </HStack>
          <HStack center="vertical">
            <TextFigtree className="text-primary">
              {"item.location"} . {item.distance}
            </TextFigtree>
            <MaterialSymbolIcons
              size={16}
              name="assistant_navigation"
              className="text-primary ml-1 rotate-90"
            />
          </HStack>
        </VStack>
        <Stack className="mt-2">
          <ImageGrid
            onViewImage={() => {}}
            images={item.images}
            type={"row"}
          />
        </Stack>
      </VStack>
    );
  };
  const keyExtractor = useCallback(
    (item: ExploreType, index: number) => `${item.id}`,
    []
  );

  return (
    <LegendList
      data={exploreList}
      ref={listRef}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        paddingTop: headerHeight,
        paddingLeft: SPACE + 10,
      }}
      renderItem={renderItem}
      horizontal={false}
      scrollEventThrottle={16}
      estimatedItemSize={560}
    />
  );
};

const ListingProduct = Listing
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
