import Image from "next/image";
import React from "react";
import pattern from "../../public/Pattern.png";

const OfferCard = ({ offer }) => {
  return (
    <div className="p-12 bg-[#c4c4c4] relative max-w-[672px] w-[672px]">
      {/* price tag */}
      <div className="pb-8 max-w-[260px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
        >
          <path
            d="M62.9712 10.3093C65.0544 6.94713 69.9456 6.94713 72.0288 10.3093C73.7748 13.1273 77.6431 13.6835 80.1124 11.4715C83.0584 8.83245 87.7515 10.2105 88.803 14.0233C89.6844 17.2192 93.2393 18.8426 96.2317 17.4159C99.8019 15.7137 103.917 18.3581 103.851 22.3128C103.797 25.6275 106.75 28.1867 110.023 27.6608C113.929 27.0334 117.132 30.73 115.955 34.5061C114.969 37.6711 117.081 40.9587 120.37 41.3763C124.294 41.8746 126.326 46.3238 124.133 49.6154C122.295 52.3743 123.396 56.1241 126.434 57.4513C130.058 59.0348 130.754 63.8762 127.723 66.4166C125.182 68.546 125.182 72.454 127.723 74.5834C130.754 77.1238 130.058 81.9652 126.434 83.5487C123.396 84.8759 122.295 88.6257 124.133 91.3846C126.326 94.6762 124.294 99.1254 120.37 99.6236C117.081 100.041 114.969 103.329 115.955 106.494C117.132 110.27 113.929 113.967 110.023 113.339C106.75 112.813 103.797 115.373 103.851 118.687C103.917 122.642 99.8019 125.286 96.2317 123.584C93.2393 122.157 89.6844 123.781 88.803 126.977C87.7515 130.79 83.0584 132.168 80.1124 129.528C77.6431 127.316 73.7748 127.873 72.0288 130.691C69.9456 134.053 65.0544 134.053 62.9712 130.691C61.2252 127.873 57.3569 127.316 54.8876 129.528C51.9416 132.168 47.2485 130.79 46.197 126.977C45.3156 123.781 41.7607 122.157 38.7683 123.584C35.1981 125.286 31.0833 122.642 31.1486 118.687C31.2033 115.373 28.2498 112.813 24.9766 113.339C21.0715 113.967 17.8684 110.27 19.0452 106.494C20.0315 103.329 17.9186 100.041 14.6299 99.6236C10.7062 99.1254 8.67433 94.6762 10.8673 91.3846C12.7053 88.6257 11.6043 84.8759 8.56645 83.5487C4.94205 81.9652 4.24596 77.1238 7.27742 74.5834C9.81831 72.454 9.81831 68.546 7.27742 66.4167C4.24596 63.8762 4.94205 59.0348 8.56645 57.4513C11.6043 56.1241 12.7053 52.3743 10.8673 49.6154C8.67433 46.3238 10.7062 41.8746 14.6299 41.3763C17.9186 40.9587 20.0315 37.6711 19.0452 34.5061C17.8684 30.73 21.0715 27.0334 24.9766 27.6608C28.2498 28.1867 31.2033 25.6275 31.1486 22.3128C31.0833 18.3581 35.1981 15.7137 38.7683 17.4159C41.7607 18.8426 45.3156 17.2192 46.197 14.0233C47.2485 10.2105 51.9416 8.83245 54.8876 11.4715C57.3569 13.6835 61.2252 13.1273 62.9712 10.3093Z"
            fill="#BBBBBB"
          />
          <path
            d="M65.9712 7.30928C68.0544 3.94713 72.9456 3.94713 75.0288 7.30928C76.7748 10.1273 80.6431 10.6835 83.1124 8.47152C86.0584 5.83245 90.7515 7.21048 91.803 11.0233C92.6844 14.2192 96.2393 15.8426 99.2317 14.4159C102.802 12.7137 106.917 15.3581 106.851 19.3128C106.797 22.6275 109.75 25.1867 113.023 24.6608C116.929 24.0334 120.132 27.73 118.955 31.5061C117.969 34.6711 120.081 37.9587 123.37 38.3763C127.294 38.8746 129.326 43.3238 127.133 46.6154C125.295 49.3743 126.396 53.1241 129.434 54.4513C133.058 56.0348 133.754 60.8762 130.723 63.4166C128.182 65.546 128.182 69.454 130.723 71.5834C133.754 74.1238 133.058 78.9652 129.434 80.5487C126.396 81.8759 125.295 85.6257 127.133 88.3846C129.326 91.6762 127.294 96.1254 123.37 96.6236C120.081 97.0413 117.969 100.329 118.955 103.494C120.132 107.27 116.929 110.967 113.023 110.339C109.75 109.813 106.797 112.373 106.851 115.687C106.917 119.642 102.802 122.286 99.2317 120.584C96.2393 119.157 92.6844 120.781 91.803 123.977C90.7515 127.79 86.0584 129.168 83.1124 126.528C80.6431 124.316 76.7748 124.873 75.0288 127.691C72.9456 131.053 68.0544 131.053 65.9712 127.691C64.2252 124.873 60.3569 124.316 57.8876 126.528C54.9416 129.168 50.2485 127.79 49.197 123.977C48.3156 120.781 44.7607 119.157 41.7683 120.584C38.1981 122.286 34.0833 119.642 34.1486 115.687C34.2033 112.373 31.2498 109.813 27.9766 110.339C24.0715 110.967 20.8684 107.27 22.0452 103.494C23.0315 100.329 20.9186 97.0413 17.6299 96.6236C13.7062 96.1254 11.6743 91.6762 13.8673 88.3846C15.7053 85.6257 14.6043 81.8759 11.5664 80.5487C7.94205 78.9652 7.24596 74.1238 10.2774 71.5834C12.8183 69.454 12.8183 65.546 10.2774 63.4167C7.24596 60.8762 7.94205 56.0348 11.5664 54.4513C14.6043 53.1241 15.7053 49.3743 13.8673 46.6154C11.6743 43.3238 13.7062 38.8746 17.6299 38.3763C20.9186 37.9587 23.0315 34.6711 22.0452 31.5061C20.8684 27.73 24.0715 24.0334 27.9766 24.6608C31.2498 25.1867 34.2033 22.6275 34.1486 19.3128C34.0833 15.3581 38.1981 12.7137 41.7683 14.4159C44.7607 15.8426 48.3156 14.2192 49.197 11.0233C50.2485 7.21047 54.9416 5.83245 57.8876 8.47152C60.3569 10.6835 64.2252 10.1273 65.9712 7.30928Z"
            fill="#292E36"
          />
        </svg>
        <div
          className="text-center absolute top-[85px] left-[70px] text-white"
          style={{ transform: "rotate(-20deg)" }}
        >
          <p className="uppercase font-josefin text-base">only</p>
          <h4 className="-mt-3">
            {offer.price}
            <span className="text-[30px] font-bold pl-1">Tk.</span>
          </h4>
        </div>
      </div>

      {/* offer details */}
      <div className="max-w-[260px]">
        <p className="font-josefin border-t border-b inline-block px-1 py-1">
          {offer.offer} <span className="uppercase">offer going</span>
        </p>

        <h4 className="py-5">{offer.name}</h4>
        <p className="font-josefin text-gray">{offer.description}</p>
      </div>

      <Image
        src={pattern}
        alt="pattern"
        className="absolute top-0 left-36"
        width={240}
      />

      <Image
        src={offer.image}
        alt={offer.name}
        width={380}
        className="absolute left-[270px] bottom-[15%] hidden md:inline-block"
      />
    </div>
  );
};

export default OfferCard;
