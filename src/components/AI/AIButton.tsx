'use client'

import gsap from "gsap";
import { useEffect } from "react";

const AIButton = ({displayText}:{displayText: boolean}) => {

  const tl = gsap.timeline({repeat: -1, repeatDelay: 1});

  useEffect(() => {
    tl.to("#AI_BUTTON", {
      scaleY: 0.4,
      duration: 0.3
    })  
    tl.to("#AI_BUTTON", {
      scaleY: 1,
      duration: 0.3
    })
    tl.to("#AI_BUTTON", {
      left: "42%",
      duration: 0.3
    },"+=0.5")
    tl.to("#AI_BUTTON", {
      scaleY: 0.4,
      duration: 0.3
    }, "+=0.5") 
    tl.to("#AI_BUTTON", {
      scaleY: 1,
      duration: 0.3
    }) 
    tl.to("#AI_BUTTON", {
      left: "58%",
      duration: 0.3
    }, "+=0.5")

    tl.to("#AI_BUTTON", {
      scaleY: 0.4,
      duration: 0.3
    }, "+=0.5") 
    tl.to("#AI_BUTTON", {
      scaleY: 1,
      duration: 0.3
    }) 
    tl.to("#AI_BUTTON", {
      scaleY: 0.4,
      duration: 0.3
    }) 
    tl.to("#AI_BUTTON", {
      scaleY: 1,
      duration: 0.3
    }) 
    tl.to("#AI_BUTTON", {
      left: "42%",
      duration: 0.3
    }, "+=0.5")
    tl.to("#AI_BUTTON", {
      scaleY: 0.4,
      duration: 0.3
    }, "+=0.5") 
    tl.to("#AI_BUTTON", {
      scaleY: 1,
      duration: 0.3
    }) 
    tl.to("#AI_BUTTON", {
      left: "50%",
      duration: 0.3
    }, "+=0.5")
    
  }, []);

  return ( 
    <div className="flex items-center gap-x-3">
      <div className="w-[27.5px] h-[18.5px] rounded-full bg-[#FFE0B9] dark:bg-[#FFE0B9] relative">
        <div id="AI_BUTTON" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex gap-x-[3px]">
          <div className="w-[1.5px] h-[5.5px] bg-[#C67508] dark:bg-[#C67508] rounded-full"></div>
          <div className="w-[1.5px] h-[5.5px] bg-[#C67508] dark:bg-[#C67508] rounded-full"></div>
        </div>
      </div>

      {displayText && (
        <p className="text-[10px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase">AI</p>
      )}
    </div>
   );
}
 
export default AIButton;