import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ReverseColumnProps<T extends ElementType = "div"> {
  children?: ReactNode;
  className?: string;
  as?: T;
}

export const ReverseColumn = <T extends ElementType = "div">({
  children,
  className,
  as,
  ...rest
}: ReverseColumnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ReverseColumnProps<T>>) => {
  const Tag = as ?? "div";
  return (
    <Tag className={`flex flex-col-reverse ${className ?? ""}`} {...rest}>
      {children}
    </Tag>
  );
};
