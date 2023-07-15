"use client";

import { NAV_ARRAY } from "@/utils/contants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BACK_ARROW_IMAGE from "../assets/backArrow.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { myContext } from "@/context/Store";

const Header = () => {
  const [activeNav, setActiveNav] = useState(null);
  const pathname = usePathname();
  const { sidebarExpanded, setSidebarExpanded } = myContext();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);
      }
    });
  });

  const openNav = () => {
    setSidebarExpanded(true);
  };

  return (
    <div className="h-28 flex items-center lg:ml-64 lg:max-w-[80%] overflow-x-hidden">
      <img
        onClick={openNav}
        className="cursor-pointer mr-5 block lg:hidden xl:hidden 2xl:hidden "
        width="30"
        height="30"
        src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
        alt="menu--v1"
      />
      <div className="flex gap-1">
        {activeNav?.link == "/" ? null : (
          <div className="bg-main_green_color hidden lg:flex items-center rounded-md px-2 mr-2 cursor-pointer">
            <Link href="/">
              <Image src={BACK_ARROW_IMAGE} alt="" />
            </Link>
          </div>
        )}
        <h3 className="text-3xl font-bold">{activeNav?.title}</h3>
      </div>
    </div>
  );
};

export default Header;
