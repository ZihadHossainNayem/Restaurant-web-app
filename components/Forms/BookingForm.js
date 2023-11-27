"use client";
import React, { useState } from "react";

const BookingForm = () => {
  const [showPlaceholderName, setShowPlaceholderName] = useState(true);
  const [showPlaceholderEmail, setShowPlaceholderEmail] = useState(true);
  const [showPlaceholderNumber, setShowPlaceholderNumber] = useState(true);

  return (
    <div className="md:px-[156px] md:py-[151px] p-12 bg-clay/95 text-white flex flex-col items-center justify-center">
      <p className="uppercase font-josefin tracking-widest">
        <span className="py-1 border-t border-b border-tan">reservation</span>
      </p>
      <h4 className="capitalize mt-5">book your table now</h4>

      <form className="mt-10 min-w-[260px]">
        <div className="flex gap-6 w-full justify-between md:flex-row flex-col ">
          <input
            type="text"
            placeholder={showPlaceholderName ? "Name" : ""}
            className="bg-transparent border border-white px-4 py-2 font-josefin w-full  placeholder-white"
            onFocus={() => setShowPlaceholderName(false)}
            onBlur={() => setShowPlaceholderName(true)}
          />
          <input
            type="email"
            placeholder={showPlaceholderEmail ? "Email" : ""}
            className="bg-transparent border border-white px-4 py-2 font-josefin w-full placeholder-white"
            onFocus={() => setShowPlaceholderEmail(false)}
            onBlur={() => setShowPlaceholderEmail(true)}
          />
        </div>
        <div className="my-8 flex gap-6  md:flex-row flex-col">
          <input
            type="number"
            placeholder={showPlaceholderNumber ? "Person" : ""}
            className="bg-transparent border border-white px-4 py-2 font-josefin w-full placeholder-white"
            onFocus={() => setShowPlaceholderNumber(false)}
            onBlur={() => setShowPlaceholderNumber(true)}
          />
          <input
            type="time"
            placeholder="Timing"
            className="bg-transparent border border-white px-4 py-2 font-josefin w-full placeholder-white"
          />
          <input
            type="date"
            placeholder="Date"
            className="bg-transparent border border-white px-4 py-2 font-josefin w-full placeholder-white"
          />
        </div>

        {/* button */}
        <button className="button !border-white bg-white mx-auto">
          <p className="font-josefin text-clay font-medium">Book a Table</p>
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
