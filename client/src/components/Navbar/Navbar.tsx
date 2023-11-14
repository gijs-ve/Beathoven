import { T_NavItem } from "../../../../types";
import { NavItem } from "./NavItem";

export const Navbar = ({ navItems }: { navItems: T_NavItem[] }) => {
  return (
    <header className="py-[3%] flex justify-center items-center w-[100%] h-8 bg-gray-800">
      {navItems.map((navItem) => {
        return <NavItem key={navItem.href} navItem={navItem} />;
      })}
    </header>
  );
};
