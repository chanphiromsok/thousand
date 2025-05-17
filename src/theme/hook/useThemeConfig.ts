import {
  DarkTheme as _DarkTheme,
  DefaultTheme,
  type Theme,
} from "@react-navigation/native";
import { useSelectedTheme } from "./useSelectTheme";
import { varColors } from "../themeVars";

const DarkTheme: Theme = {
  ..._DarkTheme,
  dark: true,
  colors: {
    ..._DarkTheme.colors,
    card: varColors["bg"].dark,
    text: varColors["text-primary"].dark,
    background: varColors["bg"].dark,
  },
};

const LightTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    card: varColors["bg"].light,
    text: varColors["text-primary"].light,
    background: varColors["bg"].light,
  },
};
export function useThemeConfig() {
  const { selectedTheme } = useSelectedTheme();
  if (selectedTheme === "dark") return { theme: DarkTheme, selectedTheme };
  return { theme: LightTheme, selectedTheme };
}
