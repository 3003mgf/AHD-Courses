/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { globalOpacity } from "@/utils/framer/framer";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

const Trailer = ({setOpen}:{setOpen: Dispatch<SetStateAction<boolean>>}) => {

  const ref = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [hovered, setHovered] = useState<boolean>(false);

  const [play, setPlay] = useState<boolean>(true);
  const [muted, setMuted] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  
  let timer;

  useEffect(() => {
    if(ref && ref.current){
      const storedRef = ref.current;

      const handleKeyDown = (e) => {
        if (e.keyCode === 77) { // 77 is the key code for 'M'
          setMuted(prevMuted => !prevMuted);
        }
        if(e.keyCode === 32){
          setPlay(prevPlay => !prevPlay);
        }
        if (e.keyCode === 37) { // 37 is the key code for the left arrow key
          videoRef.current!.currentTime = Math.max(videoRef.current!.currentTime - 10, 0);
        }
        if (e.keyCode === 39) { // 39 is the key code for the right arrow key
          videoRef.current!.currentTime = Math.min(videoRef.current!.currentTime + 10, videoRef.current!.duration);
        }
      };

      const handleMouseMove = () => {
        clearTimeout(timer); // clear the timer at the start of function 
        setHovered(true); // mouse is moving, set hovered to true
    
        // set the timer to run after 1 second
        timer = setTimeout(() => {
          setHovered(false); // after 1 second of no mouse movement, set hovered to false
        }, 2000);
      };

      const updateProgress = () => {
        if (videoRef.current) {
          const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          setVideoProgress(progress);
        }
        requestAnimationFrame(updateProgress);
      };

      requestAnimationFrame(updateProgress);

      handleMouseMove();
  
      document.addEventListener("keydown", handleKeyDown);
      ref.current.addEventListener("mousemove", handleMouseMove);
  
      // Don't forget to remove the event listener when the component unmounts
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        storedRef.removeEventListener("mousemove", handleMouseMove);
        cancelAnimationFrame(updateProgress);
      };
    };
  }, []);

  useEffect(() => {
    if(play){
      videoRef.current?.play();
    };
    if(!play){
      videoRef.current?.pause();
    }
  }, [play]);

  return ( 
    <motion.div 
      ref={ref}
      onMouseEnter={()=> setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      variants={globalOpacity}
      custom={1}
      initial={"initial"}
      animate={"enter"}
      exit={"exit"}
      className="fixed top-0 left-0 w-full h-screen bg-[#212121] z-[102]"
    >
      <div className="w-full h-full relative">

        {/* Video */}
        <video 
          ref={videoRef} 
          preload="auto" 
          autoPlay 
          loop 
          muted={muted} 
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={"/videos/trailer_dummy.mp4"}/>
        </video>

        {/* Controls */}
        <motion.div 
          variants={globalOpacity} 
          initial="initial" 
          animate={hovered ? "enter" : "exit"} 
          className="absolute top-[22.75px] left-1/2 -translate-x-1/2 w-[30%] h-[20px] myFlex group"
          style={{mixBlendMode:"difference"}}
        >
          <div className="w-full relative h-[1.5px] bg-[#FFFEF340] rounded-full">
            <motion.div className="absolute top-0 left-0 h-full bg-[#FFFEF3] rounded-full" style={{ width: `${videoProgress}%` }}></motion.div>
          </div>
        </motion.div>


        {/* Close */}
        <motion.div 
          variants={globalOpacity} 
          initial="initial" 
          animate={hovered ? "enter" : "exit"}
          onClick={() => setOpen(false)} 
          className="absolute z-[21] bottom-8 left-[60px] w-fit h-fit myFlex group overflow-hidden cursor-pointer" 
          style={{mixBlendMode:"difference"}}
        >
          <p className={`font-SatoshiMedium uppercase text-[10px] text-[#FFFEF3] leading-none ${hovered ? "mb-0 rotate-[0deg]" : "-mb-[15px] rotate-[10deg]"} transition-all duration-700`}>
            CLOSE
          </p>
        </motion.div>

        {/* Join */}
        <motion.div 
          variants={globalOpacity} 
          initial="initial" 
          animate={hovered ? "enter" : "exit"}
          onClick={() => setOpen(false)} 
          className="absolute z-[21] bottom-8 right-[60px] w-fit h-fit myFlex group overflow-hidden cursor-pointer" 
          style={{mixBlendMode:"difference"}}
        >
          <p className={`font-SatoshiMedium uppercase text-[10px] text-[#FFFEF3] leading-none ${hovered ? "mb-0 rotate-[0deg]" : "-mb-[15px] rotate-[10deg]"} transition-all duration-700`}>
            + INFO
          </p>
        </motion.div>

        {/* Logo */}
        {/* <motion.div 
          variants={globalOpacity} 
          initial="initial" 
          animate={hovered ? "enter" : "enter"}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[45px] h-[45px] bg-[#222222] rounded-[8px] p-[0px] myFlex gap-x-2.5"
          
        >
          <div className="h-full aspect-square rounded-[8px] bg-[#212121] myFlex">
            <svg stroke="#FFFEF3" fill="#FFFEF3" stroke-width="0" viewBox="0 0 24 24" className="w-[40px] h-[40px]" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"
              >

              </path>
            </svg>
          </div>
        </motion.div> */}

      </div>
    </motion.div>
   );
}
 
export default Trailer;