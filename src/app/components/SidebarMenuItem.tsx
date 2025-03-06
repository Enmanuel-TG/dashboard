import { JSX } from "react";

interface SidebarMenuItemProps {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  path: string;
}

export const SidebarMenuItem = ({ title, subTitle, icon, path }: SidebarMenuItemProps) => {
  return (
    <a
      href="#"
      className="w-full px-2 flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-blue-800 transition duration-150"
    >
      <div>
        {icon}
          <path strokeLinecap="round" strokeLinejoin="round" d={path} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </a>
  );
};

