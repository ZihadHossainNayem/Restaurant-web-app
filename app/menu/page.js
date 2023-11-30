import Header from "@/components/UI/Header/Header";
import MainDishMenu from "@/components/UI/OurMenu/MainDishMenu/MainDishMenu";
import StarterMenu from "@/components/UI/OurMenu/StartersMenu/StarterMenu";
import Image from "next/image";
import React from "react";
import ourMenuBG1 from "../../public/ourMenuBG1.png";
import ourMenuBG2 from "../../public/ourMenuBG2.png";
import DessertMenu from "@/components/UI/OurMenu/DessertMenu/DessertMenu";
import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";

const MenuPage = () => {
  return (
    <>
      <Header />

      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          Our Menu
        </h2>
      </div>

      <StarterMenu />

      <Image
        src={ourMenuBG1}
        alt="ourMenuBG1"
        className="min-h-[250px] object-cover hidden md:block"
      />

      <MainDishMenu />

      <Image
        src={ourMenuBG2}
        alt="ourMenuBG2"
        className="min-h-[250px] object-cover hidden md:block"
      />

      <DessertMenu />

      <BookingFormHome />

      <Footer />
    </>
  );
};

export default MenuPage;
