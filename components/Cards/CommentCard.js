import Image from "next/image";
import React from "react";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const CommentCard = ({ comment }) => {
  return (
    <div className="bg-tuna max-w-[510px] h-[400px] xl:p-12 lg:p-8 p-4">
      {/* top section */}
      <div className="flex items-center gap-8 relative pb-8">
        <>
          {/* user image */}
          <div className="w-32 h-32 rounded-full overflow-hidden ">
            <Image src={comment.image} height={128} width={128} alt="client2" />
          </div>
          <div
            className="w-8 h-8 bg-tan border-2 border-clay rounded-full 
        absolute top-0 left-0 z-10 flex items-center justify-center"
          >
            <BiSolidQuoteAltRight className="text-clay" />
          </div>
        </>

        {/* user name location */}
        <div>
          <h5 className="pb-2">{comment.name}</h5>
          <p className="font-josefin text-tan">{comment.location}</p>
        </div>
      </div>

      {/* bottom section */}
      <hr className="py-4" />
      <h6 className="italic font-normal ">
        <span className="pr-1">"</span>
        {comment.comment}
      </h6>
    </div>
  );
};

export default CommentCard;
