/* eslint-disable @next/next/no-img-element */
'use client'

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import { useDarkMode } from "@/utils/zustand/zustand";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaStripeS } from "react-icons/fa";

const Hero = () => {
  
  return ( 
    <div className="w-full pb-[160px] pt-[160px] px-[60px] bg-[#F5F3EF] dark:bg-[#141414] relative overflow-hidden">
        <Technologies/>

        <AnimatedText id='HERO_1' text="Mmm... Like a" custom="text-[65px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.1]" type={1}/>
        <AnimatedText id='HERO_1' text="Social Media School." custom="text-[65px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.1]" type={1}/>

        <TrustedBy/>

        <CTA/>
        
        <Cut/>

        <Shapes/>
      </div>
   );
}
 
export default Hero;


const Technologies = () =>{

  // HT = Hero Technology

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to("#HT_CONTAINER", {
      width: "auto",
      opacity: 1,
      duration: 1.5,
    })
    tl.to("#HT", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.45
    },"-=0.5")

    tl.to("#HT_P", {
      top: 0,
      opacity: 1,
      duration: 0.5,
    },"-=0.25")
  }, []);

  return (
    <div className="w-fit h-[36px] mb-7 relative">
      <div id="HT_CONTAINER" className="w-[0%] h-full flex items-center rounded-full opacity-0 p-[4px] bg-gradient-to-br from-transparent via-[#FAF9F650] to-[#FAF9F6] dark:via-[#17171750] dark:to-[#171717]">
        {/* Technologies */}
        <div className="flex">
          <div id="HT" className="w-[28px] h-[28px] rounded-full bg-[#635BFF] dark:bg-[#41414140] myFlex opacity-0">
            <FaStripeS className="text-[#FFFFFF] w-[13px] h-[13px]"/>
          </div>
          <div id="HT" className="w-[28px] h-[28px] rounded-full bg-[#212121] dark:bg-[#41414140] -ml-[6%] myFlex opacity-0">
            <img src="https://cdn.brandfetch.io/id9IJJnIpA/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[50%] h-auto"/>
          </div>
          <div id="HT" className="w-[28px] h-[28px] rounded-full bg-[#F04F23] dark:bg-[#41414140] -ml-[6%] myFlex opacity-0 overflow-hidden">
            <img src="https://cdn.brandfetch.io/id_r-vy7Tu/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[82.5%] h-auto"/>
          </div>
          <div id="HT" className="w-[28px] h-[28px] rounded-full bg-[#212121] dark:bg-[#41414140] -ml-[6%] myFlex opacity-0">
            <img src="https://cdn.brandfetch.io/idCeIE9B96/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[32.1%] h-auto"/>
          </div>
        </div>

        {/* Tag */}
        <p className="text-[9.25px] tracking-[0.05em] text-[#78777780] dark:text-[#5A5A5A99] font-SatoshiBold leading-none uppercase -ml-[5.8%] px-4 relative myFlex">
          <span className="opacity-0">- THE YOUTH CULTURE -</span>

          <span id="HT_P" className="absolute top-[100%] left-0 w-full h-full px-4 opacity-0">- THE YOUTH CULTURE -</span>
        </p>
      </div>
    </div>
  )
}


const Shapes = () =>{
  
  const tl = gsap.timeline();
  
  const shapeRight = useRef<HTMLDivElement | null>(null);
  const shapeBottom = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    tl.to(shapeRight.current, {
      top: "10.3%",
      right: "0%",
      duration: 1.5
    })
    tl.to(shapeBottom.current, {
      bottom: "-5.5%",
      duration: 1.5
    }, "<")
  }, []);

  return (
    <>
      {/* Shape Right */}
      <div ref={shapeRight} className="absolute top-[3.3%] -translate-y-[36.5%] -right-[7%] w-[25%] h-[60%] -rotate-[180deg] pointer-events-none z-0">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>
      
      {/* Shape Bottom */}
      <div ref={shapeBottom} className="absolute -bottom-[12.5%] left-[20.5%] w-[25%] h-[60%] rotate-[90deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M917 37C676-335 116-241 659 451c-341 163-469 452 54 274-183 343-167 767 205 148 64 226 451 601 338-271 267 16 526-234 183-322 184-141-125-226-277-6 131-515 35-890-245-237z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

const Cut = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);

  return (
    <div className="absolute -bottom-[40px] left-0 w-full h-[100px] z-10">
      <div className="w-full h-full relative">
        <img 
          src={
            isDarkMode
              ? "/images/Workshop/workshop-cut-11.svg" // Dark mode image
              : "/images/Workshop/workshop-cut.svg"     // Light mode image
          }
          alt="_" 
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  )
};

