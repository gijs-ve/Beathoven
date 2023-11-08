import { T_NavItem } from "@/types";
import Link from "next/link";

export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return (
    <Link href={navItem.href}>
      <button className="flex items-center justify-center px-16 py-8 h-4 text-xl border-xl border-2 rounded-xl mx-4 bg-blueish-700 border-blueish-400 w-[250px] hover:bg-blueish-800">
        {navItem.title}
      </button>
    </Link>
  );
};
