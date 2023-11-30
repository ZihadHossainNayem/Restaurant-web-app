import Booking from "@/components/UI/BookingPage/Booking/Booking";
import Service from "@/components/UI/BookingPage/Service/Service";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import React from "react";

const ReservationPage = () => {
  return (
    <>
      <Header />

      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          Booking Page
        </h2>
      </div>

      <Booking />

      <Service />

      <Footer />
    </>
  );
};

export default ReservationPage;
