import React from "react";
import cocktail from "../../public/Cocktail.jpg";
import Image from "next/image";

const PopularDishCard = ({ popularDish }) => {
  return (
    <div className="max-w-[326px]">
      {/* image */}
      <div className="w-[326px] h-[326px]">
        <Image
          src={popularDish.image}
          alt={popularDish.name}
          width={326}
          height={326}
          className="w-[326px] h-[326px] object-cover"
        />
      </div>

      {/* text */}
      <div>
        <div className=" border-b border-b-gray/20 py-4 flex justify-between">
          <h6>{popularDish.name}</h6>
          <h6>{popularDish.price} Tk.</h6>
        </div>

        <p className="font-josefin pt-4">{popularDish.description}</p>
      </div>
    </div>
  );
};

export default PopularDishCard;
