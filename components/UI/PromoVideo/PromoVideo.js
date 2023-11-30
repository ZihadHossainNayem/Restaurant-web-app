import VideoPlayer from "@/utils/VideoPlayer";
import React from "react";

const PromoVideo = () => {
  return (
    <div className="bg-clay relative">
      <div className="container md:py-32 py-24 text-white flex flex-col items-center">
        <p className="uppercase font-josefin">
          <span className="py-1 border-t border-b border-tan tracking-widest">
            promo
          </span>
        </p>

        <h4 className="mt-6 mb-12">My Promo Video</h4>
        <div className="z-10">
          <VideoPlayer />
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-[55%] bg-white"
          style={{ clipPath: "inset(45% 0 0 0)" }}
        ></div>
      </div>
    </div>
  );
};

export default PromoVideo;
