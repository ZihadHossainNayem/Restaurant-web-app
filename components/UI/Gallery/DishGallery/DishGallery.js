import DishGalleryData from "@/data/dishGalleryData";
import Image from "next/image";
import React from "react";

const DishGallery = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {DishGalleryData.map((dish, index) => (
            <div key={index} className="relative group">
              <Image
                src={dish.image}
                alt={dish.dishName}
                className="max-h-[430px] w-auto"
              />
              <div className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-black/70 z-[10]">
                <div className="flex flex-col items-center justify-center h-full">
                  <h5 className="text-white">{dish.dishName}</h5>
                  <p className="font-josefin text-tan">Recipes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="button mx-auto mt-24">
          <p className="font-josefin text-tan">See all Dishes</p>
        </button>
      </div>
    </div>
  );
};

export default DishGallery;
