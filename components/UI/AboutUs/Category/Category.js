import React from "react";
import aboutUsCategoryBG from "../../../../public/aboutUsCategoryBG.jpg";
import Image from "next/image";
import { PiBowlFood } from "react-icons/pi";
import { LuChefHat } from "react-icons/lu";
import { TbGlassFull } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";

const AboutUsCategory = () => {
  return (
    <div className="text-white relative mt-16">
      <Image
        src={aboutUsCategoryBG}
        alt="aboutUsCategoryBG"
        className="md:min-h-[600px] min-h-[1200px] object-cover"
      />
      <div className="w-full bg-clay/40 absolute inset-0"></div>

      {/* categories */}
      <div className="flex items-center justify-center">
        <div className="absolute flex flex-wrap justify-center gap-12 top-1/2 transform -translate-y-1/2">
          {/* fresh product */}
          <div className="text-center flex flex-col justify-center items-center w-[280px]">
            <PiBowlFood size={50} className="text-tan mb-[28px]" />
            <h5 className="mb-[14px]">Fresh Product</h5>
            <p className="font-josefin  font-light mb-[28px]">
              Professional consider everyone probls small niche friendly.
            </p>
            <button className="font-josefin text-tan">See more</button>
          </div>

          {/*  skilled chefs*/}
          <div className="text-center flex flex-col justify-center items-center w-[280px]">
            <LuChefHat size={50} className="text-tan mb-[28px]" />
            <h5 className="mb-[14px]">Skilled Chefs</h5>
            <p className="font-josefin font-light mb-[28px]">
              Professional consider everyone probls small niche friendly.
            </p>
            <button className="font-josefin text-tan">See more</button>
          </div>

          {/*  drinks and juice*/}
          <div className="text-center flex flex-col justify-center items-center w-[280px]">
            <TbGlassFull size={50} className="text-tan mb-[28px]" />
            <h5 className="mb-[14px]">Drinks & Juices</h5>
            <p className="font-josefin  font-light mb-[28px]">
              Professional consider everyone probls small niche friendly.
            </p>
            <button className="font-josefin text-tan">See more</button>
          </div>

          {/*  Vegan Cuisine*/}
          <div className="text-center flex flex-col justify-center items-center w-[280px]">
            <LuVegan size={50} className="text-tan mb-[28px]" />
            <h5 className="mb-[14px]">Vegan Cuisine</h5>
            <p className="font-josefin font-light mb-[28px]">
              Professional consider everyone probls small niche friendly.
            </p>
            <button className="font-josefin text-tan">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCategory;
