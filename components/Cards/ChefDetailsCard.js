import React from "react";
import chef2 from "../../public/chef2.png";
import Image from "next/image";
import {
  MdOutlineWorkHistory,
  MdOutlineMail,
  MdOutlineWifiCalling3,
  MdOutlineLocationOn,
} from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const ChefDetailsCard = ({ chef }) => {
  return (
    <div className="grid md:grid-cols-5 gap-12">
      {/* grid 1 */}
      <div className="bg-[#a0aeaf] md:col-span-2 relative overflow-hidden min-h-[600px]">
        <Image
          src={chef.image}
          alt="chef1"
          className="absolute bottom-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* grid 2 */}
      <div className="md:col-span-3 flex flex-col justify-between">
        {/* top section name description */}
        <div>
          <h4>{chef.name}</h4>
          <p className="my-4 font-josefin text-tan text-2xl">{chef.position}</p>
          <p className="font-josefin text-gray lg:pr-12 pr-0">
            {chef.description}
          </p>
        </div>

        {/* middle section contact */}
        <div className="grid xl:grid-cols-2 gap-10 my-12">
          {/* experience */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-clay text-white flex items-center justify-center rounded-full">
              <MdOutlineWorkHistory className="w-10 h-10" />
            </div>
            <div>
              <h6>Experience</h6>
              <p className="font-josefin text-gray mt-2">{chef.experience}</p>
            </div>
          </div>

          {/* mail */}

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-clay text-white flex items-center justify-center rounded-full">
              <MdOutlineMail className="w-10 h-10" />
            </div>
            <div>
              <h6>Mail</h6>
              <p className="font-josefin text-gray mt-2">{chef.mail}</p>
            </div>
          </div>

          {/* contact */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-clay text-white flex items-center justify-center rounded-full">
              <MdOutlineWifiCalling3 className="w-10 h-10" />
            </div>
            <div>
              <h6>Contact Us</h6>
              <p className="font-josefin text-gray mt-2">{chef.phone}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-clay text-white flex items-center justify-center rounded-full">
              <MdOutlineLocationOn className="w-10 h-10" />
            </div>
            <div>
              <h6>Locate Us</h6>
              <p className="font-josefin text-gray mt-2">
                Road 18, Avenue 2, Dhanmondi 27
              </p>
            </div>
          </div>
        </div>

        {/* bottom section socials */}
        <div className="flex gap-6 text-clay">
          <a href="#" target="_blank">
            <FaInstagram size={25} />
          </a>
          <a href="#" target="_blank">
            <FaFacebook size={25} />
          </a>
          <a href="#" target="_blank">
            <FaTwitter size={25} />
          </a>
          <a href="#" target="_blank">
            <FaPinterest size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCard;
