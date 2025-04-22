import { Image } from "expo-image";
import { Pressable, StyleSheet } from "react-native";
import { ImageGridProps } from ".";
import device from "../../../platform/device";
import { cn } from "../../../utils/cn";
import Stack from "../../views/Stack";
import TextFigtree from "../../views/TextFigtree";
import VStack from "../../views/VStack";

const GAP = 4;
const PADDING_HORIZONTAL_LIST = 32; //LEFT 16 and RIGHT 16
const SIZE = device.width - PADDING_HORIZONTAL_LIST;
const COL_STYLE = {
  width: SIZE,
  height: (SIZE - GAP) * 0.5
};
const OTHER_COL_STYLE = {
  width: (SIZE + GAP * 2) / 3,
  height: SIZE / 3 / 2
};
const Others = ({ images, onViewImage }: ImageGridProps) => {
  const safeImages = Array.isArray(images) ? images : [];
  const [one, two, three, four, ...rest] = safeImages;
  return (
    <VStack className={cn("flex-col gap-y-1")}>
      <Pressable
        onPress={() => {
          onViewImage(0);
        }}>
        <Image
          recyclingKey={one}
          style={COL_STYLE}
          source={typeof one === "string" ? { uri: one } : one}
        />
      </Pressable>
      <Stack className={cn("flex-row gap-x-1")}>
        {[two, three, four].map((image, index) => {
          if (index === 2) {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  onViewImage(index + 1);
                }}>
                <OverlayImage image={image} count={rest?.length || 0} />
              </Pressable>
            );
          }
          return (
            <Pressable
              key={index}
              onPress={() => {
                onViewImage(index + 1);
              }}>
              <Image
                recyclingKey={image}
                style={OTHER_COL_STYLE}
                source={typeof image === "string" ? { uri: image } : image}
                contentFit="cover"
              />
            </Pressable>
          );
        })}
      </Stack>
    </VStack>
  );
};

export default Others;
const OverlayImage = ({ image, count }: { image: string; count: number }) => (
  <Stack>
    <Image
      style={OTHER_COL_STYLE}
      source={typeof image === "string" ? { uri: image } : image}
      recyclingKey={image}
    />
    {count > 0 ? (
      <Stack style={styles.overlay}>
        <TextFigtree style={styles.centeredText}>See more +</TextFigtree>
      </Stack>
    ) : null}
  </Stack>
);
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center", // Center text vertically
    alignItems: "center", // Center text horizontally
    backgroundColor: "rgba(0, 0, 0, 0.4)" // Semi-transparent overlay for Android
  },
  centeredText: {
    color: "white", // Ensure text is visible on the blur/overlay
    fontSize: 12, // Adjust font size as needed
    fontWeight: "bold" // Adjust font weight as needed
  }
});
