"use client";
import CommentCard from "@/components/Cards/CommentCard";
import ClientComment from "@/data/ClientComment";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="bg-clay min-h-[830px]">
      <div className="max-w-[1650px] w-[95%] ml-auto text-white md:py-24 py-12">
        <p className="uppercase font-josefin text-base">
          <span className="border-t border-b py-2 font-medium tracking-widest px-1 border-tan">
            testimonial
          </span>
        </p>

        <h4 className="py-5">What our clients say</h4>

        <p className="font-josefin">
          We love to hear from customers, so please leave a comment or say hello
          in an email.
        </p>

        <Swiper
          pagination={{
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="background-color: white; width: 13px; height: 13px;"></span>`;
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1, // Show one card on small screens
            },
            768: {
              slidesPerView: 2, // Show two cards on medium screens
            },
            1300: {
              slidesPerView: 3, // Show three cards on large screens
            },
          }}
        >
          {ClientComment.map((comment, index) => (
            <SwiperSlide key={index}>
              <div className="py-12">
                <CommentCard comment={comment} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
