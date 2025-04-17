import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const w = Dimensions.get("window").width;
export default function App() {
  const offsetY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    offsetY.value = event.contentOffset.y;
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(offsetY.value, [0, 500], [0, 500], "clamp"),
        },
      ],
    };
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: w,
            height: w / 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
          },
          animatedStyle,
        ]}
      >
        <Text>Interpolate this container is SHUTTER</Text>
      </Animated.View>
      <Animated.FlatList
        onScroll={scrollHandler}
        data={Array(100)
          .fill(1)
          .map((_, i) => `${i}`)}
        renderItem={({ item: i }) => {
          return (
            <View
              style={{
                width: w,
                height: w / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>{i}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
