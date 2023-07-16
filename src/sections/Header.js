"use client";

import { NAV_ARRAY } from "@/utils/contants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BACK_ARROW_IMAGE from "../assets/backArrow.png";
import RIGHT_ARROW_IMAGE from "../assets/greenArrowRight.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { myContext } from "@/context/Store";

const Header = () => {
  const pathname = usePathname();
  const {
    sidebarExpanded,
    setSidebarExpanded,
    activeNav,
    setActiveNav,
    activeNavChild,
    setActiveNavChild,
  } = myContext();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);

        if (nav.children) {
          nav.children.find((child) => {
            if (pathname.includes(child.link)) {
              setActiveNavChild(child);
            }
          });
        } else {
          setActiveNavChild(null);
        }
      }
    });
  });

  const openNav = () => {
    setSidebarExpanded(true);
  };

  return (
    <div
      className={`${
        activeNav?.link == "/" ? "flex items-center" : ""
      } h-28 lg:ml-64 lg:max-w-[80%] overflow-x-hidden`}
    >
      <div
        className={`${
          activeNav?.link == "/"
            ? "hidden"
            : "breadCrumbs mb-5 gap-3 hidden md:flex items-center font-semibold"
        }`}
      >
        <Link href="/">
          <p>Home</p>
        </Link>
        <div className="w-2 h-2 object-contain">
          <Image src={RIGHT_ARROW_IMAGE} className="w-full" alt="right_Arrow" />
        </div>
        <Link href={activeNav?.link || ""}>
          <p>{activeNav?.title}</p>
        </Link>
        {activeNavChild ? (
          <>
            <div className="w-2 h-2 object-contain">
              <Image
                src={RIGHT_ARROW_IMAGE}
                className="w-full"
                alt="right_Arrow"
              />
            </div>
            <p>{activeNavChild?.title}</p>
          </>
        ) : null}
      </div>
      <div className="flex ">
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
    </div>
  );
};

export default Header;
