import { T_NavItem } from "@/types";

export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return <>{navItem.title}</>;
};
