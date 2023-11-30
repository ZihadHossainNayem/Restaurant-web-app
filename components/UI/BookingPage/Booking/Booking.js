"use client";
import React, { useState } from "react";
import bookingpage1 from "../../../../public/bookipage1.png";
import Image from "next/image";

const Booking = () => {
  const [showPlaceholderName, setShowPlaceholderName] = useState(true);
  const [showPlaceholderEmail, setShowPlaceholderEmail] = useState(true);
  const [showPlaceholderNumber, setShowPlaceholderNumber] = useState(true);
  const [showPlaceholderPhone, setShowPlaceholderPhone] = useState(true);

  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24 grid lg:grid-cols-7 gap-12">
        {/* grid 1 */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <p className="uppercase font-josefin tracking-widest">
            <span className="py-1 border-t border-b border-tan text-base">
              reservation
            </span>
          </p>
          <h4 className="capitalize my-5">book your table now</h4>

          <p className="font-josefin text-gray max-w-[540px]">
            The people, food and the prime locations make Rodich the perfect
            place good friends & family to come together and have great time.
          </p>

          <form className="mt-10 grid md:grid-cols-2 gap-10 lg:mr-16 mr-0">
            <input
              type="text"
              placeholder={showPlaceholderName ? "Name" : ""}
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full  placeholder-clay"
              onFocus={() => setShowPlaceholderName(false)}
              onBlur={() => setShowPlaceholderName(true)}
            />
            <input
              type="email"
              placeholder={showPlaceholderEmail ? "Email" : ""}
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
              onFocus={() => setShowPlaceholderEmail(false)}
              onBlur={() => setShowPlaceholderEmail(true)}
            />

            <input
              type="text"
              placeholder={showPlaceholderPhone ? "Phone" : ""}
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full  placeholder-clay"
              onFocus={() => setShowPlaceholderPhone(false)}
              onBlur={() => setShowPlaceholderPhone(true)}
            />

            <input
              type="number"
              placeholder={showPlaceholderNumber ? "Person" : ""}
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
              onFocus={() => setShowPlaceholderNumber(false)}
              onBlur={() => setShowPlaceholderNumber(true)}
            />

            <input
              type="time"
              placeholder="Timing"
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
            />
            <input
              type="date"
              placeholder="Date"
              className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
            />

            {/* button */}
            <button className="button bg-white mr-auto">
              <p className="font-josefin text-tan font-medium">Book a Table</p>
            </button>
          </form>
        </div>
        {/* grid 2 */}
        <div className="lg:col-span-3">
          <Image src={bookingpage1} alt="bookingpage1" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
