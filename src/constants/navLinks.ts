import { UserIcon, BriefcaseIcon, SettingsIcon, CodeIcon, GlobeIcon } from "lucide-react";

export const NAV_LINKS = [
  {
    id: "info",
    label: "Personal Info",
    route: "/dashboard/info",
    Icon: UserIcon,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    route: "/dashboard/portfolio",
    Icon: BriefcaseIcon,
  },
  {
    id: "social",
    label: "Social & Contact",
    route: "/dashboard/social-contact",
    Icon: GlobeIcon,
  },
  {
    id: "settings",
    label: "Settings",
    route: "/dashboard/settings",
    Icon: SettingsIcon,
  },
  {
    id: "api",
    label: "API Usage",
    route: "/dashboard/api-usage",
    Icon: CodeIcon,
  },
];
