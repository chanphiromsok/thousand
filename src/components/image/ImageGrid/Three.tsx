import { Image } from "expo-image";
import { Pressable } from "react-native";
import { ImageGridProps } from ".";
import device from "../../../platform/device";
import { cn } from "../../../utils/cn";
import Stack from "../../views/Stack";

// TODO: this will no flexible
const GAP = 4;
const SIZE = device.width;
const ROW_STYLE = {
  width: SIZE * 0.6,
  height: (SIZE + GAP) * 0.8
};
const COL_STYLE = {
  width: SIZE,
  height: SIZE * 0.5
};
const OTHER_COL_STYLE = {
  width: SIZE * 0.5,
  height: SIZE * 0.4
};
const OTHER_ROW_STYLE = {
  width: SIZE * 0.4,
  height: SIZE * 0.4
};
const Three = ({ images, type, onViewImage }: ImageGridProps) => {
  return (
    <Stack className={cn(type === "row" ? "flex-row gap-x-1" : "flex-col gap-y-1")}>
      <Pressable
        onPress={() => {
          onViewImage(0);
        }}>
        <Image
          recyclingKey={images[0]}
          style={type == "col" ? COL_STYLE : ROW_STYLE}
          source={typeof images[0] === "string" ? { uri: images[0] } : images[0]}
        />
      </Pressable>
      <Stack className={cn(type === "row" ? "flex-col gap-y-1" : "flex-row gap-x-1")}>
        <Pressable
          onPress={() => {
            onViewImage(1);
          }}>
          <Image
            recyclingKey={images[1]}
            style={type === "row" ? OTHER_ROW_STYLE : OTHER_COL_STYLE}
            source={typeof images[1] === "string" ? { uri: images[1] } : images[1]}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            onViewImage(2);
          }}>
          <Image
            recyclingKey={images[2]}
            style={type === "row" ? OTHER_ROW_STYLE : OTHER_COL_STYLE}
            source={typeof images[2] === "string" ? { uri: images[2] } : images[2]}
          />
        </Pressable>
      </Stack>
    </Stack>
  );
};

export default Three;
