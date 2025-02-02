'use client'

import { motion } from "framer-motion";
import gsap from "gsap";

import { useCallback, useEffect, useState } from "react";

type Item = {
  name: string;
  lessons: number;
};

const openAnimation = {
  initial: {
    height: '45px'
  },
  enter: {
    height: 'auto',
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    height: '45px',
    transition: {
      duration: 0.5,
    },
  }
};

const Breakdown = ({item, index}:{item: Item, index: number}) => {

  const [hovered, setHovered] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(!open){
      if(hovered){
        gsap.to(`#BREAKDOWN_ROW_${index}`, {
          clipPath: `inset(0% 0% 0% 0%)`,
          duration: 1,
          ease: "bounce.out"
        })
      }else{
        gsap.to(`#BREAKDOWN_ROW_${index}`, {
          clipPath: `inset(100% 0% 0% 0%)`,
          duration: 1,
          ease: "bounce.out"
        })
      };

    }else{
      gsap.to(`#BREAKDOWN_ROW_${index}`, {
        clipPath: `inset(0% 0% 0% 0%)`,
        duration: 1,
        ease: "bounce.out"
      })
    }
  }, [hovered, index, open]);

  return ( 
    <motion.div 
      variants={openAnimation}
      initial="initial"
      animate={open ? "enter" : "exit"}
      className={`w-full flex items-start justify-start flex-col overflow-hidden`}
    >
      {/* Main */}
      <div 
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`w-full min-h-[45px] max-h-[45px] flex items-center relative px-4 rounded-lg cursor-pointer`}
      >
        <p className={`w-[23.5%] text-[10.5px] tracking-[0.05em] font-HovesDemi leading-none uppercase flex items-center justify-start z-10 transition-color duration-300 text-[#78777790] dark:text-[#787777]`}>
          0{index + 1}  
        </p>

        <p className={`w-[50%] text-[10px] tracking-[0.05em] font-SatoshiBold leading-none uppercase z-10 transition-color duration-300 text-[#414141cd] dark:text-[#E9E6DEd7]`}>
          {item.name}
        </p>

        <p className={`w-[10%] text-[10.5px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#414141cd] dark:text-[#E9E6DEd7]`}>
          {item.lessons}
        </p>

        <p className={`w-[26.5%] text-[13.5px] tracking-[0.05em] font-SatoshiMedium leading-none uppercase flex items-center justify-end z-10 transition-color duration-300 text-[#78777790] dark:text-[#787777]`}>
          -
        </p>

        <div 
          id={`BREAKDOWN_ROW_${index}`}
          className="absolute top-0 left-0 w-full h-full bg-[#F5F3EF] dark:bg-[#161616] rounded-lg z-5 flex items-center justify-between px-4"
          style={{clipPath: `inset(100% 0% 0% 0%)`}}
        >
          
        </div>     
      </div>

      {/* Inside Content */}
      <div className="w-full flex items-start justify-start flex-col pb-[37px]">
        <div className="w-full flex items-center justify-start px-4 h-[45px]">
          <div className="w-[23.5%]"></div>

          <div className="w-[50%] flex items-center justify-start">
            <p className={`text-[8.5px] tracking-[0.05em] font-SatoshiBold leading-none uppercase z-10 transition-color duration-300 text-[#41414199] dark:text-[#E9E6DEd7]`}>
              ---
            </p>
          </div>

          <div className="w-[10%] flex items-center justify-start opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              7:10
            </p>
          </div>

          <div className="w-[26.5%] flex items-center justify-end opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              01
            </p>  
          </div>
        </div>

        <div className="w-full flex items-center justify-start px-4 h-[45px]">
          <div className="w-[23.5%]"></div>

          <div className="w-[50%] flex items-center justify-start">
            <p className={`text-[8.5px] tracking-[0.05em] font-SatoshiBold leading-none uppercase z-10 transition-color duration-300 text-[#41414199] dark:text-[#E9E6DEd7]`}>
              ---
            </p>
          </div>

          <div className="w-[10%] flex items-center justify-start opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              7:10
            </p>
          </div>

          <div className="w-[26.5%] flex items-center justify-end opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              01
            </p>  
          </div>
        </div>


        <div className="w-full flex items-center justify-start px-4 h-[45px]">
          <div className="w-[23.5%]"></div>

          <div className="w-[50%] flex items-center justify-start">
            <p className={`text-[8.5px] tracking-[0.05em] font-SatoshiBold leading-none uppercase z-10 transition-color duration-300 text-[#41414199] dark:text-[#E9E6DEd7]`}>
              ---
            </p>
          </div>

          <div className="w-[10%] flex items-center justify-start opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              7:10
            </p>
          </div>

          <div className="w-[26.5%] flex items-center justify-end opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              01
            </p>  
          </div>
        </div>



        <div className="w-full flex items-center justify-start px-4 h-[45px]">
          <div className="w-[23.5%]"></div>

          <div className="w-[50%] flex items-center justify-start">
            <p className={`text-[8.5px] tracking-[0.05em] font-SatoshiBold leading-none uppercase z-10 transition-color duration-300 text-[#41414199] dark:text-[#E9E6DEd7]`}>
              ---
            </p>
          </div>

          <div className="w-[10%] flex items-center justify-start opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              7:10
            </p>
          </div>

          <div className="w-[26.5%] flex items-center justify-end opacity-0">
            <p className={`text-[10px] tracking-[0.05em] font-HovesDemi leading-none uppercase z-10 transition-color duration-300 text-[#41414140] dark:text-[#E9E6DEd7]`}>
              01
            </p>  
          </div>
        </div>

      </div>
    </motion.div>
   );
}
 
export default Breakdown;