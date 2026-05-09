export interface IconWrapperInterface extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

export interface SvgProps extends Omit<IconWrapperInterface, "children"> {}

export const IconWrapper = ({
  className,
  children,
  ...props
}: IconWrapperInterface) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      widths={24}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
};
