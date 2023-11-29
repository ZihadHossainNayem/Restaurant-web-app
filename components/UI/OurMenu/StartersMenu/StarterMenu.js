import React from "react";
import ourMenu1 from "../../../../public/ourMenu1.png";
import Image from "next/image";
import MenuStarters from "@/data/MenuStarters";

const StarterMenu = () => {
  return (
    <div className="bg-white text-clay md:py-32 py-24">
      <div className="container">
        <div className="grid md:grid-cols-5 xl:gap-24 gap-8">
          {/* grid 1 */}
          <div className="md:col-span-2 h-full ">
            <Image
              src={ourMenu1}
              alt="ourMenu1"
              className="h-full object-cover"
            />
          </div>

          {/* grid 2 */}
          <div className="md:col-span-3">
            <h4 className="mb-10">Starters</h4>
            {/* image */}
            {MenuStarters.map((starter, index) => (
              <div
                key={index}
                className="flex md:gap-8 gap-4 items-center mb-[36px]"
              >
                <div className="md:w-[84px] md:h-[84px] min-w-[55px] h-[55px] rounded-full overflow-hidden">
                  <Image
                    src={starter.image}
                    alt={starter.name}
                    width={84}
                    height={84}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* name, ingredients */}
                <div className="flex flex-col gap-2">
                  <h5 className="lg:text-[30px] text-[22px]">{starter.name}</h5>
                  <p className="text-gray font-josefin">
                    {starter.description}
                  </p>
                </div>

                {/* price */}
                <div className="ml-auto">
                  <h5 className="lg:text-[30px] text-[20px] flex items-center gap-1">
                    {starter.price}
                    <span className="md:text-[20px] text-[18px]">Tk.</span>
                  </h5>
                </div>
              </div>
            ))}

            {/* button */}
            <button className="button">
              <p className="font-josefin text-tan">See all dishes</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
