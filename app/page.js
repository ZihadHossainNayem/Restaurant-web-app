import Header from "@/components/UI/Header/Header";
import HomeMenu from "@/components/UI/HomeMenu/HomeMenu";
import RestaurantDetails from "@/components/UI/RestaurantDetails/RestaurantDetails";
import Testimonial from "@/components/UI/Testimonial/Testimonial";
import React from "react";
import bgImage from "../public/bgImage.png";
import Image from "next/image";
import PopularDishes from "@/components/UI/PopularDishes/PopularDishes";
import ServicesOffer from "@/components/UI/ServicesOffer/ServicesOffer";
import BlogHome from "@/components/UI/BlogHome/BlogHome";
import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";
import Hero from "@/components/UI/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <RestaurantDetails />
      <HomeMenu />
      <Testimonial />

      <Image
        src={bgImage}
        alt="bgImage"
        className="min-h-[360px] object-cover"
      />

      <PopularDishes />
      <ServicesOffer />
      <BlogHome />
      <BookingFormHome />
      <Footer />
    </div>
  );
};

export default HomePage;
