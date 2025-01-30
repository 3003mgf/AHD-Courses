/* eslint-disable @next/next/no-img-element */
'use client'

import { useDarkMode } from "@/utils/zustand/zustand";

const LogoFooter = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);

  return ( 
    <div className="absolute -bottom-[80px] left-0 w-[100vw] h-[500px]">
      {/* Relativeness */}
      <div className="w-full h-full relative">
        {/* Image */}
        <img 
          src={
            isDarkMode
              ? "/images/Footer/Pattern-Fill-DM.svg" // Dark mode image
              : "/images/Footer/Pattern-Fill-41.svg"      // Light mode image
          }
          alt="_" 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Shadow */}
        {/* <div className="absolute bottom-[80px] left-0 w-full h-[110px] bg-gradient-to-t from-[#FAF9F6] to-transparent"></div> */}
      </div>
    </div>
   );
}
 
export default LogoFooter;