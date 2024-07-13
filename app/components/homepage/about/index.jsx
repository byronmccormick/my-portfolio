// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.descriptionLine1}
          </p>
          <br></br>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.descriptionLine2}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2 max-h-80">
          <Image
            src={personalData.profile}
            width={300}
            height={250}
            alt="Byron Mccormick"
            className="rounded-lg transition-all duration-1000 brightness-50 hover:brightness-100 hover:drop-shadow-md hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;