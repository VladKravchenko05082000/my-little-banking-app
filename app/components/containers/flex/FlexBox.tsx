import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface FlexBoxProps<T extends ElementType = "div"> {
  children?: ReactNode;
  className?: string;
  as?: T;
}

export const FlexBox = <T extends ElementType = "div">({
  children,
  className,
  as,
  ...rest
}: FlexBoxProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof FlexBoxProps<T>>) => {
  const Tag = as ?? "div";
  return (
    <Tag {...rest} className={`flex ${className ?? ""}`}>
      {children}
    </Tag>
  );
};
