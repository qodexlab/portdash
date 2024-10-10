// useSidebarCollapse.ts
import { useState, useEffect } from "react";

export const useSidebarCollapse = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024 ? true : false,
  );

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return { isSidebarCollapsed, toggleSidebar };
};
