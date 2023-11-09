"use client";
import { T_NavItem } from "@/types";
import { motion } from "framer-motion";
import Link from "next/link";
export const NavItem = ({ navItem }: { navItem: T_NavItem }) => {
  return (
    <Link href={navItem.href}>
      <motion.button
        style={{
          height: 68,
        }}
        whileHover={{ height: 76 }}
        className="flex items-center justify-center px-16 py-8 text-xl border-xl border-2 rounded-xl mx-4 bg-blueish-700 border-blueish-800 w-[250px] hover:bg-blueish-800 hover:drop-shadow-xl"
      >
        {navItem.title}
      </motion.button>
    </Link>
  );
};
