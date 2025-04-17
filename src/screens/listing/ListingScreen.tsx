import { useCallback } from "react";
import AutoResizeImage from "../../components/image/AutoSizeImage";
import VStack from "../../components/views/VStack";
import ListingCategory from "./components/ListingCategory";
import ListingProduct from "./components/ListingProduct";
const ListingScreen = () => {
  const renderHeader = useCallback(() => {
    return (
      <VStack>
        <AutoResizeImage
          source={{
            uri: "https://bfasset.costco-static.com/56O3HXZ9/at/hbgg2kcsgpqkpq9j9wc4nv/d_25w08213_banner_lockedin.jpg?auto=webp&format=jpg&width=1400",
          }}
        />
        <ListingCategory />
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
