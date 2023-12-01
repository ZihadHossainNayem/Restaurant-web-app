"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [showPlaceholderName, setShowPlaceholderName] = useState(true);
  const [showPlaceholderEmail, setShowPlaceholderEmail] = useState(true);
  const [showPlaceholderSubject, setShowPlaceholderSubject] = useState(true);
  const [showPlaceholderPhone, setShowPlaceholderPhone] = useState(true);
  const [showPlaceholderMsg, setShowPlaceholderMsg] = useState(true);

  return (
    <>
      <p className="uppercase font-josefin tracking-widest text-base">
        <span className="py-1 border-t border-b border-tan">reservation</span>
      </p>
      <h4 className="capitalize mt-5">Have a Question?</h4>

      <form className="mt-10">
        <div className="flex gap-6 w-full justify-between md:flex-row flex-col ">
          <input
            type="text"
            placeholder={showPlaceholderName ? "Name" : ""}
            className="bg-transparent border border-clay px-4 py-2 font-josefin w-full  placeholder-clay"
            onFocus={() => setShowPlaceholderName(false)}
            onBlur={() => setShowPlaceholderName(true)}
          />
          <input
            type="email"
            placeholder={showPlaceholderEmail ? "Email" : ""}
            className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
            onFocus={() => setShowPlaceholderEmail(false)}
            onBlur={() => setShowPlaceholderEmail(true)}
          />
        </div>
        <div className="my-8 flex gap-6  md:flex-row flex-col">
          <input
            type="text"
            placeholder={showPlaceholderSubject ? "Subject" : ""}
            className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
            onFocus={() => setShowPlaceholderSubject(false)}
            onBlur={() => setShowPlaceholderSubject(true)}
          />
          <input
            type="text"
            placeholder={showPlaceholderPhone ? "Phone" : ""}
            className="bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
            onFocus={() => setShowPlaceholderPhone(false)}
            onBlur={() => setShowPlaceholderPhone(true)}
          />
        </div>

        <textarea
          type="text"
          placeholder={showPlaceholderMsg ? "Message" : ""}
          className="h-28 bg-transparent border border-clay px-4 py-2 font-josefin w-full placeholder-clay"
          onFocus={() => setShowPlaceholderMsg(false)}
          onBlur={() => setShowPlaceholderMsg(true)}
          cols="10"
        />

        {/* button */}
        <button className="button !border-tan mr-auto mt-8">
          <p className="font-josefin text-tan font-medium">Send</p>
        </button>
      </form>
    </>
  );
};

export default ContactForm;
