import React from "react";
import aboutUsHero from "../../../../public/aboutusHero.jpg";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
import Star from "../../Icons/Star";

const AboutUsHero = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container grid md:grid-cols-2 md:py-20 py-8">
        {/* left */}
        <div className="flex flex-col justify-center md:text-start text-center">
          <p className="font-josefin uppercase tracking-widest">
            <span className="py-1 border-b border-t border-tan text-base">
              about us
            </span>
          </p>

          <h4 className="my-5">Quality and Tradition</h4>

          <p className="font-josefin text-gray">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </p>

          <div className="mt-8">
            <p className="font-josefin">JOSEFINE</p>
            <h3 className="sign pl-3">Josefine</h3>
          </div>

          <button className="md:mt-16 mt-6 button hover:bg-clay text-tan hover:text-white md:mr-auto md:mx-0 mx-auto">
            <p className="font-josefin">See More</p>
          </button>
        </div>

        {/* right */}
        <div className="relative mt-12 md:mt-0">
          <div className="flex lg:justify-end justify-center">
            <Image
              src={aboutUsHero}
              alt="aboutUsHero"
              className="rounded-tr-[40%] w-[560px]"
            />
          </div>

          {/* ceo text box */}
          <div className="absolute -bottom-16 left-0 md:px-[58px] md:py-[39px] px-[50px] py-[30px] bg-white shadow-custom max-w-[400px]">
            <div className="flex gap-6 items-center">
              <div className="w-[60px]">
                <Image src={ceo} alt="ceo" className="rounded-full w-full" />
              </div>
              <div>
                <h5>Josefin</h5>
                <p className="font-josefin text-gray">CEO & Founder</p>
              </div>
            </div>
            <p className="font-josefin text-gray my-5">
              Capitalize on low hanging fruit to identify a ballpark
            </p>

            <div>
              <Star />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
