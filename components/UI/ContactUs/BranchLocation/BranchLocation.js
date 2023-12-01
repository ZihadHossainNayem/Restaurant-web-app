import BranchCard from "@/components/Cards/BranchCard";
import React from "react";
import branchData from "../../../../data/branchData";

const BranchLocation = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24">
        <div className="text-center">
          <p className="uppercase font-josefin text-base tracking-widest">
            <span className="py-1 border-t border-b border-tan">visit us</span>
          </p>
          <h4 className="mt-4 mb-6">Come and visit our Branches</h4>
        </div>
        <div className="grid  lg:grid-cols-2 gap-10 mt-12">
          {branchData.map((branchData) => (
            <BranchCard branchData={branchData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchLocation;
