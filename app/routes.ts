import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("./routes/mainLayout.tsx", [
    index("./routes/dashboard/page.tsx"),
    route("transactions", "./routes/transactions/layout.tsx", [
      index("./routes/transactions/page.tsx"),
      route(
        "transaction-details/:id",
        "./routes/transactions/transaction-details/page.tsx",
      ),
    ]),
    route("budgets", "./routes/budgets/page.tsx"),
    route("subscriptions", "./routes/subscriptions/page.tsx"),
    route("reports", "./routes/reports/page.tsx"),
  ]),
] satisfies RouteConfig;
