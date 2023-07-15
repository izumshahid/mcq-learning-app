"use client";

import { NAV_ARRAY } from "@/utils/contants";
import { usePathname } from "next/navigation";
import Image from "next/image";
import BACK_ARROW_IMAGE from "../assets/backArrow.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [activeNav, setActiveNav] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    NAV_ARRAY.find((nav) => {
      if (pathname.includes(nav.link)) {
        setActiveNav(nav);
      }
    });
  });

  return (
    <div className="h-28 flex items-center w-full">
      <div className="flex gap-1">
        {activeNav?.link == "/" ? null : (
          <div className="bg-main_green_color flex items-center rounded-md px-2 mr-2 cursor-pointer">
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
