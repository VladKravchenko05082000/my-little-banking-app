import type { FC, ReactNode } from "react";

interface FlexBoxProps {
  children?: ReactNode;
  className?: string;
}

export const FlexBox: FC<FlexBoxProps> = ({ children, className }) => {
  return <div className={`flex ${className ?? ""}`}>{children}</div>;
};
