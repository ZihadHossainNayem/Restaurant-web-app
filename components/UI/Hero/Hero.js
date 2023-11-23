import Image from "next/image";
import React from "react";
import heroImage from "../../../public/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="container text-white grid lg:grid-cols-2">
      {/* left */}
      <div className="lg:pr-12 pr-0 lg:pt-[30%] pt-[10%] text-center lg:text-start lg:block flex flex-col">
        <h1>Welcome to Restuarantate</h1>
        <p className="font-josefin py-8">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy.
        </p>
        <button className="button font-josefin hover:bg-tan hover:text-clay lg:mx-0 mx-auto">
          <p>View Menu</p>
        </button>
      </div>
      {/* right */}
      <div className="flex justify-end mt-8">
        <div className="bg-white/10 max-h-[718px] max-w-[656px] rounded-t-full p-4">
          <Image src={heroImage} alt="heroImage" className="rounded-t-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
