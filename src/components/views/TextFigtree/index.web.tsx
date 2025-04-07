import React from "react";
import { Text, TextProps } from "react-native";
import { cn } from "../../utils";

type Props = {
  children: string;
  className?: string;
} & TextProps;
const TextFigtree = ({ children, className, ...props }: Props) => {
  return (
    <Text className={cn("text-typography", className)} {...props}>
      {children}
    </Text>
  );
};

export default TextFigtree;
