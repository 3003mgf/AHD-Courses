'use client'

import { useAI } from "@/utils/zustand/zustand";
import gsap from "gsap";
import { Dispatch, SetStateAction, useEffect } from "react";

const AIButton = ({customSize, displayText}:{customSize?: string, displayText?: boolean}) => {

  const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
  const setOpenAI = useAI(state => state.setIsOpen);
  

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


    // Block Animation When Opening AI.
    const squaresContainer = document.getElementById("AI_BLOCKS_CONTAINER");
    
    if(squaresContainer){
      const squareSize = 100;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const numCols = Math.ceil(screenWidth / squareSize);
      const numRows = Math.ceil(screenHeight / squareSize);

      const numSquares = numCols * numRows;
      squaresContainer.style.width = `${numCols * squareSize}px`;
      squaresContainer.style.height = `${numRows * squareSize}px`;

      let squares: any[] = [];
      
      const createSquares = () =>{
        for (let i = 0; i < numSquares; i++){
          const square = document.createElement("div");
          square.classList.add('w-[100px]', 'h-[100px]', 'pointer-events-none', 'bg-[#FFE0B9]');
          squaresContainer?.appendChild(square);
          squares.push(square);
        };
      };

      const animateSquares = () =>{
        gsap.fromTo(
          squares, {
            opacity: 0
          },
          {
            opacity: 1,
            // delay: 0.5,
            duration: 0.0005,
            stagger: {
              each: 0.004,
              from: "random"
            },
            onComplete: () =>{
              setOpenAI(true);
            }
          }
        );

        gsap.to(squares, {
          opacity: 0,
          delay: 1,
          duration: 0.0005,
          stagger: {
            each: 0.004,
            from: "random"
          }
        });
      };

      document.getElementById("AI_BUTTON_CONTAINER")?.addEventListener("click", () =>{
        squaresContainer.innerHTML = "";
        squares = [];
        createSquares();
        animateSquares();
      });
    };
    
  }, []);



  return ( 
    <div id="AI_BUTTON_CONTAINER" className="flex items-center gap-x-3 cursor-pointer">
      <div className={`${customSize ? customSize : "w-[27.5px] h-[18.5px]"} rounded-full bg-[#FFE0B9] dark:bg-[#FFE0B9] relative`}>
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