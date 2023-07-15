"use client";

import TopicSelectionCard from "@/components/TopicSelectionCard";
import React, { useEffect } from "react";
import FOLDER_IMAGE from "../../../assets/folder.png";
import { myContext } from "@/context/Store";

const ArithmeticAptitude = () => {
  const { activeNav } = myContext();

  useEffect(() => {
    console.log(activeNav);
  }, []);

  return (
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-5 mb-5">
      <div className="w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-col gap-5">
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-col gap-5">
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 2xl:w-1/3 flex flex-col gap-5">
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
        <div className="w-full">
          <TopicSelectionCard topic="General Aptitude" image={FOLDER_IMAGE} />
        </div>
      </div>
    </div>
  );
};

export default ArithmeticAptitude;
