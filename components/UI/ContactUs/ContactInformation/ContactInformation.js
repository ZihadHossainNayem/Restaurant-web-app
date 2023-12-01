import ContactForm from "@/components/Forms/ContactForm";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import {
  MdOutlineMail,
  MdOutlineWifiCalling3,
  MdOutlineLocationOn,
} from "react-icons/md";

const ContactInformation = () => {
  return (
    <div className="bg-white text-clay">
      <div className="container md:py-32 py-24 grid lg:grid-cols-2 gap-12">
        {/* grid 1 */}
        <div className="bg-rose_white lg:p-[50px] p-8">
          {/* top section */}
          <div className="flex flex-col gap-3">
            <h4>Contact Information</h4>
            <p className="font-josefin text-gray max-w-[500px]">
              Bring the table winwin survival strateges ensure proactive
              domination the end of the day going real times multiple
              touchpoints.
            </p>
          </div>
          {/* middle section */}
          <div className="flex flex-col gap-4 my-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-clay flex items-center justify-center">
                <MdOutlineLocationOn className="text-white w-7 h-7" />
              </div>
              <p className="font-josefin text-gray">
                House No: 31, Avenue 2, Mirpur 11
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-clay flex items-center justify-center">
                <MdOutlineMail className="text-white w-7 h-7" />
              </div>
              <p className="font-josefin text-gray">
                hirestaurantate@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-clay flex items-center justify-center">
                <MdOutlineWifiCalling3 className="text-white w-7 h-7" />
              </div>
              <p className="font-josefin text-gray">09678 112233</p>
            </div>
          </div>

          {/* bottom section */}
          <div className="flex gap-4">
            <a href="#" target="_blank">
              <div className="bg-[#eae5e2] w-10 h-10 rounded-full flex items-center justify-center">
                <FaInstagram size={22} />
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="bg-[#eae5e2] w-10 h-10 rounded-full flex items-center justify-center">
                <FaFacebook size={22} />
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="bg-[#eae5e2] w-10 h-10 rounded-full flex items-center justify-center">
                <FaTwitter size={22} />
              </div>
            </a>
            <a href="#" target="_blank">
              <div className="bg-[#eae5e2] w-10 h-10 rounded-full flex items-center justify-center">
                <FaPinterest size={22} />
              </div>
            </a>
          </div>
        </div>
        {/* grid 2 */}
        <div className="my-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
