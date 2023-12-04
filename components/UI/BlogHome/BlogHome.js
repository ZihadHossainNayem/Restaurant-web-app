import BlogCard from "@/components/Cards/BlogCard";
import React from "react";
import blog from "@/data/blog";
import Link from "next/link";

const BlogHome = () => {
  return (
    <div className="bg-white md:py-60 py-24 text-clay">
      <div className="container">
        {/* text */}
        <div className="flex flex-col justify-center items-center mb-[65px]">
          <p className="uppercase font-josefin tracking-widest">
            <span className=" border-t border-b border-tan py-1">blog</span>
          </p>
          <h4 className="capitalize py-5">be first who read news</h4>
          <p className="font-josefin text-gray max-w-[702px] text-center">
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.
          </p>
        </div>

        {/* blog section */}
        <div className="flex xl:flex-row flex-col justify-between xl:gap-4 gap-8 items-center">
          {blog.slice(0, 2).map((blog, index) => (
            <div key={index}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 ">
          <Link href={"/blog"}>
            <button className="button text-tan hover:bg-clay hover:text-white">
              <p className="text-josephin text-2xl">View More</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
