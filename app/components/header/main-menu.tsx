import { useState } from "react";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUsers, faBars } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";

export default function MainMenu({
  className,
  onToggleCollapse, // New prop for handling collapse state
}: {
  className?: string;
  onToggleCollapse: (isCollapsed: boolean) => void; // Function to trigger layout change
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onToggleCollapse(newCollapsedState);
  };

  return (
    <nav
      className={cn(
        "md:bg-muted overflow-auto p-4 flex flex-col transition-width duration-300",
        className,
        { "w-16": isCollapsed, "w-64": !isCollapsed }
      )}
    >
      <header className="hidden md:block border-b dark:border-b-black border-b-zinc-300 pb-4 items-center justify-between">
        <button onClick={toggleMenu} className="p-2">
          <FontAwesomeIcon
            icon={faBars}
            style={{ width: "18px", height: "18px" }}
          />
        </button>
      </header>
      <div className="py-4 grow">
        <MenuItem
          submenu={
            !isCollapsed
              ? [
                  {
                    label: "Industry Report",
                    submenu: [
                      {
                        label: "Analytics",
                        href: "/dashboard/analytics",
                      },
                      {
                        label: "Summary",
                        href: "/dashboard/summary",
                      },
                     
                    ],
                  },
                  {
                    label: "Suplier Report",
                    submenu: [
                      {
                        label: "General",
                        href: "/dashboard/supplier-report",
                      },
                      {
                        label: "Bonus Conversion Report",
                        href: "/dashboard/bonus-report",
                      },
                      {
                        label: "Market Conversion Reports",
                        href: "/dashboard/market-reports",
                      },
                      {
                        label: "Player Conversion Reports",
                        href: "/dashboard/players-reports",
                      },
                    ],
                  },
                ]
              : []
          }
          isCollapsed={isCollapsed}
        >
          <FontAwesomeIcon
            icon={faChartBar}
            className="mr-2"
            style={{ width: "18px", height: "18px" }}
          />
          {!isCollapsed && <span className="text-sm">Dashboard</span>}
        </MenuItem>

        <MenuItem
          submenu={
            !isCollapsed
              ? [
                  {
                    label: "Organization",
                    submenu: [
                      {
                        label: "General",
                        href: "/admin/organization",
                      },
                      {
                        label: "Create organization",
                        href: "/admin/create-organization",
                      },
                    ],
                  },
                  {
                    label: "Users and permission",
                    submenu: [
                      {
                        label: "General",
                        href: "/admin/users",
                      },
                      {
                        label: "Permissions",
                        href: "/admin/permissions",
                      },
                      {
                        label: "Assign permission",
                        href: "/admin/testing2",
                      },
                    ],
                  },
                ]
              : []
          }
          isCollapsed={isCollapsed}
        >
          <FontAwesomeIcon
            icon={faUsers}
            className="mr-2"
            style={{ width: "18px", height: "18px" }}
          />
          {!isCollapsed && <span className="text-sm">User Management</span>}
        </MenuItem>
      </div>

      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-blue-500 dark:bg-blue-800">
            NOE
          </AvatarFallback>
        </Avatar>

      </div>
    </nav>
  );
}
