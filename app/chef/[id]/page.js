"use client";
import ChefDetailsCard from "@/components/Cards/ChefDetailsCard";
import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import PromoVideo from "@/components/UI/PromoVideo/PromoVideo";
import chefsData from "@/data/ChefsData";
import { useParams } from "next/navigation";
import React from "react";

const ChefPage = () => {
  const { id } = useParams();

  const chef = chefsData.find((chef) => chef.id === Number(id));

  return (
    <div>
      {chef ? (
        <>
          <Header />

          <div className="h-[190px] bg-clay text-white flex items-center justify-center">
            <h2 className="py-1 border-t border-b border-tan inline-block">
              Chef : {chef.name}
            </h2>
          </div>

          <div className="container md:py-32 py-24">
            <ChefDetailsCard chef={chef} />
          </div>

          <PromoVideo />

          <BookingFormHome />

          <Footer />
        </>
      ) : (
        <h3>Chef not found</h3>
      )}
    </div>
  );
};

export default ChefPage;
