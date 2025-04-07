import React, { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { RTCView } from "../RTCView";
import { ViewProps } from "react-native";
import type { ClassValue } from "clsx";

type VStackProps = PropsWithChildren<
  {
    className?: ClassValue;
    flex?: boolean;
    center?: "both" | "vertical" | "horizontal";
  } & ViewProps
>;
const VStack = ({ children, className, flex, center, ...props }: VStackProps) => {
  return (
    <RTCView
      className={cn(
        "flex-col",
        flex && "flex-1",
        center === "vertical" && "justify-center",
        center === "horizontal" && "items-center",
        center === "both" && "justify-center items-center",
        className
      )}
      {...props}>
      {children}
    </RTCView>
  );
};

export default VStack;