const CTA = () =>{

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to("#HT_BUTTON", {
      opacity: 1,
      duration: 1.5,
      stagger: 0.75
    });
  }, []);

  return (
    <div className="flex gap-x-3.5 mt-8 px-[4px]">
      <button id="HT_BUTTON" className="w-[110px] h-[40px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full opacity-0">
        <p className="text-[10px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
          JOIN
        </p>
      </button>
      <button id="HT_BUTTON" className="w-[100px] h-[40px] bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-[#171717] rounded-full group opacity-0">
        <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
          REEL
        </p>
      </button>
    </div>
  )
};

const TrustedBy = () =>{

  const tl = gsap.timeline();

  useEffect(() => {
    tl.to("#HERO_TRUSTED_PICTURES div", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.25
    });
    tl.to("#HERO_TRUSTED_RATING img", {
      marginTop: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.25
    });
    tl.to("#HERO_TRUSTED_P", {
      top: 0,
      opacity: 1,
      duration: 0.5
    });
  }, []);

  return (
    <div className="flex items-center mt-7 px-[4px]">
      {/* Pictures */}
      <div id="HERO_TRUSTED_PICTURES" className="flex">
        <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip relative opacity-0">
          {/* <img src="https://framerusercontent.com/images/oqnWhZ7MZuoMdPnLGWQbPbnO4mU.jpg" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
        </div>
        <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative opacity-0">
          {/* <img src="https://framerusercontent.com/images/n5AZB9aS8FtjPnBeOTyFeMPZh4.jpg?scale-down-to=1024" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
        </div>
        <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative opacity-0">
          {/* <img src="https://framerusercontent.com/images/hNYpONdTHUdVFWucfc8ROOWVcs.jpg?scale-down-to=512" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
        </div>
        <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative opacity-0">
          {/* <img src="https://framerusercontent.com/images/5Py4y25huRpFsE41JxVkT0QQPg.jpg" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
        </div>
      </div>

      {/* Trusted By */}
      <div className="flex flex-col gap-y-2.5 -ml-[1.25%]">
        <div id="HERO_TRUSTED_RATING" className="flex items-center gap-x-0.5">
          <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px] -mt-2.5 opacity-0"/>
          <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px] -mt-2.5 opacity-0"/>
          <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px] -mt-2.5 opacity-0"/>
          <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px] -mt-2.5 opacity-0"/>
          <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px] -mt-2.5 opacity-0"/>
        </div>
        
        <p className="text-[9.25px] tracking-[0.05em] text-[#78777790] dark:text-[#414141] font-SatoshiBold leading-none uppercase px-[1px] relative">
          <span className="opacity-0">Trusted by <span className="text-[#414141] dark:text-[#E9E6DE]">33K People.</span></span>

          <span id="HERO_TRUSTED_P" className="absolute top-[100%] left-0 w-full h-full px-[1px] opacity-0">Trusted by <span className="text-[#414141] dark:text-[#E9E6DE]">33K People.</span></span>
        </p>

        {/* <p id="HERO_TRUSTED_P" className="text-[9.25px] tracking-[0.05em] text-[#78777790] dark:text-[#414141] font-SatoshiBold leading-none uppercase px-[1px]">
          Trusted by <span className="text-[#414141] dark:text-[#E9E6DE]">33K People.</span>
        </p> */}
      </div>
    </div>
  )
};