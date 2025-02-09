/* eslint-disable @next/next/no-img-element */
'use client'

import { useDarkMode } from "@/utils/zustand/zustand";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";

const Logo = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  const [logoRotation, setLogoRotation] = useState<number>(0);

  return ( 
    <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#E9E6DE] myFlex">
     
      <img 
        src={
          isDarkMode
            ? "https://cdn.brandfetch.io/id9IJJnIpA/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" // Dark mode image
            : "https://cdn.brandfetch.io/id9IJJnIpA/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"     // Light mode image
        }
        alt="_" 
        className="w-[50%] h-auto"
      />

    </div>
  );
}
 
export default Logo;