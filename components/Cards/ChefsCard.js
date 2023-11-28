import React from "react";
import Image from "next/image";

const ChefsCard = ({ chef }) => {
  return (
    <div className="w-[245px] h-[400px] text-clay">
      <div className="w-full h-[255px] relative overflow-hidden">
        <div className="bg-[#a0aeaf] w-full h-full"></div>
        <Image
          src={chef.image}
          alt={chef.name}
          className="w-full absolute top-0 left-1"
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
