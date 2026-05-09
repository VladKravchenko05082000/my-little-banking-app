import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface FlexBoxCenteredProps<T extends ElementType = "div"> {
  children?: ReactNode;
  className?: string;
  as?: T;
}

export const FlexBoxCentered = <T extends ElementType = "div">({
  children,
  className,
  as,
  ...rest
}: FlexBoxCenteredProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof FlexBoxCenteredProps<T>>) => {
  const Tag = as ?? "div";
  return (
    <Tag
      className={`flex items-center justify-center ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};
