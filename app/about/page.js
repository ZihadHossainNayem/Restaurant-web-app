import AboutUsCategory from "@/components/UI/AboutUs/Category/Category";
import AboutUsChefs from "@/components/UI/AboutUs/Chefs/Chefs";
import AboutUsGallery from "@/components/UI/AboutUs/Gallery/Gallery";
import AboutUsHero from "@/components/UI/AboutUs/Hero/Hero";
import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import Testimonial from "@/components/UI/Testimonial/Testimonial";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          About Us
        </h2>
      </div>
      <AboutUsHero />
      <AboutUsCategory />
      <AboutUsChefs />
      <Testimonial />
      <AboutUsGallery />
      <BookingFormHome />
      <Footer />
    </>
  );
};

export default AboutPage;
