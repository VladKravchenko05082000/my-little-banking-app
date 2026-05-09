import type { FC, ReactNode } from "react";

interface FlexBoxCenteredProps {
  children?: ReactNode;
  className?: string;
}

export const FlexBoxCentered: FC<FlexBoxCenteredProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      {children}
    </div>
  );
};
