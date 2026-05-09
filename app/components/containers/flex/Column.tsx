import type { FC, ReactNode } from "react";

interface ColumnProps {
  children?: ReactNode;
  className?: string;
}

export const Column: FC<ColumnProps> = ({ children, className }) => {
  return <div className={`flex-col ${className ?? ""}`}>{children}</div>;
};
