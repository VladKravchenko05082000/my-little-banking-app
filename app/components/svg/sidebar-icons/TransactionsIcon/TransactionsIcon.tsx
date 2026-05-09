import { IconWrapper, type SvgProps } from "../../IconWrapper";

export const TransactionsIcon = ({ color = "#000", ...props }: SvgProps) => {
  return (
    <IconWrapper viewBox="0 0 24 24" fill="none" stroke={color} {...props}>
      <path d="M9 6h11M9 12h11M9 18h11M5 6v.01M5 12v.01M5 18v.01"></path>
    </IconWrapper>
  );
};
