import React from "react";
import MenuDeserts from "@/data/MenuDeserts";
import Image from "next/image";
import ourMenu3 from "../../../../public/ourMenu3.png";

const DessertMenu = () => {
  return (
    <div className="bg-white text-clay md:py-32 py-24">
      <div className="container">
        <div className="grid md:grid-cols-5 xl:gap-24 gap-8">
          {/* grid 1 */}
          <div className="md:col-span-2 h-full ">
            <Image
              src={ourMenu3}
              alt="ourMenu1"
              className="h-full object-cover"
            />
          </div>

          {/* grid 2 */}
          <div className="md:col-span-3">
            <h4 className="mb-10">Dessert</h4>
            {/* image */}
            {MenuDeserts.map((dessert, index) => (
              <div
                key={index}
                className="flex md:gap-8 gap-4 items-center mb-[36px]"
              >
                <div className="md:w-[84px] md:h-[84px] min-w-[55px] h-[55px] rounded-full overflow-hidden">
                  <Image
                    src={dessert.image}
                    alt={dessert.name}
                    width={84}
                    height={84}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* name, ingredients */}
                <div className="flex flex-col gap-2">
                  <h5 className="lg:text-[30px] text-[22px]">{dessert.name}</h5>
                  <p className="text-gray font-josefin">
                    {dessert.description}
                  </p>
                </div>

                {/* price */}
                <div className="ml-auto">
                  <h5 className="lg:text-[30px] text-[20px] flex items-center gap-1">
                    {dessert.price}
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

export default DessertMenu;
