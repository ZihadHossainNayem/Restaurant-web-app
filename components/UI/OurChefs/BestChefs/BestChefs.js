import React from "react";
import bestChefs from "../../../../public/bestChefs.jpg";
import Image from "next/image";

const BestChefs = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24 grid lg:grid-cols-2 lg:gap-24 gap-16">
        {/* grid 1 */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="uppercase font-josefin text-base tracking-widest">
              <span className="py-1 border-t border-b border-tan">
                best chefs
              </span>
            </p>

            <h4 className="capitalize my-5">Only Skilled Team</h4>

            <p className="font-josefin text-gray">
              Bring tothe table survival strategies to ensured proactived
              domination At the end of the day, going forward, a new normal that
              has evolved from generation X is on the runway heading towards a
              streamlined touchpoints for offshoring.
            </p>
          </div>

          <div className="my-8">
            <>
              <h5>Experienced</h5>
              <div className="w-[97%] h-1 bg-[#c4c4c4] my-4 rounded-full">
                <div className="w-[90%] h-1 bg-clay rounded-full"></div>
              </div>
            </>

            <>
              <h5>Professionalism</h5>
              <div className="w-[97%] h-1 bg-[#c4c4c4] my-4 rounded-full">
                <div className="w-[80%] h-1 bg-clay rounded-full"></div>
              </div>
            </>

            <>
              <h5>Creative</h5>
              <div className="w-[97%] h-1 bg-[#c4c4c4] my-4 rounded-full">
                <div className="w-[85%] h-1 bg-clay rounded-full"></div>
              </div>
            </>
          </div>
          {/* button */}
          <button className="button mr-auto">
            <p className="font-josefin text-tan">See all dishes</p>
          </button>
        </div>

        {/* grid 2 */}
        <div>
          <Image src={bestChefs} alt="bestChefs" />
        </div>
      </div>
    </div>
  );
};

export default BestChefs;
