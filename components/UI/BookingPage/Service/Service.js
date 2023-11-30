import React from "react";
import bookingpage2 from "../../../../public/bookingpage2.png";
import Image from "next/image";
import { MdOutlineAccessTime, MdOutlineDeliveryDining } from "react-icons/md";
import { LuPizza } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";

const Service = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-12 grid lg:grid-cols-7 gap-12">
        {/* grid 1 */}
        <div className="lg:col-span-3 lg:order-1 order-2">
          <Image src={bookingpage2} alt="bookingpage2" />
        </div>
        {/* grid 2 */}
        <div className="lg:col-span-4 lg:order-2 order-1  flex flex-col justify-center lg:ml-12 ml-0">
          <p className="uppercase font-josefin tracking-widest">
            <span className="py-1 border-t border-b border-tan text-base">
              Why Choose Us
            </span>
          </p>
          <h4 className="capitalize my-5">Why We Are The Best?</h4>

          <p className="font-josefin text-gray max-w-[600px] lg:pr-6 pr-0 ">
            Bring the table winwin survival strateges ensure proactive the
            domination the end of the day going forward new normal that has
            evolved froms generation on the runway heading towards streamlined
            cloud solution generated content in real times will have multiple
            touchpoints.
          </p>

          {/* services */}
          <div className="font-josefin font-medium grid grid-cols-2 gap-[28px] mt-12 max-w-[570px]">
            <div className="border border-tan py-3 md:px-6 px-2 flex items-center gap-2">
              <LuPizza className="w-[25px] h-[25px] text-tan" />
              <span>Fresh Food</span>
            </div>
            <div className="border border-tan py-3 md:px-6 px-2 flex items-center gap-2">
              <MdOutlineDeliveryDining className="w-[30px] h-[30px] text-tan" />
              <span> Fast Delivery</span>
            </div>
            <div className="border border-tan py-3 md:px-6 px-2 flex items-center gap-2">
              <MdOutlineAccessTime className="w-[25px] h-[25px] text-tan" />
              <span>Quality Maintain</span>
            </div>
            <div className="border border-tan py-3 md:px-6 px-2 flex items-center gap-2">
              <IoTimerOutline className="w-[25px] h-[25px] text-tan" />
              24/7 Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
