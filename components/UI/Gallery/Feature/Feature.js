import React from "react";
import feature1 from "../../../../public/Feature1.jpg";
import feature2 from "../../../../public/Feature2.jpg";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24">
        {/* top section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <p className="uppercase font-josefin text-base">
              <span className="py-1 border-t border-b border-tan tracking-widest">
                feature
              </span>
            </p>
            <h1 className="mt-5 mb-8 leading-none">Always fresh ingredients</h1>
            <p className="font-josefin text-gray max-w-[530px]">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
            <button className="button mt-8 mr-auto">
              <p className="font-josefin text-tan">View Menu</p>
            </button>
          </div>

          <>
            <Image src={feature1} alt="featureImg" />
          </>
        </div>

        {/* bottom section */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="lg:order-1 order-2">
            <Image src={feature2} alt="featureImg" />
          </div>

          <div className="flex flex-col justify-center lg:order-2 order-1">
            <p className="uppercase font-josefin text-base">
              <span className="py-1 border-t border-b border-tan tracking-widest">
                feature
              </span>
            </p>
            <h1 className="mt-5 mb-8 leading-none">
              We invite you to visit our restaurant
            </h1>
            <p className="font-josefin text-gray max-w-[530px]">
              Every time you perfectly dine with us, it should happy for great
              inspired food in an environment designed with individual touches
              unique to the local area.
            </p>
            <button className="button mt-8 mr-auto">
              <p className="font-josefin text-tan">View Menu</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
