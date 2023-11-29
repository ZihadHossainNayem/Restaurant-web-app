import React from "react";
import MenuMainDish from "@/data/MenuMainDish";
import Image from "next/image";
import ourMenu2 from "../../../../public/ourMenu2.png";

const MainDishMenu = () => {
  return (
    <div className="bg-white text-clay md:py-32 py-24">
      <div className="container">
        <div className="grid md:grid-cols-5 xl:gap-24 gap-8">
          {/* grid 1 */}
          <div className="md:col-span-3 order-2 md:order-1">
            <h4 className="mb-10">Main Dish</h4>
            {/* image */}
            {MenuMainDish.map((mainDish, index) => (
              <div
                key={index}
                className="flex md:gap-8 gap-4 items-center mb-[36px]"
              >
                <div className="md:w-[84px] md:h-[84px] min-w-[55px] h-[55px] rounded-full overflow-hidden">
                  <Image
                    src={mainDish.image}
                    alt={mainDish.name}
                    width={84}
                    height={84}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* name, ingredients */}
                <div className="flex flex-col gap-2">
                  <h5 className="lg:text-[30px] text-[22px]">
                    {mainDish.name}
                  </h5>
                  <p className="text-gray font-josefin">
                    {mainDish.description}
                  </p>
                </div>

                {/* price */}
                <div className="ml-auto">
                  <h5 className="lg:text-[30px] text-[20px] flex items-center gap-1">
                    {mainDish.price}
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

          {/* grid 2 */}
          <div className="md:col-span-2 h-full order-1 md:order-2">
            <Image
              src={ourMenu2}
              alt="ourMenu2"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDishMenu;
