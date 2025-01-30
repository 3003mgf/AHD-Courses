'use client'

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const animation = {
  initial: {
    width: "0px",
  },
  enter: {
    width: "93px",
    duration: 1
  },
  exit: {
    width: "0px",
    duration: 1
  }
};

const Spotify = () => {

  const [hovered, setHovered] = useState<boolean>(false);

  return ( 
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-[16px] left-[16px] h-[30px] bg-[#F2B347] rounded-full flex items-center justify-start z-50 group"
    >
      <div className="w-[30px] h-full myFlex p-[5px]">
        <img src="/images/spotify.svg" alt="_" className="w-full h-auto"/>
      </div>

      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div 
            variants={animation}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-full flex items-center justify-start"
          >
            {/* <p className="text-[9px] tracking-[0.05em] text-[#FFFEF399] font-SatoshiBold leading-none uppercase">
              AHD + SPOTIFY
            </p> */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
   );
}
 
export default Spotify;