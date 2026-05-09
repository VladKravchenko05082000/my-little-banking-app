import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ColumnProps<T extends ElementType = "div"> {
  as?: T;
  children?: ReactNode;
  className?: string;
}

export const Column = <T extends ElementType = "div">({
  as,
  children,
  className,
  ...rest
}: ColumnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ColumnProps<T>>) => {
  const Tag = as ?? "div";
  return (
    <Tag className={`flex flex-col ${className ?? ""}`} {...rest}>
      {children}
    </Tag>
  );
};
