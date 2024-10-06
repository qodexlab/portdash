"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { SidebarButton } from "@/components/buttons/sidebar-button";

import { NAV_LINKS } from "@/constants/navLinks";

interface SidebarProps {
  isSidebarCollapsed: boolean;
}

export function Sidebar({ isSidebarCollapsed }: SidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ width: isSidebarCollapsed ? 72 : 256 }} // Initial width in pixels (18rem and 64rem)
      animate={{ width: isSidebarCollapsed ? 72 : 256 }} // Animate to the new width
      transition={{ duration: 0.3, ease: "easeInOut" }} // Transition settings
      className="bg-background shadow-md"
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
    </motion.aside>
  );
}
