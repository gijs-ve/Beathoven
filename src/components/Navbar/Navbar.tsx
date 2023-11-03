import { T_NavItem } from "@/types";
import { NavItem } from "./NavItem";

export const Navbar = ({ navItems }: { navItems: T_NavItem[] }) => {
  return (
    <div className="w-full h-16">
      {navItems.map((navItem) => {
        return <NavItem key={navItem.href} navItem={navItem} />;
      })}
    </div>
  );
};
