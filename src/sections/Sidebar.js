"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SideBarSingleLink from "../components/SideBarSingleLink";
import Link from "next/link";
import { NAV_ARRAY } from "@/utils/contants";
import { myContext } from "@/context/Store";

function Sidebar() {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(null);

  const { sidebarExpanded } = myContext();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);
      }
    });
  });

  return (
    <aside
      className={`bg-main_black_color lg:left-auto lg:top-auto lg:translate-x-0 shrink-0 -translate-x-64 w-64 lg:w-64 rounded-tr-2xl rounded-br-2xl 2xl:!w-64 fixed z-20 duration-500 ease-in-out ${
        sidebarExpanded ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div
        id="sidebar"
        className={`flex flex-col absolute h-screen z-30 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 py-4 pr-4 rounded-tr-2xl rounded-br-2xl bg-main_black_color transition-all duration-500 ease-in-out ${
          sidebarExpanded ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex mb-9 border-white border-b border-opacity-30 pb-5 justify-center">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <div className="rounded-full border-white border-2 w-28 h-28 flex items-center justify-center text-white font-bold">
                Logo here
              </div>
            </Link>
          </div>
        </div>

        <div className="overflow-y-scroll lg:overflow-y-auto no-scrollbar">
          {NAV_ARRAY.map((nav) => (
            <SideBarSingleLink
              key={nav.link}
              link={nav.link}
              title={nav.title}
              image={nav.img}
              active={nav.link == activeNav?.link}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
