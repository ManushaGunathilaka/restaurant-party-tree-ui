export const categorizedNavigationItems = {
  main: [
    {
      name: "Dashboard",
      href: "/dashboard",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
  ],
  management: [
    {
      name: "Restaurant",
      href: "/restaurant",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
    {
      name: "Product Category",
      href: "/productcategory",
      requiredRoles: ["default-roles-gangfy-uat", "CUSTOMER"],
    },
    {
      name: "Product",
      href: "/product",
      requiredRoles: ["default-roles-gangfy-uat", "CUSTOMER"],
    },
    {
      name: "Customers",
      href: "/customers",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
  ],
  operations: [
    {
      name: "Orders",
      href: "/orders",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
    {
      name: "Reports",
      href: "/reports",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
  ],
  settings: [
    {
      name: "Roles & Access",
      href: "/roles-access",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
    {
      name: "General Settings",
      href: "/settings",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
    {
      name: "Notifications",
      href: "/notifications",
      requiredRoles: ["default-roles-gangfy-uat"],
    },
  ],
};

// Category configuration
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

// Legacy flat structure for backward compatibility
export const navigationItems = [
  ...categorizedNavigationItems.main,
  ...categorizedNavigationItems.management,
  ...categorizedNavigationItems.operations,
  ...categorizedNavigationItems.settings,
];
