import type { FC } from "react";

import { Link } from "react-router";
import { FlexBox } from "~/components";
import { LogoIcon } from "~/components/svg";

import { brandName } from "~/configs/core";
import { routesConfig } from "~/configs/routesConfig";

export const Logo: FC = ({}) => {
  return (
    <Link to={routesConfig.dashboard}>
      <FlexBox className="gap-2 mb-4.5 items-center cursor-pointer">
        <LogoIcon />

        <p className="font-semibold">{brandName}</p>
      </FlexBox>
    </Link>
  );
};
