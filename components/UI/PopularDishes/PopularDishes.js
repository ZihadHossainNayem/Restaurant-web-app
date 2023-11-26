import OfferCard from "@/components/Cards/OfferCard";
import React from "react";
import OfferDishes from "@/data/OfferDishes";
import PopularDishCard from "@/components/Cards/PopularDishCard";
import popularDishes from "@/data/PopularDishes";

const PopularDishes = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-36 py-12">
        {/* text */}
        <div className="flex flex-col items-center">
          <p className="uppercase font-josefin tracking-widest pb-5">
            <span className="px-2 py-2 border-t border-b border-tan">
              offer
            </span>
          </p>
          <h4 className="pb-6">Our special Offer dishes</h4>
          <p className="font-josefin pb-8 text-center max-w-[702px] text-gray">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>

        {/* offer card */}
        <div className="flex xl:flex-row flex-col gap-4">
          {OfferDishes.map((offer, index) => (
            <div key={index} className="flex justify-center ">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>

        {/* text */}
        <div className="flex flex-col items-center mt-20">
          <p className="uppercase font-josefin tracking-widest pb-5">
            <span className="px-2 py-2 border-t border-b border-tan">Menu</span>
          </p>
          <h4 className="pb-6">Popular Dishes</h4>
          <p className="font-josefin text-center text-gray max-w-[702px]">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>

        {/* popular dish card */}
        <div className="flex gap-6 flex-wrap justify-center py-12">
          {popularDishes.map((popularDish) => (
            <PopularDishCard popularDish={popularDish} />
          ))}
        </div>

        {/* button */}
        <div className="flex justify-center">
          <button className="button hover:bg-clay hover:text-white">
            <p className="font-josefin">See all dishes</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
