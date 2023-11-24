import Header from "@/components/UI/Header/Header";
import HomeMenu from "@/components/UI/HomeMenu/HomeMenu";
import RestaurantDetails from "@/components/UI/RestaurantDetails/RestaurantDetails";
import Testimonial from "@/components/UI/Testimonial/Testimonial";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Header />
      <RestaurantDetails />
      <HomeMenu />
      <Testimonial />
    </div>
  );
};

export default HomePage;
