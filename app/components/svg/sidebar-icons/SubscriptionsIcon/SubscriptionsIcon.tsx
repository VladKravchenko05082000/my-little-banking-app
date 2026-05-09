import { IconWrapper, type SvgProps } from "../../IconWrapper";

export const SubscriptionsIcon = ({ color = "#000", ...props }: SvgProps) => {
  return (
    <IconWrapper viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
      <path d="M4 12V8a4 4 0 0 1 4-4h12l-3 -3M20 12v4a4 4 0 0 1 -4 4H4l3 3"></path>
    </IconWrapper>
  );
};
