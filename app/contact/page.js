import BranchLocation from "@/components/UI/ContactUs/BranchLocation/BranchLocation";
import ContactInformation from "@/components/UI/ContactUs/ContactInformation/ContactInformation";
import Footer from "@/components/UI/Footer/Footer";
import Header from "@/components/UI/Header/Header";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Header />

      <div className="h-[190px] bg-clay text-white flex items-center justify-center">
        <h2 className="py-1 border-t border-b border-tan inline-block">
          Contact Us
        </h2>
      </div>

      <ContactInformation />

      <BranchLocation />

      <Footer />
    </div>
  );
};

export default ContactPage;
