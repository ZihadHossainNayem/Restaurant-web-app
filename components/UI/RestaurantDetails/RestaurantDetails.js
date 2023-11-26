import React from "react";
import { MdEditCalendar } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoTimerOutline } from "react-icons/io5";
import aboutImage from "../../../public/About.jpg";
import Image from "next/image";

const RestaurantDetails = () => {
  return (
    <div className="min-h-screen bg-rose_white text-clay flex justify-center items-center">
      <div className="container flex flex-col lg:gap-28 gap-16">
        {/* top section - address, open hours, reservation details */}
        <div className="flex justify-between flex-wrap lg:mt-32 mt-24">
          {/* address */}
          <div className="flex gap-4 pb-8 pr-4 items-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center">
              <GrLocation size={40} className=" text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h5>Locate Us</h5>
              <p className="font-josefin text-gray">
                Road 18, Avenue 2, Dhanmondi 27
              </p>
            </div>
          </div>

          {/* open hours */}
          <div className="flex gap-4 pb-8 pr-4 items-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center">
              <IoTimerOutline size={40} className=" text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h5>Open Hours</h5>
              <p className="font-josefin text-gray">
                Mon To Fri 9:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Reservation */}
          <div className="flex gap-4 pb-8 items-center">
            <div className="w-16 h-16 bg-clay rounded-full flex items-center justify-center">
              <MdEditCalendar size={40} className=" text-white" />
            </div>
            <div className="flex flex-col gap-1">
              <h5>Reservation</h5>
              <p className="font-josefin text-gray">
                hirestaurantate@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* bottom section - grid - about restaurant */}
        <div className="grid lg:grid-cols-2 gap-12 pb-24">
          {/* left */}
          <div>
            <Image src={aboutImage} alt="aboutImage" />
          </div>

          {/* right */}
          <div className="lg:pl-8 pl-0 lg:border-l border-tan/60 flex flex-col gap-8">
            <div>
              <h4>The Story</h4>
              <p className="font-josefin pt-5 text-gray">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4>1998</h4>
                <p className="font-josefin pt-3 text-gray">
                  Lorem Ipsum is that it has a more-or-less normal distribution
                </p>
              </div>
              <div>
                <h4>2023</h4>
                <p className="font-josefin pt-3 text-gray">
                  Lorem Ipsum is that it has a more-or-less normal Content
                  content
                </p>
              </div>
            </div>

            {/* signature */}
            <div>
              <p className="font-josefin">JOSEFINE</p>
              <h3 className="sign pl-3">Josefine</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
