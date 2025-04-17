import { Image } from "expo-image";
import { useCallback } from "react";
import VStack from "../../components/views/VStack";
import ListingProduct from "./components/ListingProduct";
const ListingScreen = () => {
  const renderHeader = useCallback(() => {
    return (
      <VStack>
        <Image
          source={{
            uri: "https://simple.wikipedia.org/wiki/Costco#/media/File:Costco_Wholesale_logo_2010-10-26.svg",
          }}
        />
      </VStack>
    );
  }, []);
  return (
    <VStack flex>
      <ListingProduct renderHeader={renderHeader} />
    </VStack>
  );
};

export default ListingScreen;
