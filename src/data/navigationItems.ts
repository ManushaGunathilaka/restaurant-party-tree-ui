// src/data/navigationItems.ts
export const categorizedNavigationItems = {
  main: [
    {
      name: "Dashboard",
      href: "/dashboard",
      requiredRoles: ["default-roles-gangfy-uat", "manager", "user"],
    },
  ],
  management: [
    {
      name: "Restaurant",
      href: "/restaurant",
      requiredRoles: ["default-roles-gangfy-uat", "manager"],
    },
    {
      name: "Product Category",
      href: "/productcategory",
      requiredRoles: ["default-roles-gangfy-uat", "manager"],
    },
    {
      name: "Product",
      href: "/product",
      requiredRoles: ["admin", "manager", "staff"],
    },
    {
      name: "Customers",
      href: "/customers",
      requiredRoles: ["admin", "manager"],
    },
  ],
  operations: [
    {
      name: "Orders",
      href: "/orders",
      requiredRoles: ["admin", "manager", "staff", "user"],
    },
    {
      name: "Reports",
      href: "/reports",
      requiredRoles: ["admin", "manager"],
    },
  ],
  settings: [
    {
      name: "Roles & Access",
      href: "/roles-access",
      requiredRoles: ["admin"],
    },
    {
      name: "General Settings",
      href: "/settings",
      requiredRoles: ["admin", "manager"],
    },
    {
      name: "Notifications",
      href: "/notifications",
      requiredRoles: ["admin", "manager", "user"],
    },
  ],
};

export const categoryConfig = {
  main: { displayName: "", showHeader: false, collapsible: false },
  management: {
    displayName: "MANAGEMENT",
    showHeader: true,
    collapsible: true,
  },
  operations: {
    displayName: "OPERATIONS",
    showHeader: true,
    collapsible: true,
  },
  settings: { displayName: "SETTINGS", showHeader: true, collapsible: true },
};

export const navigationItems = [
  ...categorizedNavigationItems.main,
  ...categorizedNavigationItems.management,
  ...categorizedNavigationItems.operations,
  ...categorizedNavigationItems.settings,
];
