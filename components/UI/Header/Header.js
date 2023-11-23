"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/Logo_res.png";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import HeaderMenu from "./HeaderMenu";
import Hero from "../Hero/Hero";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="bg-clay min-h-[1045px]">
      <div className="container md:py-12 py-4 flex items-center justify-between">
        {/* left - button */}
        <>
          <div className="md:inline-block hidden">
            <button className="button ">
              <a href="tel:+09678112233">
                <p className="text-white font-josefin ">Call - 09678 112233</p>
              </a>
            </button>
          </div>
          <span
            className="p-2 md:hidden block cursor-pointer"
            onClick={() => setSideBar(!sideBar)}
          >
            <MdOutlineMenu className="text-tan" size={32} />
          </span>
        </>
        {/* middle - logo */}
        <div className="flex flex-1 justify-center">
          <Image
            src={logo}
            alt="logo"
            width={378}
            height={187}
            className="md:w-[340px] w-[240px]"
          />
        </div>
        {/* right - button */}
        <>
          <div className="md:block hidden">
            <button className="button">
              <p className="text-white font-josefin">Reservation</p>
            </button>
          </div>
          <span className="p-2 block md:hidden">
            <MdOutlineEditCalendar className="text-tan" size={28} />
          </span>
        </>
      </div>

      {/* menu for mobile devices */}
      {/* black overlay */}
      {sideBar ? (
        <div className="bg-clay/50 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* menu slide */}
      <div
        className={
          sideBar
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 bg-clay duration-300 border-r border-tan/20"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-clay duration-300 border-r border-tan/20"
        }
      >
        <IoCloseSharp
          onClick={() => setSideBar(!sideBar)}
          size={30}
          className="cursor-pointer absolute right-4 top-4 text-tan z-[1]"
        />
        {/* sidebar content */}
        <div>
          <HeaderMenu verticalLayout={true} sidebar={sideBar} />
        </div>
      </div>

      {/* header menu here */}
      <div className="hidden md:block">
        <HeaderMenu />
      </div>

      {/* hero section here */}
      <Hero />
    </div>
  );
};

export default Header;
