import React from "react";
import Image from "next/image";

const ChefsCard = ({ chef, width, height, boxHeight }) => {
  return (
    <div className={`w-[${width}px] max-h-[${boxHeight}px] text-clay`}>
      <div className={`w-full h-[${height}px] relative overflow-hidden`}>
        <div className="bg-[#a0aeaf] w-full h-full"></div>
        <Image
          src={chef.image}
          alt={chef.name}
          className="w-full absolute bottom-0 left-0"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-4">
        <h5>{chef.name}</h5>
        <p className="font-josefin text-gray mt-2">{chef.position}</p>
      </div>
    </div>
  );
};

export default ChefsCard;
