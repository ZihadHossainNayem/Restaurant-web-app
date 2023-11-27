"use client";
import React, { useState } from "react";

const NewsLetterForm = () => {
  const [showPlaceholderEmail, setShowPlaceholderEmail] = useState(true);
  return (
    <>
      <form className="flex">
        <input
          type="email"
          placeholder={showPlaceholderEmail ? "Email" : ""}
          className="min-w-[280px] bg-transparent border border-white px-4 py-3 font-josefin w-full placeholder-white"
          onFocus={() => setShowPlaceholderEmail(false)}
          onBlur={() => setShowPlaceholderEmail(true)}
        />
        <button className="button !border-white bg-white mx-auto !py-3">
          <p className="font-josefin text-clay font-medium">Subscribe</p>
        </button>
      </form>
    </>
  );
};

export default NewsLetterForm;
