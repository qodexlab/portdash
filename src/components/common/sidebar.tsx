"use client";

import { SidebarButton } from "@/components/buttons/sidebar-button";
import { NAV_LINKS } from "@/constants/navLinks";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isSidebarCollapsed: boolean;
}

export function Sidebar({ isSidebarCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`bg-background shadow-md transition-all duration-300 ease-in-out ${isSidebarCollapsed ? "w-18" : "w-64"}`}
    >
      <nav className={`space-y-2 p-4 ${isSidebarCollapsed ? "flex flex-col items-center" : ""}`}>
        {NAV_LINKS.map(({ id, label, route, Icon }) => (
          <SidebarButton
            key={id}
            activeTab={pathname}
            isSidebarCollapsed={isSidebarCollapsed}
            Icon={Icon}
            label={label}
            route={route}
          />
        ))}
      </nav>
    </aside>
  );
}
