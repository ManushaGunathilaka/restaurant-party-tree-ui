// src/components/Sidebar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Store,
  Grid3X3,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Shield,
  Bell,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import {
  categorizedNavigationItems,
  categoryConfig,
} from "@/data/navigationItems"; // Adjust path as needed

interface NavigationItem {
  name: string;
  href: string;
  requiredRoles: string[];
}

interface CategorizedNavigationItems {
  [key: string]: NavigationItem[];
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  requiredRoles?: string[];
  children?: MenuItem[];
}

// Icon mapping for navigation items
const iconMap: { [key: string]: React.ReactNode } = {
  "/dashboard": <LayoutDashboard size={20} />,
  "/restaurant": <Store size={20} />,
  "/productcategory": <Grid3X3 size={20} />,
  "/product": <Package size={20} />,
  "/customers": <Users size={20} />,
  "/orders": <ShoppingCart size={20} />,
  "/reports": <BarChart3 size={20} />,
  "/roles-access": <Shield size={20} />,
  "/settings": <Settings size={20} />,
  "/notifications": <Bell size={20} />,
};

// Category display names and whether they should be collapsible are now imported from navigation data

export default function Sidebar() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "main",
    "management",
  ]);
  const pathname = usePathname();

  // Convert categorized navigation items to menu items format
  const convertToMenuItems = (): MenuItem[] => {
    const menuItems: MenuItem[] = [];

    Object.entries(categorizedNavigationItems).forEach(
      ([categoryKey, items]) => {
        const config =
          categoryConfig[categoryKey as keyof typeof categoryConfig];

        if (!config.showHeader) {
          // For main section, add items directly without category header
          items.forEach((item, index) => {
            menuItems.push({
              id: item.href.replace("/", "") || `item-${index}`,
              label: item.name,
              icon: iconMap[item.href] || <LayoutDashboard size={20} />,
              href: item.href,
              requiredRoles: item.requiredRoles,
            });
          });
        } else {
          // For other sections, create category with children
          const categoryItems: MenuItem[] = items.map((item, index) => ({
            id: item.href.replace("/", "") || `item-${index}`,
            label: item.name,
            icon: iconMap[item.href] || <LayoutDashboard size={20} />,
            href: item.href,
            requiredRoles: item.requiredRoles,
          }));

          if (config.collapsible) {
            menuItems.push({
              id: categoryKey,
              label: config.displayName,
              icon: null,
              children: categoryItems,
            });
          } else {
            // Add section header
            menuItems.push({
              id: `${categoryKey}-header`,
              label: config.displayName,
              icon: null,
              children: categoryItems,
            });
          }
        }
      }
    );

    return menuItems;
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (href?: string) => {
    return href && pathname === href;
  };

  // Check if user has required roles (implement based on your auth system)
  const hasRequiredRoles = (requiredRoles?: string[]) => {
    // TODO: Implement role checking logic based on your authentication system
    return true;
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    // Check if user has required roles
    if (item.requiredRoles && !hasRequiredRoles(item.requiredRoles)) {
      return null;
    }

    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedCategories.includes(item.id);
    const active = isActive(item.href);

    // Section header (non-collapsible)
    if (
      !item.icon &&
      hasChildren &&
      !categoryConfig[item.id as keyof typeof categoryConfig]?.collapsible
    ) {
      return (
        <div key={item.id} className="mt-6 mb-2">
          <div className="px-4 py-2">
            <span className="text-xs font-semibold text-default-500 uppercase tracking-wider">
              {item.label}
            </span>
          </div>
          {item.children?.map((child) => renderMenuItem(child, level + 1))}
        </div>
      );
    }

    // Collapsible category
    if (hasChildren) {
      return (
        <div key={item.id} className="mb-1">
          <button
            onClick={() => toggleExpanded(item.id)}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-default-700 hover:bg-default-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-default-500 uppercase tracking-wider">
                {item.label}
              </span>
            </div>
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {isExpanded && (
            <div className="mt-1 space-y-1">
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    }

    // Regular menu item
    const Component = item.href ? Link : "div";
    return (
      <Component
        key={item.id}
        href={item.href || "#"}
        className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-colors mb-1 ${
          active
            ? "bg-primary text-primary-foreground font-medium"
            : "text-default-700 hover:bg-default-100"
        }`}
      >
        {item.icon}
        <span>{item.label}</span>
      </Component>
    );
  };

  const menuItems = convertToMenuItems();

  return (
    <div className="w-64 h-screen bg-white border-r border-default-200 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-6 border-b border-default-200">
        <span className="text-xl font-bold text-foreground">SOFFCRICKET</span>
      </div>

      {/* Menu Items */}
      <nav className="p-4">{menuItems.map((item) => renderMenuItem(item))}</nav>
    </div>
  );
}
