import { IconWrapper, type SvgProps } from "../../IconWrapper";

export const DashboardIcon = ({ color = "#000", ...props }: SvgProps) => {
  return (
    <IconWrapper viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
      <rect x="4" y="4" width="6" height="8" rx="1"></rect>
      <rect x="4" y="16" width="6" height="4" rx="1"></rect>
      <rect x="14" y="12" width="6" height="8" rx="1"></rect>
      <rect x="14" y="4" width="6" height="4" rx="1"></rect>
    </IconWrapper>
  );
};
