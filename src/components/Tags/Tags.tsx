'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Tags = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end']
  });

  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [4200, 0]);


  return ( 
    <div ref={ref} className="w-full h-[175vh] px-[120px] flex items-start justify-start relative">
      
      <div className="w-full h-screen sticky top-0 left-0">
        <div className="w-full h-full relative flex items-center justify-start">
          <p className="w-fit text-[#414141] dark:text-[#E9E6DE] text-[100px] font-SatoshiBlack leading-none pb-[5px] relative overflow-visible z-10">
            You'll Learn.

            {/* <span className="absolute bottom-[17.5px] -right-[21.5%] text-[10px] text-[#FFA300] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
              ~{"\u00A0"}TRUST US.
            </span> */}
          </p>

          {/* SVG */}
          <svg width="1000" height="2000" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-[780px] 2xl:-top-[740px] left-[10%] -rotate-[90deg] pointer-events-none">
            <motion.path 
              d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852" 
              strokeWidth="22.5" 
              strokeLinejoin="round" 
              strokeLinecap="round"
              strokeDasharray={4200}
              style={{ strokeDashoffset }}
              className={"stroke-[#F5F3EEd7] dark:stroke-[#141414]"}
            >

            </motion.path>
          </svg>
        </div>
      </div>

    </div>
   );
}
 
export default Tags;