'use client'

import { useScroll, useTransform, motion, useMotionValueEvent, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const Banner = () => {

  const ref = useRef<HTMLDivElement | null>(null);

  const yMotionValue = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  
  useMotionValueEvent(scrollYProgress, "change", (value) =>{
    yMotionValue.set(value);
    console.log(value);
  })

  // Apply a transform to create the desired effect
  const videoY = useTransform(yMotionValue, [0, 0.5], [-15, -170]);

  // Add a spring effect to the transformed value
  // const videoY = useSpring(rawVideoY, {
  //   stiffness: 200, // Adjust for snappiness
  //   damping: 20,    // Adjust for bounce
  // });

  return ( 
    <motion.div 
      ref={ref} 
      className="w-[calc(100%-120px)] mx-auto aspect-video -mt-[165px] p-[32px] bg-gradient-to-b from-[#FFFEFE] to-transparent rounded-[24px] flex items-start justify-start flex-col gap-y-[32px] relative overflow-visible"
    >
      <div className="w-[300px] h-[52px] rounded-[12px] bg-[#FAF9F6]">

      </div>
      <div className="w-full aspect-video bg-[#1D1D1D50] rounded-[24px] border-[1px] border-[#E9E6DF] relative">
        {/* <video 
          src="https://framerusercontent.com/assets/e2pS573aCeuobLNwUUjgT98swmw.mp4"
          autoPlay loop muted
          className="w-full h-auto"
        ></video> */}
      </div>
      <motion.div 
        style={{y: videoY}}
        className="absolute right-[64px] w-[580px] h-[400px] rounded-[16px] bg-[#1D1D1D50]"
      >

      </motion.div>

    </motion.div>
  );
}
 
export default Banner;