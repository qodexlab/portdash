"use client";

import { Header } from "@/components/common/header";
import { Sidebar } from "@/components/common/sidebar";

import { useSidebarCollapse } from "@/hooks/useSidebarCollapse";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarCollapse();

  return (
    <div className="flex h-screen flex-col bg-stone-50 dark:bg-stone-900">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
}
