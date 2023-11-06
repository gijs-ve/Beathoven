import { T_NavItem } from "@/types";
import Link from "next/link";

export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return (
    <button className="flex items-center justify-center px-16 py-8 h-4 text-xl border-xl border-2 rounded-xl mx-4 bg-blue-700 border-orange-400 w-[250px]">
      <Link href={navItem.href}>{navItem.title}</Link>
    </button>
  );
};
