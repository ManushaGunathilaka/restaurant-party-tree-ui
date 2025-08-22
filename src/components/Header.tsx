"use client";

import { User } from "next-auth";
import Logout from "./Logout";

interface HeaderProps {
  user?: User;
}

export default function Header({ user }: HeaderProps) {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-default-200">
      <div className="text-sm text-default-600">{currentDate}</div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">
              {user?.name || "Smith Perera"}
            </div>
            <div className="text-xs text-default-500">
              {user?.email || "smith210@gmail.com"}
            </div>
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">
              {(user?.name || "SP").charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        <Logout />
      </div>
    </header>
  );
}
