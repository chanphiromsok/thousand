import React, { PropsWithChildren } from "react";
import { themesVars } from "./themeVars";
import Stack from "../components/views/Stack";

export const Theme = ({
  children,
  theme: selectedTheme,
}: PropsWithChildren<{ theme: "dark" | "light" | "system" }>) => {
  return (
    <Stack
      className="flex-1"
      style={themesVars[selectedTheme as "dark" | "light"]}
    >
      {children}
    </Stack>
  );
};
