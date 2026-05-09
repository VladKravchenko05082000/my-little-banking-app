import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";
import { routesConfig } from "./configs/routesConfig";

export default [
  layout("./routes/mainLayout.tsx", [
    index("./routes/dashboard/page.tsx"),
    route(`${routesConfig.transactions}`, "./routes/transactions/layout.tsx", [
      index("./routes/transactions/page.tsx"),
      route(
        `${routesConfig.transactionsDetails}/:id`,
        "./routes/transactions/transaction-details/page.tsx",
      ),
    ]),
    route(`${routesConfig.budgets}`, "./routes/budgets/page.tsx"),
    route(`${routesConfig.subscriptions}`, "./routes/subscriptions/page.tsx"),
    route(`${routesConfig.reports}`, "./routes/reports/page.tsx"),
    route(`${routesConfig.imports}`, "./routes/imports/page.tsx"),
  ]),
] satisfies RouteConfig;
