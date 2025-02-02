/* eslint-disable @next/next/no-img-element */
'use client'

import Breakdown from "@/components/Academy/Workshop/Breakdown";
import { workshopContent, workshopLeft, workshopRight } from "@/components/Academy/Workshop/data";
import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { data } from "@/components/Main/Featured/Featured.data";
import FeaturedCard from "@/components/Main/Featured/FeaturedCard";
import { useDarkMode } from "@/utils/zustand/zustand";
import { IoBookmark, IoChatbox, IoChatbubbleEllipses, IoCheckmarkDoneCircle, IoEllipsisHorizontalCircleSharp, IoLanguage, IoLogoDiscord, IoRibbon, IoSchool, IoTime } from "react-icons/io5";

const specificationIcons = [
  {
    icon: <IoLanguage className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoEllipsisHorizontalCircleSharp className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoBookmark className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoRibbon className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoSchool className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300" />
  },
  {
    icon: <IoTime className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoChatbubbleEllipses className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px] group-hover:text-[#F2B347] transition-colors duration-300"/>
  },
  {
    icon: <IoLogoDiscord className="text-[#F9F8F5] dark:text-[#111111] w-[18px] h-[18px]"/>
  }
];

const Workshop = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  return ( 
    <div className="w-full min-h-screen dark:bg-[#141414]">
      {/* Hero */}
      <div className="w-full flex items-end flex-col relative">
        {/* Top */}
        <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] relative overflow-visible bg-[#F2F0EA99] dark:bg-[#141414]">
          <div className="w-full flex items-start justify-start z-10">
            <div className="w-[23.5%] flex flex-col">
              <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[20px]">
                WORKSHOP •
              </p>
              <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
                - THE YOUTH CULTURE -
              </p>
            </div>

            <div className="w-[76.5%] flex flex-col relative">
              <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
                Instagram <span className="text-[#d7d4cd] dark:text-[#5A5A5A15]">Workshop</span>       
              </p>

              <div className="flex items-center mt-6 px-[4px]">
                {/* Pictures */}
                <div className="flex">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip relative">
                    {/* <img src="https://framerusercontent.com/images/oqnWhZ7MZuoMdPnLGWQbPbnO4mU.jpg" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative">
                    {/* <img src="https://framerusercontent.com/images/n5AZB9aS8FtjPnBeOTyFeMPZh4.jpg?scale-down-to=1024" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative">
                    {/* <img src="https://framerusercontent.com/images/hNYpONdTHUdVFWucfc8ROOWVcs.jpg?scale-down-to=512" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full bg-[#e5e2da80] dark:bg-[#25252599] ring-[2px] ring-[#F5F3EF] overflow-clip -ml-[6%] relative">
                    {/* <img src="https://framerusercontent.com/images/5Py4y25huRpFsE41JxVkT0QQPg.jpg" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
                  </div>
                </div>

                {/* Trusted By */}
                <div className="flex flex-col gap-y-2.5 -ml-[1.25%]">
                  <div className="flex items-center gap-x-0.5">
                    <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px]"/>
                    <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px]"/>
                    <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px]"/>
                    <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px]"/>
                    <img src="https://framerusercontent.com/images/kmZ93HmpNj9XDkKfjmeuYEkHg.svg" alt="_" className="w-[11px] h-[11px]"/>
                    {/* <p className="text-[#212121] text-[10px] font-HovesDemi leading-none">5.0</p> */}
                  </div>
                  <p className="text-[9.25px] tracking-[0.05em] text-[#78777790] dark:text-[#414141] font-SatoshiBold leading-none uppercase px-[1px]">
                    Joined by <span className="text-[#414141] dark:text-[#E9E6DE]">23K People.</span>
                  </p>
                  {/* <p className="text-[9px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase">
                    ~ Joined by <span className="text-[#414141] dark:text-[#E9E6DE]">5K People.</span>
                  </p> */}
                </div>
              </div>
              

              {/* Tag */}
              <div className="absolute top-[20px] right-0 flex items-center gap-x-5">
                <div className="px-[8px] py-[4px] h-[20px] bg-[#FFE0B9] dark:bg-[#445406] myFlex rounded-full">
                  <p className="text-[9px] font-SatoshiBold text-[#C67508] dark:text-[#E7F8AC]">POPULAR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cut */}
          {/* <div className="absolute -bottom-[50px] left-0 w-full h-[100px] -rotate-[180deg]">
            <div className="w-full h-full relative">
              <img 
                src={
                  isDarkMode
                    ? "/images/Workshop/workshop-cut-14.svg" // Dark mode image
                    : "/images/Workshop/workshop-cut-beige.svg"     // Light mode image
                }
                alt="_" 
                className="absolute w-full h-full object-cover"  
              />
            </div>
          </div> */}

          {/* Cut */}
          <div className="absolute -bottom-[40px] left-0 w-full h-[100px]">
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
        </div>

        {/* Bottom */}
        <div className="w-full h-[55vh] flex items-center gap-x-[75px] pl-[23.5%] bg-[#F2F0EA20] dark:bg-[#111111] px-[60px] relative">
          {/* Left */}
          <div className="w-1/2 flex flex-col px-[4px] -mt-[38px]">
            <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none px-[1.5px] uppercase">
              INFO •
            </p>
            
            <p className="h-[50px] text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-[1.5px] uppercase opacity-0">
              - INFORMATION TEXT -
            </p>
            {/* <p className="text-[10px] tracking-[0em] text-[#787777] leading-[1.6] mt-3.5 w-[65%] px-[1.2px] uppercase opacity-0">
              The Complete Guide to Building a Pro Website using Wix Studio.
            </p> */}
            


            <div className="flex items-center gap-x-3.5 mt-9">
              <button className="w-[110px] h-[40px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full">
                <p className="text-[10px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  JOIN
                </p>
              </button>
              <button className="w-[100px] h-[40px] bg-gradient-to-b from-[#F2F0EA99] to-transparent dark:from-[#141414] rounded-full group">
                <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  REEL
                </p>
              </button>
            </div>
          </div>


          {/* Right */}
          <div className="w-1/2 grid grid-cols-2 -mt-[38px]">
            <div className="col-span-1 flex items-start justify-start flex-col">
              {workshopLeft.map((item, index) => (
                <div key={`WORKSHOP_SPEC_LEFT_${index}`} className="w-full flex items-center justify-start gap-x-2.5 py-2.5 group cursor-pointer">
                  {specificationIcons[item.icon - 1].icon}
                  <p className="text-[10px] text-[#78777780] dark:text-[#414141] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#787777] group-hover:dark:text-[#E9E6DE] transition-colors duration-300">{item.name}</p>
                </div>
              ))}
            </div>

            <div className="col-span-1 flex items-start justify-start flex-col">
              {workshopRight.map((item, index) => (
                <div key={`WORKSHOP_SPEC_RIGHT_${index}`} className="w-full flex items-center justify-start gap-x-2.5 py-2.5 group cursor-pointer">
                  {specificationIcons[item.icon - 1].icon}
                  <p className="text-[10px] text-[#78777780] dark:text-[#414141] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#787777] group-hover:dark:text-[#E9E6DE] transition-colors duration-300">{item.name}</p>
                </div>
              ))}
            </div>
          </div>


          <div className="absolute top-[30%] -translate-y-[30%] -left-[5%] w-[23.5%] h-[53.5%] -rotate-[180deg] scale-x-[-1]">
            <div className="w-full h-full relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#414141] dark:fill-[#E9E6DE] overflow-visible">
                <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
              </svg>

              <div className="absolute bottom-[10%] right-[15%] w-[50%] z-10 -rotate-[180deg]">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="fill-[#F2B347]">
                  <path d="M318 164a1478 1478 0 00-10 282l-3 1c-91-7-192 55-205 83-1 3-2 5 0 6 1 1 20 14 154-50a3609 3609 0 0155-35l2 2c63 120 127 214 149 237-9-20-41-77-124-202a4 4 0 015-6c118 74 200 109 247 126 54 19 95 24 110 14 4-3 6-7 5-12l-1-1c-9-37-126-113-353-168-3-1-4-5-2-7 172-163 234-290 222-324-2-4-5-7-10-7-18-1-51 24-88 67-33 38-86 109-151 232a4 4 0 01-7-2c8-149 7-215 5-236M91 537c0-2 0-6 2-10 13-29 113-93 208-87-6-139 3-283 15-289h4c3 1 6 3 7 62 0 41-2 100-6 171 61-114 112-182 144-218 39-46 74-71 94-70 8 1 14 5 16 12 8 21-8 65-41 118-27 45-81 117-177 210 130 32 212 68 258 92 55 30 91 60 95 82 1 8-2 14-8 19-17 11-60 6-117-13-46-16-123-49-234-118 40 60 71 110 92 146 29 51 27 55 26 58l-4 2c-16 0-103-138-159-244a3676 3676 0 00-144 100c-31 22-31 22-34 21l-2-3 2-4a1065 1065 0 0189-62c-51 22-109 43-123 30l-3-5"></path>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="fill-[#F2B347]">
                  <path d="M376 383l21-7c257-21 316-18 329-17-29 11-215 31-350 24m101-216h4c15 5 20 36 12 75-16 77-59 114-100 129l-50 4c63-154 109-208 134-208M341 368v-1l-3-2c-2 0-3 1-3 3v4c-38-72 12-195 47-234 6-7 12-11 15-11l3 1c2 1 23 23-59 240m-10 18h2l-1 1-1-1m-23 288l-1-1c-15-13-21-139 28-273 0 214-19 271-27 274M129 474c-37-11-61-31-58-49 5-23 53-43 169-43a1102 1102 0 0184 3l5 7c-49 96-147 97-200 82m145-142v-5l1-1c5 0 21 9 54 51h-6c-28-7-46-31-49-45m124 332c-3 4-6 5-9 4-15-4-43-65-48-259 75 114 76 228 57 255m336-307c-1-3-4-7-96-3-56 3-131 8-225 16 12-7 23-16 33-26 25-26 44-63 52-101 9-43 3-76-16-81-26-8-65 40-110 133 35-101 46-163 30-173-4-2-12-2-25 12-17 19-42 63-54 115-13 51-9 87 0 111-24-28-42-42-51-38-2 1-5 4-4 12 3 13 17 32 38 43a29934 29934 0 00-233-16v3a7232 7232 0 00129 13c-82 4-131 20-136 47-3 21 22 43 62 55 38 11 80 10 116-3 33-12 60-33 80-63-42 127-38 247-22 264l5 2 3-1c15-6 25-77 29-190 9 127 30 180 48 186 4 1 10 1 16-7 19-29 19-151-62-269l-1-9a3 3 0 003-3c138 14 382-11 391-25v-4"></path>
                </svg> */}
              </div>
            </div>
          </div>
        </div>

        {/* Cut */}
        <div className="absolute -bottom-[35px] left-0 w-full h-[100px]">
          <div className="w-full h-full relative">
            <img 
              src={
                isDarkMode
                  ? "/images/Workshop/workshop-cut-14.svg" // Dark mode image
                  : "/images/Workshop/workshop-cut-beige.svg"     // Light mode image
              }
              alt="_" 
              className="absolute w-full h-full object-cover"  
            />
          </div>
        </div>
      </div>


      <div className="w-full bg-gradient-to-b from-[#F2F0EA99] via-transparent to-transparent dark:from-[#141414]">
        {/* Breakdown */}
        <div className="w-full flex flex-col px-[120px] pt-[85px]">
          <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
            BREAKDOWN •
          </p>

          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-5">
            What You'll Learn 
            <br />
            on This Workshop.
          </p>

          <div className="w-full mt-[85px] flex flex-col gap-y-1">
            {/* Heads */}
            {workshopContent.map((item, index) =>(
              <Breakdown key={`WORKSHOP_BREAKDOWN_${index}`} item={item} index={index}/>
            ))}
          </div>
        </div>
        
        {/* About Your Expert */}
        <div className="w-full px-[120px] mt-[175px] myFlex">
          <div className="w-full h-[500px] rounded-[24px] bg-[#F2F0EA99] dark:bg-[#171717] p-[60px] flex flex-col relative overflow-hidden">
            <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none">
              EXPERT •
            </p>
            {/* Container (Left - Middle - Right) */}
            <div className="flex items-start justify-between mt-5">
              {/* Left */}
              <div className="w-[30%] flex flex-col">
                <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
                  About Your
                  <br />
                  — Expert.
                </p>

                {/* <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none uppercase mt-7">
                  - CONBALU
                </p> */}
              </div>

              {/* Middle */}
              <div className="w-[30%] flex flex-col">
                <p className="text-[10px] tracking-[0.05em] text-[#787777] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase mt-[20px] px-[0.25px]">
                  Lucia Font
                </p>


                <p className="w-full h-[190px]"></p>
                {/* <p className="w-[90%] mt-6 mb-12 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[0.25px] leading-[1.7]">
                  Lucia is a Creative Director, Interactive Designer & Development currently based in Amsterdam. As a multidisciplinary freelancer, he pairs a broad range of creative leadership experience in art direction, UI/UX design, front-end development, and motion design to help companies and agencies around the world achieve their goals.
                </p> */}

                <div className="flex gap-x-3.5">
                  <button className="w-[110px] h-[40px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full">
                    <p className="text-[10px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                      JOIN
                    </p>
                  </button>
                  <button className="w-[100px] h-[40px] bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-[#171717] rounded-full group">
                    <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                      SALES
                    </p>
                  </button>
                </div>
               
                <p className="w-[90%] mt-10 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.25px]">
                  • Curious About <span className="font-bold">Lucia?</span> — Check Her <span className="text-[#F2B347] font-bold">Instagram.</span>
                </p>
              </div>

              {/* Right */}
              <div className="w-[30%]">
                <div className="w-full aspect-[1/1.1] bg-[#1D1D1D50] dark:bg-[#21212175] rounded-2xl relative">
                  {/* <img src="https://ahottiedump-noise-secondary.vercel.app/images/testimony1.png" alt="_" className="absolute inset-0 object-cover w-full h-full"/> */}
                </div>
              </div>
            </div>

            {/* Shape */}
            <div className="absolute -bottom-[20%] left-0 w-[30%] h-[60%] ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
                <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Payment */}
        <div className="w-full px-[120px] mt-[175px] flex flex-col">
          <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
            PRICING •
          </p>

          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-5">
            Join This
            <br />
            — Workshop.
          </p>

          <div className="w-full grid grid-cols-2 gap-[100px] mt-[100px]">
            {/* Full */}
            <div className="col-span-1 flex flex-col">
              <div className="pl-8">
                <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  PAY IN FULL.
                </p>
              </div>
              <div className="min-h-[100px] border-l-[6px] border-[#F2B347] pl-8 py-1.5 mt-[50px] flex items-start justify-center flex-col gap-y-5 relative">
                <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">TOTAL</p>

                <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative overflow-visible">
                  ~ 1499
                  <span className="absolute bottom-[4px] -right-9 text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">EUR</span>
                </p>

                <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase mt-2.5">FULL TUITION</p>
                
                <div className="absolute top-1/2 -translate-y-1/2 right-16">
                  <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#414141] hover:dark:bg-[#E9E6DE] transition-colors duration-300">
                    <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] group-hover:dark:text-[#111111] transition-colors duration-300">
                      PICK
                    </p>
                  </button>
                </div>
              </div>
            </div>

            {/* Plans */}
            <div className="col-span-1 flex flex-col">
              <div className="pl-8">
                <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  PAYMENT PLAN.
                </p>
              </div>
              <div className="min-h-[100px] border-l-[6px] border-[#F2B347] pl-8 py-1.5 mt-[50px] flex items-start justify-center flex-col gap-y-5 relative">
                <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">PARTIAL</p>

                <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative overflow-visible">
                  ~ 375
                  <span className="absolute bottom-[4px] -right-9 text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">EUR</span>
                </p>

                <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase mt-2.5">PER MONTH</p>

                <div className="absolute top-1/2 -translate-y-1/2 right-16">
                  <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#414141] hover:dark:bg-[#E9E6DE] transition-colors duration-300">
                    <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] group-hover:dark:text-[#111111] transition-colors duration-300">
                      PICK
                    </p>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    

      {/* <div className="w-full myFlex mt-[190px] px-[120px]">
        <p className="text-[15vw] text-[#d7d4cd50] font-Basebloom leading-none whitespace-nowrap">Canva</p>
      </div> */}

      
      
      {/* Related */}
      <div className="w-full px-[120px] mt-[190px] flex flex-col">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
          RELATED •
        </p>

        <div className="w-full flex items-end justify-between">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-5">
            Find Other
            <br />
            Like This One.
          </p>

          <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              CHECK
            </p>
          </button>
        </div>

        <div className="w-full flex gap-x-5 mt-[50px]">
          {data.map((_, index) =>{
            if(index < 3){
              return (
                <FeaturedCard key={`FEATURED_COURSE_${index}`} index={index} data={_}/>
              )
            }
          })}
        </div>
      </div>

      
      <Labs/>

      <Footer/>
    </div>
   );
}
 
export default Workshop;