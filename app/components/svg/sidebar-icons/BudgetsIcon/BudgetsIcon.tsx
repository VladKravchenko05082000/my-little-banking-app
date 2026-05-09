import { IconWrapper, type SvgProps } from "../../IconWrapper";

export const BudgetsIcon = ({ color = "#000", ...props }: SvgProps) => {
  return (
    <IconWrapper viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
      <path d="M10 3.2A9 9 0 1 0 20.8 14H12V3.2"></path>
      <path d="M15 3.5A9 9 0 0 1 20.5 9H15V3.5z"></path>
    </IconWrapper>
  );
};
