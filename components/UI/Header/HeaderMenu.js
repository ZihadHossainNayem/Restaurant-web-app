import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const HeaderMenu = ({ verticalLayout, sidebar }) => {
  return (
    <>
      {/* border */}
      {!sidebar && (
        <div className="h-20 w-full absolute border-t border-b border-[#5c6168]"></div>
      )}
      {/* container */}
      <div
        className={`relative text-white container flex justify-between py-7 ${
          verticalLayout
            ? "flex-col py-16 pb-12 pl-6 gap-6 h-screen"
            : "flex-row"
        } `}
      >
        {/* list */}
        <div>
          <ul
            className={`font-josefin flex lg:gap-14 md:gap-6 ${
              verticalLayout ? "flex-col space-y-12 pt-12" : "flex-row"
            }`}
          >
            <li>
              <p>Homes</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Menu</p>
            </li>
            <li>
              <p>Reservation</p>
            </li>
            <li>
              <p>Gallery</p>
            </li>
            <li>
              <p>Blog</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>

        {/* socials */}
        <div className={`${verticalLayout ? "mt-auto" : ""} flex gap-8`}>
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
    </>
  );
};

export default HeaderMenu;
