import { useMemo } from "react";
import { type ViewStyle } from "react-native";
import { useThemeVariable } from "./useThemeVariable";


const useBottomSheetTheme = () => {
  const cardInvert = useThemeVariable("border");
  const card = useThemeVariable("bg");
  const bgStyle = useMemo<ViewStyle>(() => ({ backgroundColor: card }), [card]);
  const indicatorStyle = useMemo<ViewStyle>(() => ({ backgroundColor: cardInvert }), [cardInvert]);
  return {
    bgStyle,
    indicatorStyle
  };
};

export default useBottomSheetTheme;
