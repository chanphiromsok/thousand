import { Image } from "expo-image";
import { Pressable } from "react-native";
import { ImageGridProps } from ".";
import device from "../../../platform/device";
import Stack from "../../views/Stack";

// TODO: this will no flexible
const GAP = 4;
const SIZE = device.width - 32;
const OTHER_COL_STYLE = {
  width: (SIZE - GAP) / 2,
  height: SIZE / 2
};

const Two = ({ images, type, onViewImage }: ImageGridProps) => {
  return (
    <Stack className={"flex-row gap-x-1"}>
      {images.map((image, index) => {
        const onPress = () => {
          onViewImage(index);
        };
        return (
          <Pressable key={index} onPress={onPress}>
            <Image
              recyclingKey={image}
              style={OTHER_COL_STYLE}
              source={typeof image === "string" ? { uri: image } : image}
            />
          </Pressable>
        );
      })}
    </Stack>
  );
};

export default Two;
