import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const ChefsCard = ({ chef, width, height, boxHeight, socials }) => {
  return (
    <div
      className="text-clay"
      style={{ width: `${width}px`, maxHeight: `${boxHeight}px` }}
    >
      <div
        className="w-full overflow-hidden group"
        style={{ height: `${height}px` }}
      >
        <Link href={`/chef/${chef.id}`}>
          <div className="bg-[#a0aeaf] relative h-full">
            <Image
              src={chef.image}
              alt={chef.name}
              className="w-full h-full absolute bottom-0 left-0"
            />
          </div>
        </Link>
        {socials && (
          <div className="relative">
            <div
              className="h-[75px] w-full bg-black/90 absolute bottom-0 flex items-center 
           transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 "
            >
              <div className="flex w-[60%] justify-between mx-auto text-white">
                <a href="#" target="_blank">
                  <FaInstagram size={32} />
                </a>
                <a href="#" target="_blank">
                  <FaFacebook size={32} />
                </a>
                <a href="#" target="_blank">
                  <FaTwitter size={32} />
                </a>
                <a href="#" target="_blank">
                  <FaPinterest size={32} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Link href={`/chef/${chef.id}`}>
        <div className="flex flex-col justify-center items-center mt-4">
          <h5>{chef.name}</h5>
          <p className="font-josefin text-gray mt-2">{chef.position}</p>
        </div>
      </Link>
    </div>
  );
};

export default ChefsCard;
