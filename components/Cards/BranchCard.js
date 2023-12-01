import Image from "next/image";
import React from "react";
import abc from "../../public/contactUs1.jpg";
import { MdOutlineMail, MdOutlineWifiCalling3 } from "react-icons/md";

const BranchCard = ({ branchData }) => {
  return (
    <div className="border border-clay/30 grid grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-4 md:px-12 px-4 py-4 md:py-12">
          <h5>{branchData.name}</h5>
          <p className="font-josefin text-gray">{branchData.location}</p>

          <div className="flex items-center gap-2">
            <MdOutlineMail className="w-6 h-6 text-tan" />
            <p className="text-gray font-josefin">{branchData.email}</p>
          </div>

          <div className="flex items-center gap-2">
            <MdOutlineWifiCalling3 className="w-6 h-6 text-tan" />
            <p className="text-gray font-josefin">{branchData.phone}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          src={branchData.image}
          alt={branchData.name}
          className="w-[370px]"
        />
      </div>
    </div>
  );
};

export default BranchCard;
