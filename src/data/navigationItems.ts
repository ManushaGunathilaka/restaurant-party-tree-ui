export const navigationItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    requiredRoles: ["default-roles-gangfy-uat"],
  },
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
];
