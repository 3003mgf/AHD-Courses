'use client'

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Trailer from "./Trailer";
import { AnimatePresence } from "framer-motion";

const FeaturedCard = ({data, index}:{data, index: number}) => {

  const tl = gsap.timeline({delay: 0});
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [openTrailer, setOpenTrailer] = useState<boolean>(false);

  useEffect(() => {
    if(hovered){
      tl.to(ref.current, {
        borderRadius: "8px",
        duration: 0.5
      })
      tl.to(`#FC_BOTTOM_LEFT_${index}`, {
        top: 0,
        duration: 0.6,
      }, "-=0.5")
      tl.to(`#FC_BOTTOM_RIGHT_${index}`, {
        top: 0,
        duration: 0.6,
      }, "<")
      tl.to(`#FC_TOP_LEFT_${index}`, {
        top: 0,
        duration: 0.6,
      }, "<")
    };

    if(!hovered){
      tl.to(ref.current, {
        borderRadius: "24px",
        duration: 0.5
      })
      tl.to(`#FC_BOTTOM_LEFT_${index}`, {
        top: 25,
        duration: 0.7,
      }, "<")
      tl.to(`#FC_BOTTOM_RIGHT_${index}`, {
        top: 25,
        duration: 0.7,
      }, "<")
      tl.to(`#FC_TOP_LEFT_${index}`, {
        top: 25,
        duration: 0.6,
      }, "<")
    };
  }, [hovered]);

  return ( 
    <div 
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        w-full aspect-[1/1.3] bg-[#1D1D1D50] dark:bg-[#21212160] rounded-[24px] myFlex overflow-clip relative
      `}
    >
      <div className="absolute bottom-0 left-0 px-[16px] py-[14px]">
        <div className="relative overflow-hidden">
          <p className="text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] opacity-0 leading-none uppercase">
            {data?.title}{"\u00A0"}{"\u00A0"}  
          </p>
          <p id={`FC_BOTTOM_LEFT_${index}`} className="absolute top-[25px] left-0 w-full h-full text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] leading-none uppercase">
            {data?.title}{"\u00A0"}{"\u00A0"}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 px-[16px] py-[14px]">
        <div className="relative overflow-hidden">
          <p className="text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] opacity-0 leading-none">
            <span className="font-HovesDemi text-[10px]">{data?.price.original}</span> USD
          </p>
          <p id={`FC_BOTTOM_RIGHT_${index}`} className="absolute top-[25px] left-0 w-full h-full text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] leading-none">
            <span className="font-HovesDemi text-[10px]">{data?.price.original}</span> USD
          </p>
        </div>
      </div>

      <div onClick={() => setOpenTrailer(!openTrailer)} className="absolute top-0 left-0 px-[16px] py-[14px] cursor-pointer">
        <div className="relative overflow-hidden">
          <p className="text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] opacity-0 leading-none">TRAILER</p>
          <p id={`FC_TOP_LEFT_${index}`} className="absolute top-[25px] left-0 w-full h-full text-[9.5px] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em] leading-none">TRAILER</p>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {openTrailer && (
          <Trailer setOpen={setOpenTrailer}/>
        )}
      </AnimatePresence>
    </div>
   );
}
 
export default FeaturedCard;