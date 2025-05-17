import { useUnstableNativeVariable } from "nativewind";
import { ThemeVars } from "../theme/themeVars";

export function useThemeVariable<T extends ThemeVars>(variable: T) {
  return useUnstableNativeVariable(`--${variable}`);
}
