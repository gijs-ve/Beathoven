import { T_NavItem } from "@/types";
import Link from "next/link";

export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return (
    <div className="w-full h-4">
      <Link href={navItem.href}>{navItem.title}</Link>
    </div>
  );
};
