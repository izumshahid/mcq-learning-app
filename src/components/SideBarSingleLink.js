import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideBarSingleLink = ({ link, image, title, active = false }) => {
  return (
    <div className="mb-5">
      <Link href={link}>
        <div className="flex">
          <div
            className={` ${
              active ? "bg-main_green_color" : "bg-main_black_color"
            } w-1 h-8 rounded-tr-xl rounded-br-xl mr-5`}
          ></div>
          <div className="flex items-center gap-2">
            <Image
              src={image}
              className={`${active ? "" : "grayscale"}`}
              alt={title}
              width={20}
            />
            <p
              className={`${
                active ? "text-main_green_color" : "text-white text-opacity-60"
              }  text-md m-0`}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SideBarSingleLink;
