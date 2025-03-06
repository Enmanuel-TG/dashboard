import Image from "next/image";
import { IoLogoReact, IoBrowsersOutline, IoCalculator } from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const sidebarMenu = [
  {
    title: "Dashboard",
    subTitle: "Dashboard Manager",
    icon: <IoBrowsersOutline className="mr-2" size={20} />,
    path: "/dashboard",
  },
  {
    title: "Database",
    subTitle: "Database Manager",
    icon: <IoCalculator className="mr-2" size={20} />,
    path: "/database",
  },
];


export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-[400px] left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className=" my-4 px-6">
              <h1 className=" flex items-center text-lg md:text-2xl font-bold text-white">
        <IoLogoReact size={25} className="mr-2" />
        <span>Dash</span>
          <span className="text-blue-500"> 8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              src="/avatar.jpg"
              className="w-10 h-10 rounded-full"
              width={100}
              height={100}
              alt="avatar"
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Enmanuel Taveras
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {sidebarMenu.map((item, index) => (
          <SidebarMenuItem key={index} {...item} />
        ))}

      </div>
    </div>
  );
};
