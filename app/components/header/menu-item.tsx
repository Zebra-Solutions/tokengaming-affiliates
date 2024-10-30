import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { DrawerContext } from "@/components/ui/drawer";

type SubmenuItem = {
  label: string;
  href?: string;
  submenu?: SubmenuItem[];
};

type MenuItemProps = {
  children: React.ReactNode;
  href?: string;
  submenu?: SubmenuItem[];
  isCollapsed: boolean; 
};

export default function MenuItem({ children, href, submenu, isCollapsed }: MenuItemProps) {
  const {onClose} = useContext(DrawerContext);
  const pathname = usePathname();
  const isActive = pathname === href;
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {href ? (
        <Link
          className={cn(
            "block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-xs text-muted-foreground hover:text-foreground", 
            isActive &&
              "bg-neutral-200 dark:bg-zinc-700 hover:bg-primary hover:text-primary-foreground text-foreground"
          )}
          href={href}
          onClick={onClose}
        >
          {children}
        </Link>
      ) : (
        <button
          className="flex justify-between items-center p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-xs text-muted-foreground hover:text-foreground w-full text-left" 
          onClick={handleToggleSubmenu}
        >
          <span>{children}</span>
          {!isCollapsed && ( 
           <FontAwesomeIcon
           icon={isOpen ? faChevronDown : faChevronRight}
           className="ml-2 text-gray-400"
           style={{ width: '12px', height: '12px' }}  
         />
          )}
        </button>
      )}

      {/* Submenu */}
      {submenu && isOpen && !isCollapsed && ( // Only show submenu when expanded
        <div className="ml-4 mt-2 space-y-1">
          {submenu.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="block p-2 hover:bg-white dark:hover:bg-zinc-700 rounded-md text-xs text-muted-foreground hover:text-foreground" 
                  onClick={onClose}>
                  {item.label}
                </Link>
              ) : (
                <MenuItem submenu={item.submenu} isCollapsed={isCollapsed}>
                  {item.label}
                </MenuItem>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
