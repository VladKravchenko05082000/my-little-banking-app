import type { FC, ReactNode } from "react";

interface ReverseColumnProps {
  children?: ReactNode;
  className?: string;
}

export const ReverseColumn: FC<ReverseColumnProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex-col-reverse ${className ?? ""}`}>{children}</div>
  );
};
