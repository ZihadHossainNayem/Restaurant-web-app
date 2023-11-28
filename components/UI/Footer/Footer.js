import React from "react";
import logo from "../../../public/Logo_res.png";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import NewsLetterForm from "@/components/Forms/NewsLetterForm";

const Footer = () => {
  return (
    <div className="bg-clay text-white md:pt-[80px] md:pb-[10px] py-[30px]">
      <div className="container">
        {/* top section */}
        <div className="flex items-center justify-between md:flex-row flex-col gap-8 mb-16">
          <a href="/" className="font-josefin border-b lg:mr-24 mr-0">
            Instagram Feed
          </a>

          <Image src={logo} alt="logo" className="w-[300px]" />

          <div className="flex gap-4">
            <a href="#" target="_blank">
              <FaInstagram size={22} />
            </a>
            <a href="#" target="_blank">
              <FaFacebook size={22} />
            </a>
            <a href="#" target="_blank">
              <FaTwitter size={22} />
            </a>
            <a href="#" target="_blank">
              <FaPinterest size={22} />
            </a>
          </div>
        </div>

        {/* middle section */}
        <div className="flex items-center justify-between lg:flex-row flex-col gap-8 mb-16">
          {/* middle - 1 */}
          <div className="flex flex-col lg:text-start text-center">
            <p className="uppercase  tracking-widest font-josefin mb-8">
              <span className="border-t border-b border-tan py-1 text-[15px]">
                contact
              </span>
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-josefin"> House No: 31, Avenue 2, Mirpur 11</p>
              <p className="font-josefin">
                <span className="text-tan">Call</span> - 09678 112233
              </p>

              <p className="font-josefin text-tan">hirestaurantate@gmail.com</p>
            </div>
          </div>
          {/* middle - 2 */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-center font-josefin max-w-[305px] mb-8">
              Join our mailing list for updates, Get news & offers events.
            </p>
            <NewsLetterForm />
          </div>

          {/* middle - 3 */}
          <div>
            <p className="uppercase  tracking-widest font-josefin mb-8">
              <span className="border-t border-b border-tan py-1 text-[15px]">
                working hours
              </span>
            </p>
            <div className="flex flex-col gap-1">
              <p>
                <span className="text-tan">Mon – Fri:</span> 7.00am – 6.00pm
              </p>
              <p>
                <span className="text-tan">Sat:</span> 7.00am – 6.00pm
              </p>
              <p>
                <span className="text-tan">Sun:</span> 8.00am – 6.00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
