'use client'

import { useState } from "react";
import { IoEllipsisHorizontal, IoFlash, IoFlashSharp } from "react-icons/io5";

const SignIn = () => {
  return ( 
    <div className="w-full h-screen bg-gradient-to-b from-[#FAF9F6] to-[#F5F3EF] myFlex p-[60px] relative">
      <div className="w-[32.5%] flex flex-col">
        <Intro/>
   
        <Content/>
      </div>


      <Bottom/>

      <Shapes/>
    </div>
   );
}
 
export default SignIn;


const Shapes = () =>{
  return (
    <>
      {/* Shape Left */}
      <div className="absolute -bottom-[20%] -left-[2.5%] w-[27.5%] h-[60%] -rotate-[30deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>

      {/* Shape Right */}
      <div className="absolute -bottom-[5.5%] -right-[20%] w-[25%] h-[60%] -rotate-[30deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>
    </>
  )
};

const Bottom = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[100px] px-[60px] flex items-center justify-between z-10">
      {/* <div className="flex items-center gap-x-5">
        <p className="text-[12.5px] text-[#41414190] dark:text-[#E9E6DE90] inconsolata font-[500]">
          No account?
        </p>

        <button className="h-[34px] w-[76.48px] bg-[#414141] rounded-full">
          <p className="text-[9px] tracking-[0.05em] text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
            JOIN
          </p>
        </button>
      </div> */}

      {/* <div className="flex items-center gap-x-5 opacity-0">
        <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] hover:text-[#F2B347] hover:dark:text-[#F2B347] font-SatoshiBold tracking-[0.05em] uppercase transition-colors duration-100 cursor-pointer">
          Print
        </p>

        <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] hover:text-[#F2B347] hover:dark:text-[#F2B347] font-SatoshiBold tracking-[0.05em] uppercase transition-colors duration-100 cursor-pointer">
          Privacy
        </p>
        
        <p className="text-[10px] text-[#F2B347] font-SatoshiBold tracking-[0.05em] uppercase">
          ~
        </p>
      </div> */}

    </div>
  )
};

const Content = () =>{

  const [showGuide, setShowGuide] = useState<boolean>(false);

  return(
    <>
      <div className="w-full flex flex-col gap-y-5 mt-14">
        {/* Email */}
        <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414175] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Mail</p>

          <input 
            type="text" 
            className={`
              w-full mt-3
              bg-transparent
              text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]
              placeholder:text-[#41414140] placeholder:font-[500] placeholder:text-[11px]
              focus:border-none focus:outline-none focus:shadow-none leading-none
            `}
            placeholder="---"
          />
        </div>

        {/* Pin */}
        <div onFocus={() => setShowGuide(true)} onBlur={() => setShowGuide(false)} className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start relative">
          <p className="text-[9px] tracking-[0.05em] text-[#41414175] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Pin</p>

          <input 
            type="text" 
            className={`
              w-full mt-3
              bg-transparent
              text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]
              placeholder:text-[#41414140] placeholder:font-[500] placeholder:text-[11px]
              focus:border-none focus:outline-none focus:shadow-none leading-none
            `}
            placeholder="---"
          />
          {/* <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p> */}

          {/* Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 right-3.5">
            <IoFlashSharp className="w-[18px] h-[18px] text-[#F2B347]" />
          </div>

          {/* Guide */}
          {showGuide && (
            <div className="absolute left-[105%] top-0 w-[200px] h-[200px] bg-[#FAF9F6] rounded-xl">

            </div>
          )}
        </div>
      </div>


      {/* Continue Button */}
      <div className="flex items-center gap-x-2.5 mt-[30px]">
        <div className="min-w-[42.5px] min-h-[42.5px] rounded-full bg-[#F1EEE9] myFlex">
          <IoEllipsisHorizontal className="w-[14.5px] h-[14.5px] text-[#414141]" />
        </div>
        <button className="w-full h-[42.5px] bg-[#414141] rounded-full myFlex">
          <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
            CONTINUE
          </p>
        </button>
      </div>
    </>
  )
};

const Intro = () =>{
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[15px]">
          AUTH •
        </p>
      
        <div className="flex gap-x-2.5">
          <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] relative">
            
          </div>
        </div>
      </div>

      <p className="text-[40px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none mt-10">
        Please Sign In.
      </p>

      {/* <p className="w-[95%] mt-5 text-[12.5px] text-[#41414190] dark:text-[#E9E6DE90] inconsolata font-[500] px-[1.5px]">
        Your <span className="font-bold text-[#F2B347]">Dashboard</span> — Please <span className="font-bold">Sign In</span> to Access Your A. Dashboard and Track Your Earnings.
      </p> */}
    </>
  )
};