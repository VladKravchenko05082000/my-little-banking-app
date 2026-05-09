import { IconWrapper, type SvgProps } from "../../IconWrapper";

export const ReportsIcon = ({ color = "#000", ...props }: SvgProps) => {
  return (
    <IconWrapper viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path>
      <rect x="9" y="3" width="6" height="4" rx="2"></rect>
      <path d="M9 17v-5M12 17v-1M15 17v-3"></path>
    </IconWrapper>
  );
};
