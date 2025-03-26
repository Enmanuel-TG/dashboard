'use client';

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);
  return (
    <div className="flex flex-wrap p-2 justify-center items-center">
      <SimpleWidget data={{
        tittle: count,
        subTittle: "Products adds",
        label: "Label",
        icon: <IoCartOutline className="mr-2" size={20} />,
        href: "/dashboard/counter"
      }} />
    </div>
  );
};

