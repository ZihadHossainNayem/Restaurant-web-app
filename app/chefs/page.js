import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import BestChefs from "@/components/UI/OurChefs/BestChefs/BestChefs";
import OurChefs from "@/components/UI/OurChefs/Chefs/OurChefs";
import Testimonial from "@/components/UI/Testimonial/Testimonial";
import React from "react";

const ChefsPage = () => {
  return (
    <>
      <Header />

      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          Our Chefs
        </h2>
      </div>

      <OurChefs />

      <Testimonial />

      <BestChefs />

      <BookingFormHome />

      <Footer />
    </>
  );
};

export default ChefsPage;
