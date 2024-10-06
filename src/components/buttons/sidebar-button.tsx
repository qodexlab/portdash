"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant={activeTab === route ? "default" : "ghost"}
        className={`w-full justify-start ${isSidebarCollapsed ? "h-10 w-10 p-0" : "h-10 p-2.5"}`}
        onClick={handleClick}
      >
        <Icon className={`h-5 w-5 ${isSidebarCollapsed ? "mx-auto" : "mr-3"}`} />
        <motion.div
          initial={false}
          animate={{
            opacity: isSidebarCollapsed ? 0 : 1,
            width: isSidebarCollapsed ? 0 : "auto",
          }}
          transition={{
            opacity: { duration: 0.5, ease: "easeInOut" },
            width: { duration: 0.2, ease: "easeInOut" },
          }}
          style={{ overflow: "hidden" }}
        >
          {!isSidebarCollapsed && <span className="whitespace-nowrap">{label}</span>}
        </motion.div>
      </Button>
    </motion.div>
  );
};
