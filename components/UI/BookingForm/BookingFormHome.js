import BookingForm from "@/components/Forms/BookingForm";
import React from "react";
import homeBG2 from "../../../public/homeBG2.png";
import Image from "next/image";

const BookingFormHome = () => {
  return (
    <div className="relative">
      <div className="w-full h-full bg-clay/50 absolute inset-0"></div>
      <Image
        src={homeBG2}
        alt="homeBG2"
        className="min-h-[1000px] object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:mx-0 mx-2">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingFormHome;
