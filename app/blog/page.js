import BlogCard from "@/components/Cards/BlogCard";
import BookingFormHome from "@/components/UI/BookingForm/BookingFormHome";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import InstagramGallery from "@/components/UI/InstagramGallery/InstagramGallery";
import blog from "@/data/blog";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />

      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">Blog</h2>
      </div>

      <div className="container grid lg:grid-cols-2 gap-12 md:pt-32 pt-24 pb-12 md:pb-16">
        {blog.map((blog, index) => (
          <div key={index} className="flex items-center justify-center">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      <button className="button !px-24 text-tan mx-auto mb-32">
        <p className="text-josephin text-2xl">Next</p>
      </button>

      <BookingFormHome />

      <InstagramGallery />

      <Footer />
    </div>
  );
};

export default page;
