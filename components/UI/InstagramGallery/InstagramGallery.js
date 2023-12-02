import instagramGalleryData from "@/data/instagramGalleryData";
import Image from "next/image";
import React from "react";

const InstagramGallery = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:pt-32 md:pb-12 py-24 flex flex-col items-center justify-center">
        <p className="font-josefin text-base">
          <span className="uppercase py-1 border-t border-b border-tan tracking-widest">
            stories
          </span>
        </p>
        <h4 className="py-4">Instagram Gallery</h4>
      </div>

      <div className="flex flex-row flex-wrap md:px-24 px-8 gap-4 items-center justify-between md:mb-32 mb-24">
        {instagramGalleryData.map((image) => (
          <Image
            src={image.image}
            alt="instagramGallery"
            className="max-w-[230px] mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramGallery;
