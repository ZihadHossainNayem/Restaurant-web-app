import Footer from "@/components/UI/Footer/Footer";
import DishGallery from "@/components/UI/Gallery/DishGallery/DishGallery";
import Feature from "@/components/UI/Gallery/Feature/Feature";
import Header from "@/components/UI/Header/Header";
import Image from "next/image";
import React from "react";
import galleryBG from "../../public/galleryBG.jpg";

const GalleryPage = () => {
  return (
    <>
      <Header />
      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          Gallery
        </h2>
      </div>

      <DishGallery />

      <Image
        src={galleryBG}
        alt="galleryBG"
        className="min-h-[500px] object-cover"
      />

      <Feature />

      <Footer />
    </>
  );
};

export default GalleryPage;
