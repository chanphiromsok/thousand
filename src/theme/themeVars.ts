import { vars } from "nativewind";

export const varColors = {
  "brand-primary": {
    light: "#04AB52",
    dark: "#04AB52"
  },
  "brand-primary-300": {
    light: "#E3FFEA",
    dark: "#00320D"
  },
  "brand-primary-300-inverse": {
    light: "#00320D",
    dark: "#E3FFEA"
  },
  "accent-blue": {
    light: "#049AD2",
    dark: "#049AD2"
  },
  "accent-blue-300": {
    light: "#D7F4FF",
    dark: "#002635"
  },
  "accent-blue-300-inverse": {
    light: "#002635",
    dark: "#D7F4FF"
  },
  "accent-orange": {
    light: "#FF6838",
    dark: "#FF6838"
  },
  "accent-orange-300": {
    light: "#FDDFD6",
    dark: "#501300"
  },
  "accent-orange-300-inverse": {
    light: "#501300",
    dark: "#FDDFD6"
  },
  "text-primary": {
    light: "#1A1A1A",
    dark: "#E0E0E0"
  },
  "text-secondary": {
    light: "#7D7D7D",
    dark: "#898989"
  },
  "text-primary-inverse": {
    light: "#FFFFFF",
    dark: "#111111"
  },
  "text-secondary-inverse": {
    light: "#EDEDED",
    dark: "#7D7D7D"
  },
  border: {
    light: "#EBEBEB",
    dark: "#2F2F2F"
  },
  darker: {
    light: "#D0D4D8",
    dark: "#4A5056"
  },
  "super-light-gray": {
    light: "#EFEFEF",
    dark: "#202020"
  },
  "icon-inactive": {
    light: "#BDBDBD",
    dark: "#898989"
  },
  "icon-active": {
    light: "#BDBDBD",
    dark: "#898989"
  },
  bg: {
    light: "#FFFFFF",
    dark: "#111111"
  },
  "bg-inverse": {
    light: "#111111",
    dark: "#FFFFFF"
  },
  "bg-transparent-50": {
    light: "#FFFFFF", //50%
    dark: "#111111" //50%
  },
  "off-white": {
    light: "#F7F7F7",
    dark: "#202020"
  },
  error: {
    light: "#DC2626",
    dark: "#DC2626"
  }
};
export type ThemeVars = keyof typeof varColors;
export interface ThemeVarsConfig {
  [key: string]: `var(--${ThemeVars})`;

}

const lightVar: Record<`--${ThemeVars}`, string> = {
  // Brand Colors
  "--brand-primary": varColors["brand-primary"].light,
  "--brand-primary-300": varColors["brand-primary-300"].light,
  //Brand Colors Inverse
  "--brand-primary-300-inverse": varColors["brand-primary-300-inverse"].light,
  // Accent Blue
  "--accent-blue": varColors["accent-blue"].light,
  "--accent-blue-300": varColors["accent-blue-300"].light,
  // Accent Blue Inverse
  "--accent-blue-300-inverse": varColors["accent-blue-300-inverse"].light,
  // Accent Orange
  "--accent-orange": varColors["accent-orange"].light,
  "--accent-orange-300": varColors["accent-orange-300"].light,
  // Accent Orange Inverse
  "--accent-orange-300-inverse": varColors["accent-orange-300-inverse"].light,
  // Base Colors
  "--bg": varColors["bg"].light,
  "--bg-inverse": varColors["bg-inverse"].light,
  "--super-light-gray": varColors["super-light-gray"].light,
  "--text-primary": varColors["text-primary"].light,
  "--text-secondary": varColors["text-secondary"].light,
  "--text-primary-inverse": varColors["text-primary-inverse"].light,
  "--text-secondary-inverse": varColors["text-secondary-inverse"].light,
  "--border": varColors["border"].light,
  "--darker": varColors["darker"].light,
  "--icon-inactive": varColors["icon-inactive"].light,
  "--icon-active": varColors["icon-active"].light,
  "--bg-transparent-50": varColors["bg-transparent-50"].light,
  "--off-white": varColors["off-white"].light,
  "--error": varColors["error"].light
};

const darkVar: Record<`--${ThemeVars}`, string> = {
  // Brand Colors
  "--brand-primary": varColors["brand-primary"].dark,
  "--brand-primary-300": varColors["brand-primary-300"].dark,
  // Brand Colors Inverse
  "--brand-primary-300-inverse": varColors["brand-primary-300-inverse"].dark,
  // Accent Blue
  "--accent-blue": varColors["accent-blue"].dark,
  "--accent-blue-300": varColors["accent-blue-300"].dark,
  // Accent Blue Inverse
  "--accent-blue-300-inverse": varColors["accent-blue-300-inverse"].dark,
  // Accent Orange
  "--accent-orange": varColors["accent-orange"].dark,
  "--accent-orange-300": varColors["accent-orange-300"].dark,
  // Accent Orange Inverse
  "--accent-orange-300-inverse": varColors["accent-orange-300-inverse"].dark,
  // Base Colors
  "--bg": varColors["bg"].dark,
  "--bg-inverse": varColors["bg-inverse"].dark,
  "--super-light-gray": varColors["super-light-gray"].dark,
  "--text-primary": varColors["text-primary"].dark,
  "--text-secondary": varColors["text-secondary"].dark,
  "--text-primary-inverse": varColors["text-primary-inverse"].dark,
  "--text-secondary-inverse": varColors["text-secondary-inverse"].dark,
  "--border": varColors["border"].dark,
  "--darker": varColors["darker"].dark,
  "--icon-inactive": varColors["icon-inactive"].dark,
  "--icon-active": varColors["icon-active"].dark,
  "--bg-transparent-50": varColors["bg-transparent-50"].dark,
  "--off-white": varColors["off-white"].dark,
  "--error": varColors["error"].dark
};
export const themesVarsV2 = {
  light: vars(lightVar),
  dark: vars(darkVar)
};
