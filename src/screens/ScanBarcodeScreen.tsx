import { atom, useAtom } from "jotai";
import { useCallback } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";
import {
    Camera,
    Code,
    CodeScannerFrame,
    useCameraDevice,
    useCameraFormat,
    useCodeScanner,
} from "react-native-vision-camera";
import Stack from "../components/views/Stack";

const atomScan = atom(false);
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Dummy finder validation function — replace with your actual logic
const isCoordinateInFinder = (point: { x: number; y: number }) => {
  // For now, just allow everything
  return true;
};

const ScanBarcodeScreen = () => {
  const [_, setScan] = useAtom(atomScan);
  const device = useCameraDevice("back");

  // Base view box size (used for scaling)
  const BASE_WIDTH = 100;
  const BASE_HEIGHT = 100;

  // Animated values
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scaleX = useSharedValue(1);
  const scaleY = useSharedValue(1);

  const actOnBestFitCode = useCallback(
    (data: Code[], frame: CodeScannerFrame) => {
      if (!frame.width || !frame.height) return;

      const frameLongSide = Math.max(frame.width, frame.height);
      const frameShortSide = Math.min(frame.width, frame.height);

      const foundCodes = data.filter((code) => {
        if (code.value) {
          const xValues = code.corners?.map((p) => p.x) || [];
          const yValues = code.corners?.map((p) => p.y) || [];
          const minX = Math.min(...xValues);
          const maxX = Math.max(...xValues);
          const minY = Math.min(...yValues);
          const maxY = Math.max(...yValues);

          const isLandscape =
            (device?.sensorOrientation || "").indexOf("landscape") > -1;
          const minShortSide = isLandscape ? minY : minX;
          const maxShortSide = isLandscape ? maxY : maxX;
          const minLongSide = isLandscape ? minX : minY;
          const maxLongSide = isLandscape ? maxX : maxY;

          // Ensure code is within the 'scanning area' square in the center
          const shortSidePad = frameShortSide / 18;
          const longSidePad = frameLongSide / 3.5;
          if (
            minShortSide > shortSidePad &&
            maxShortSide < frameShortSide - shortSidePad &&
            minLongSide > longSidePad &&
            maxLongSide < frameLongSide - longSidePad
          ) {
            return true;
          }
        }
        return false;
      });
      if (!foundCodes.length) {
        return;
      }
      const fitScores = foundCodes.map((code) => {
        if (!code.frame) return 5000; // This is already filtered out above
        const xValues = code.corners?.map((p) => p.x) || [];
        const yValues = code.corners?.map((p) => p.y) || [];
        const minX = Math.min(...xValues);
        const maxX = Math.max(...xValues);
        const minY = Math.min(...yValues);
        const maxY = Math.max(...yValues);

        const isLandscape =
          (device?.sensorOrientation || "").indexOf("landscape") > -1;
        const minShortSide = isLandscape ? minY : minX;
        const maxShortSide = isLandscape ? maxY : maxX;
        const minLongSide = isLandscape ? minX : minY;
        const maxLongSide = isLandscape ? maxX : maxY;

        const actualXCenter = (minShortSide + maxShortSide) / 2;
        const idealXCenter = frameShortSide / 2;
        const distanceToXCenter = Math.abs(idealXCenter - actualXCenter);
        const actualYCenter = (minLongSide + maxLongSide) / 2;

     
        const idealYCenter = frameLongSide / 2;
        const distanceToYCenter = Math.abs(idealYCenter - actualYCenter);
        translateX.value = distanceToXCenter;
        translateY.value = distanceToYCenter;

        const fitScore = distanceToXCenter + distanceToYCenter;
        return fitScore;
      });

      //   const value = cleanBarcode(foundCodes[bestFitIndex].value || '');
      //   if (
      //     value &&
      //     type !== 'unknown' &&
      //     barcodeFormats.includes(type) &&
      //     value &&
      //     (validateBarcode(value) || validatePickupBarcode(value)) &&
      //     value !== currentBarcode
      //   ) {
      //     setCurrentBarcode(value);
      //   }
    },
    [device?.sensorOrientation]
  );

  const format = useCameraFormat(device, [
    { videoResolution: { width: 1920, height: 1080 } },
    { fps: 30 },
  ]);
  const codeScanner = useCodeScanner({
    onCodeScanned: actOnBestFitCode,
    codeTypes: ["qr"],
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  }, []);
  if (!device) return null;

  return (
    <Stack style={StyleSheet.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        isActive
        device={device}
        format={format}
        codeScanner={codeScanner}
      />
      <Animated.View
        style={[
          {
            position: "absolute",
            width: 200,
            height: 200,
            backgroundColor: "rgba(255,0,0,0.2)",
            borderColor: "red",
            borderWidth: 2,
            borderRadius: 4,
          },
          animatedStyle,
        ]}
      />
    </Stack>
  );
};

export default ScanBarcodeScreen;
