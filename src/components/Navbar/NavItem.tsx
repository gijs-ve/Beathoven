import { T_NavItem } from "@/types";
import Link from "next/link";

export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return (
    <div className="flex items-center px-4 h-4 text-xl">
      <Link href={navItem.href}>{navItem.title}</Link>
    </div>
  );
};
