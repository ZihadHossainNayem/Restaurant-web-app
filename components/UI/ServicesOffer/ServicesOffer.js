import React from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";

const ServicesOffer = () => {
  return (
    <div className="bg-clay md:py-60 py-24 text-white">
      <div className="container flex xl:flex-row flex-col justify-between items-center">
        {/* left */}
        <div className="xl:text-start text-center">
          <p className="font-josefin tracking-widest uppercase border-t border-b border-tan py-1 inline-block">
            what we offer
          </p>
          <h4 className="py-5">Our Great Services</h4>
          <p className="font-josefin max-w-[400px] mx-auto">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>

        {/* right */}
        <div className="flex lg:flex-row flex-col lg:gap-10 gap:6 space-y-8 lg:space-y-0 xl:mt-0 mt-12">
          <div className="px-[23px] py-[22px] bg-[#323841] flex items-center justify-center">
            <div className="px-[42px] py-[47px] bg-clay flex flex-col items-center justify-center gap-2">
              <BsCalendar2Date className="w-14 h-14 text-tan" />
              <h6 className="text-center">Opened 24/7</h6>
            </div>
          </div>

          <div className="px-[23px] py-[22px] bg-[#323841] flex items-center justify-center">
            <div className="px-[42px] py-[47px] bg-clay flex flex-col items-center justify-center gap-2">
              <SlBookOpen className="w-14 h-14 text-tan" />
              <h6 className="text-center">Special Menu</h6>
            </div>
          </div>

          <div className="px-[23px] py-[22px] bg-[#323841] flex items-center justify-center">
            <div className="px-[42px] py-[47px] bg-clay flex flex-col items-center justify-center gap-2">
              <MdOutlineDeliveryDining className="w-14 h-14 text-tan" />
              <h6 className="text-center">Home Delivery</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOffer;
