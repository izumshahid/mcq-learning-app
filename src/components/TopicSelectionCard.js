import Image from "next/image";
import React from "react";

const TopicSelectionCard = ({ topic, image }) => {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg">
      <div
        className={`
              ${
                isCollapsed ? "bg-white" : "bg-main_green_color p-2"
              } rounded-full
            `}
      >
        <Image src={image} alt="topic" className="w-11" />
      </div>
      <div
        className={`${
          isCollapsed ? "text-white duration-200" : "text-black duration-200"
        } text-sm sm:text-base md:text-base lg:text-lg 2xl:text-xl`}
      >
        {topic}
      </div>
    </div>
  );
};

export default TopicSelectionCard;
