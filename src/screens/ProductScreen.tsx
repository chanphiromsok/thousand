import { useCallback } from "react";

const ProductScreen = () => {
  return (
    <VStack flex>
      <ListAll />
    </VStack>
  );
};

export default ProductScreen;

import { LegendList } from "@legendapp/list";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Image } from "expo-image";
import HStack from "../components/views/HStack";
import Stack from "../components/views/Stack";
import TextFigtree from "../components/views/TextFigtree";
import VStack from "../components/views/VStack";
const ListAll = () => {
  const bottomBarHeight = useBottomTabBarHeight();
  console.log("bottomBarHeight", bottomBarHeight);

  const renderItem = useCallback(() => {
    return (
      <HStack className="items-start mb-3">
        <Stack className="mr-3">
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/65760336?v=4&s=300",
            }}
          />
        </Stack>
        <VStack flex>
          <TextFigtree numberOfLines={2} ellipsizeMode="tail">
            <TextFigtree className="font-bold">Had Mike</TextFigtree> replied to
            your comment on the Street Template Night Market
          </TextFigtree>
          <TextFigtree className="text-sub-text">12 Jan 2022</TextFigtree>
        </VStack>
      </HStack>
    );
  }, []);
  const keyExtractor = (item, index) => `${index}`;
  return (
    <LegendList
      data={Array(40)
        .fill(1)
        .map((_, i) => `${i}`)}
      showsVerticalScrollIndicator={false}
      estimatedItemSize={40}
      drawDistance={120}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};
