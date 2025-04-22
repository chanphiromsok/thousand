import { Image } from "expo-image";
import { Pressable } from "react-native";
import { GridProps } from ".";
import device from "../../../platform/device";

const SIZE = {
  width: device.width,
  height: device.width * 0.8
};
const One = ({ images, onViewImage }: GridProps) => {
  const onPress = () => {
    onViewImage(0);
  };
  return (
    <Pressable onPress={onPress}>
      <Image
        recyclingKey={images[0]}
        style={SIZE}
        source={typeof images[0] === "string" ? { uri: images[0] } : images[0]}
      />
    </Pressable>
  );
};

export default One;
