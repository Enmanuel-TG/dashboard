'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";



interface SidebarMenuItemProps {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  path: string;
}

export const SidebarMenuItem = ({ title, subTitle, icon, path }: SidebarMenuItemProps) => {
  const namePath = usePathname();

  return (
    <Link
      href={path}
      className={`w-full px-2 flex space-x-2 items-center border-b py-3 hover:bg-blue-800 transition duration-150 ${
        namePath === path ? "bg-blue-800" : "border-slate-700"
      }`}    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};

