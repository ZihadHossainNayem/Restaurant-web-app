import React from "react";
import chefsData from "@/data/ChefsData";
import ChefsCard from "@/components/Cards/ChefsCard";

const OurChefs = () => {
  return (
    <div>
      <div className="container md:py-32 py-24">
        <div className="flex flex-col justify-center items-center">
          <p className="font-josefin text-base uppercase tracking-widest">
            <span className="py-1 border-t border-b border-tan"> team</span>
          </p>
          <h4 className="capitalize mt-4">Meet Our Professional Chefs</h4>
        </div>

        <div className="mt-16 flex justify-center flex-wrap gap-8">
          {chefsData.map((chef, index) => (
            <ChefsCard
              key={index}
              chef={chef}
              width={432}
              height={467}
              boxHeight={800}
              socials={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurChefs;
