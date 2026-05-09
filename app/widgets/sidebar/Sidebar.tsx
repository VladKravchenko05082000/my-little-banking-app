import type { FC } from "react";

import { Column } from "~/components";
import {
  BudgetsIcon,
  DashboardIcon,
  ImportsIcon,
  ReportsIcon,
  SubscriptionsIcon,
  TransactionsIcon,
} from "~/components/svg";
import { Logo } from "../logo/Logo";

import { routesConfig } from "~/configs/routesConfig";

import { SideBarSectionEmun } from "~/types/enums";
import { NavLink } from "react-router";

const sidebartemsConfig = [
  {
    section: SideBarSectionEmun.navSection,
    items: [
      {
        icon: DashboardIcon,
        name: "Dashboard",
        navLink: `${routesConfig.dashboard}`,
      },
      {
        icon: TransactionsIcon,
        name: "Transactions",
        navLink: `/${routesConfig.transactions}`,
      },
      {
        icon: BudgetsIcon,
        name: "Budgets",
        navLink: `/${routesConfig.budgets}`,
      },
      {
        icon: SubscriptionsIcon,
        name: "Subscriptions",
        navLink: `/${routesConfig.subscriptions}`,
      },
      {
        icon: ReportsIcon,
        name: "Reports",
        navLink: `/${routesConfig.reports}`,
      },
    ],
  },
  {
    section: SideBarSectionEmun.footerSection,
    items: [
      {
        icon: ImportsIcon,
        name: "Imports",
        navLink: `/${routesConfig.imports}`,
      },
    ],
  },
];

export const Sidebar: FC = ({}) => {
  return (
    <Column
      as="aside"
      className="bg-primary-foreground border-r border-border py-4 px-3 min-w-50"
    >
      <Logo />
      <Column className="justify-between flex-1">
        {sidebartemsConfig.map(({ section, items }, index) => {
          return (
            <Column
              key={index}
              className={`gap-1${section === SideBarSectionEmun.footerSection ? " relative sidebar-footer-divider-top" : ""}`}
            >
              {items.map(({ icon: Icon, name, navLink }) => {
                return (
                  <NavLink
                    to={navLink}
                    className={({ isActive }) =>
                      `flex items-center gap-2 py-1.75 px-2.5 rounded-lg ${!isActive ? "hover:bg-secondary" : ""}`
                    }
                    style={({ isActive }) => {
                      return {
                        background: isActive ? "var(--background)" : "",
                        fontWeight: isActive ? "500" : "400",
                        color: isActive
                          ? "var(--foreground)"
                          : "var(--muted-foreground)",
                        boxShadow: isActive ? "0 0 0 1px var(--border)" : "",
                      };
                    }}
                  >
                    <Icon color="currentColor" />
                    <p className="text-base">{name}</p>
                  </NavLink>
                );
              })}
            </Column>
          );
        })}
      </Column>
    </Column>
  );
};
