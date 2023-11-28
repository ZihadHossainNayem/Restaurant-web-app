import React from "react";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-[661px] border border-gray/50 group">
      <div className="max-w-[661px] max-h-[391px] relative ">
        <div className="bg-clay/50 absolute top-0 left-0 w-full h-full"></div>
        <Image src={blog.image} alt="blogImage1" />
        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <button className="button text-tan transform -translate-y-full transition-all duration-700 group-hover:translate-y-0">
            <p className="text-josephin text-2xl">View More</p>
          </button>
        </div>
      </div>

      <div className="md:px-[40px] px-[30px] md:py-[45px] py-[35px]">
        <div className="flex gap-4">
          <p className="font-josefin uppercase text-base tracking-widest">
            <span className="border-t border-b border-tan py-1">recipes</span>
          </p>

          <p className="font-josefin uppercase text-base tracking-widest">
            <span className="border-t border-b border-tan py-1">
              {blog.date}
            </span>
          </p>
        </div>

        <h4 className="text-[35px] capitalize py-5">{blog.title}</h4>
        <p className="font-josefin text-gray">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
