"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SidebarButtonProps {
  activeTab: string;
  route: string;
  isSidebarCollapsed: boolean;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export const SidebarButton = ({
  activeTab,
  route,
  isSidebarCollapsed,
  Icon,
  label,
}: SidebarButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(route);
  };

  return (
    <Button
      variant={activeTab === route ? "default" : "ghost"}
      className={`w-full justify-start ${isSidebarCollapsed ? "h-10 w-10 p-0" : "h-10 p-2.5"}`}
      onClick={handleClick}
    >
      <Icon className={`h-5 w-5 ${isSidebarCollapsed ? "mx-auto" : "mr-3"}`} />
      {!isSidebarCollapsed && <span>{label}</span>}
    </Button>
  );
};
