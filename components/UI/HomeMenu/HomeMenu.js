import React from "react";
import homeMenu from "../../../public/homeMenu1.png";
import Image from "next/image";
import MenuStarters from "@/data/MenuStarters";
import MenuMainDish from "@/data/MenuMainDish";
import MenuDeserts from "@/data/MenuDeserts";

const HomeMenu = () => {
  return (
    <div className="min-h-screen lg:py-36 py-24">
      <div className="container grid lg:grid-cols-12">
        {/* left */}
        <div className="col-span-4">
          <p className="font-josefin"> Menu</p>
          <h4 className="py-6">Try Our Special Offers</h4>

          <p className="font-josefin">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making it look
            like readable English.
          </p>

          <Image src={homeMenu} alt="homeMenu" className="py-12" />

          <button className="button font-josefin text-tan hover:bg-clay hover:text-white">
            See all dishes
          </button>
        </div>

        {/* gap grid */}
        <div className="col-span-1"></div>

        {/* right */}
        <div className="col-span-7 py-12">
          <div className="flex flex-col gap-16">
            {/* starters */}
            <div>
              <h4 className="mb-10">Starters</h4>
              {/* image */}
              {MenuStarters.map((starter, index) => (
                <div
                  key={index}
                  className="flex md:gap-8 gap-4 items-center mb-12"
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
                    <h5 className="lg:text-[30px] text-[22px]">
                      {starter.name}
                    </h5>
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
            </div>

            {/* main dish */}
            <div>
              <h4 className="mb-10">Main Dish</h4>
              {/* image */}
              {MenuMainDish.map((starter, index) => (
                <div
                  key={index}
                  className="flex md:gap-8 gap-4 items-center mb-12"
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
                    <h5 className="lg:text-[30px] text-[22px]">
                      {starter.name}
                    </h5>
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
            </div>

            {/* dessert */}
            <div>
              <h4 className="mb-10">Dessert</h4>
              {/* image */}
              {MenuDeserts.map((starter, index) => (
                <div
                  key={index}
                  className="flex md:gap-8 gap-4 items-center mb-12"
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
                    <h5 className="lg:text-[30px] text-[22px]">
                      {starter.name}
                    </h5>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
