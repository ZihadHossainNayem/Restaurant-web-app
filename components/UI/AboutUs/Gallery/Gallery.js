import React from "react";
import gallery1 from "../../../../public/gallery1.jpg";
import gallery2 from "../../../../public/gallery2.jpg";
import gallery3 from "../../../../public/gallery3.jpg";
import gallery4 from "../../../../public/gallery4.jpg";
import gallery5 from "../../../../public/gallery5.jpg";
import Image from "next/image";

const AboutUsGallery = () => {
  return (
    <div className="bg-white text-clay md:py-32 py-24">
      <div className="container flex flex-col items-center">
        <p className="uppercase font-josefin text-base tracking-widest">
          <span className="py-1 border-t border-b border-tan">gallery</span>
        </p>
        <h4 className="mt-4">What We Make</h4>

        <div className="mt-16 flex md:flex-row flex-col gap-[15px]">
          <div className="flex flex-col gap-[15px]">
            <Image src={gallery1} alt="gallery1" />
            <Image src={gallery2} alt="gallery2" />
          </div>
          <div>
            <Image src={gallery3} alt="gallery3" />
          </div>
          <div className="flex flex-col gap-[15px]">
            <Image src={gallery4} alt="gallery4" />
            <Image src={gallery5} alt="gallery5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsGallery;
