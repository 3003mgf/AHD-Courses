'use client'

import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { data } from "@/components/Store/data";
import StoreCard from "@/components/Store/StoreCard";
import { useDarkMode } from "@/utils/zustand/zustand";

const Store = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);

  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      {/* Top */}
      <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] bg-[#F2F0EA99] dark:bg-[#141414] relative">
        <div className="w-full flex items-start justify-start">
          <div className="w-[23.5%]">
            <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[15px]">
              STORE •
            </p>
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
              - THE YOUTH CULTURE -
            </p>
          </div>
          <div className="w-[76.5%] flex flex-col relative">
            <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
              ~ Store.
            </p>

            {/* Editorial & Grid */}
            <div className="absolute top-[15px] right-0 flex items-center gap-x-5">
              {/* E */}
              {/* <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] font-SatoshiBold leading-none uppercase">
                <span className="text-[#FFA300]">#1</span>{'\u00A0'}{'\u00A0'}<span className="text-[#414141]">Online</span> <span className="text-[#787777]">Social Media</span> Academy.
              </p> */}
              
              {/* <p className="text-[10px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase">[{"\u00A0"}{"\u00A0"}{"\u00A0"}]{"\u00A0"}{"\u00A0"}GRID</p> */}
            </div>
          </div>
        </div>

        {/* Cut */}
        <div className="absolute -bottom-[40px] left-0 w-full h-[100px]">
          <div className="w-full h-full relative">
            <img 
                src={
                  isDarkMode
                    ? "/images/Workshop/workshop-cut-11.svg" // Dark mode image
                    : "/images/Workshop/workshop-cut.svg"     // Light mode image
                }
                alt="_" 
                className="absolute w-full h-full object-cover"
              />
          </div>
        </div>

        {/* Shape */}
        <div className="absolute top-[36.5%] -translate-y-[36.5%] right-0 w-[25%] h-[60%] -rotate-[180deg]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>


      <div className="w-full grid grid-cols-3 gap-5 pt-[80px] px-[120px]">
        {data.map((item, index) =>{
          if(index < 9){
            return (
              <StoreCard key={`STORE_CARD_${index}`} item={item} index={index}/>
            )
          }
        })}
      </div>
      
      <Labs/>

      <Footer/>
    </div>
   );
}
 
export default Store;