"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SideBarSingleLink from "../components/SideBarSingleLink";
import Link from "next/link";
import { NAV_ARRAY } from "@/utils/contants";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(null);

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  // const [sidebarExpanded, setSidebarExpanded] = useState(
  //   storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  // );

  const storedSidebarExpanded = "";
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  //   // close on click outside
  //   useEffect(() => {
  //     const clickHandler = ({ target }) => {
  //       if (!sidebar.current || !trigger.current) return;
  //       if (
  //         !sidebarOpen ||
  //         sidebar.current.contains(target) ||
  //         trigger.current.contains(target)
  //       )
  //         return;
  //       setSidebarOpen(false);
  //     };
  //     document.addEventListener("click", clickHandler);
  //     return () => document.removeEventListener("click", clickHandler);
  //   });

  //   // close if the esc key is pressed
  //   useEffect(() => {
  //     const keyHandler = ({ keyCode }) => {
  //       if (!sidebarOpen || keyCode !== 27) return;
  //       setSidebarOpen(false);
  //     };
  //     document.addEventListener("keydown", keyHandler);
  //     return () => document.removeEventListener("keydown", keyHandler);
  //   });

  //   useEffect(() => {
  //     localStorage.setItem("sidebar-expanded", sidebarExpanded);
  //     if (sidebarExpanded) {
  //       document.querySelector("body").classList.add("sidebar-expanded");
  //     } else {
  //       document.querySelector("body").classList.remove("sidebar-expanded");
  //     }
  //   }, [sidebarExpanded]);

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);
      }
    });
  });

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-main_black_color bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen w-64 lg:w-72 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 py-4 pr-4 rounded-tr-2xl rounded-br-2xl bg-main_black_color transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
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
    </div>
  );
}

export default Sidebar;
