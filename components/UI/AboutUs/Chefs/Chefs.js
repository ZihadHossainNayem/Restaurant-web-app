import ChefsCard from "@/components/Cards/ChefsCard";
import React from "react";
import chefsData from "@/data/ChefsData";
import Link from "next/link";

const AboutUsChefs = () => {
  return (
    <div className="bg-rose_white text-clay md:py-32 py-24">
      <div className="container">
        <Link href="/chefs">
          <div className="flex flex-col justify-center items-center">
            <p className="font-josefin text-base uppercase tracking-widest">
              <span className="py-1 border-t border-b border-tan"> team</span>
            </p>
            <h4 className="capitalize mt-4">Meet Our Professional Chefs</h4>
          </div>
        </Link>

        <div className="mt-16 flex justify-center flex-wrap gap-4">
          {chefsData.slice(0, 4).map((chef, index) => (
            <ChefsCard
              key={index}
              chef={chef}
              width={245}
              height={255}
              boxHeight={400}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsChefs;
