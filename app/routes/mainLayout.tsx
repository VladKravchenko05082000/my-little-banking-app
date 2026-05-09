import { Outlet } from "react-router";
import { Column, FlexBox } from "~/components";

import { Sidebar } from "~/widgets";

export default function DashboardLayout() {
  return (
    <FlexBox className="h-dvh w-full overflow-hidden bg-background">
      <Sidebar />

      <Column as="main" className="overflow-y-auto py-5.5 px-7">
        <Outlet />
      </Column>
    </FlexBox>
  );
}
