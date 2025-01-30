'use client'

import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Main/Featured/Featured";
import Labs from "@/components/Labs/Labs";
import Tags from "@/components/Tags/Tags";
import Alumni from "@/components/Main/Alumni/Alumni";
import { useDarkMode } from "@/utils/zustand/zustand";
import { FaStripeS } from "react-icons/fa";

const Main = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      {/* Hero */}
      <div className="w-full pb-[160px] pt-[160px] px-[60px] bg-[#F5F3EF] dark:bg-[#141414] relative">
        <div className="w-fit h-[36px] rounded-full bg-gradient-to-br from-transparent via-[#FAF9F650] to-[#FAF9F6] dark:via-[#17171750] dark:to-[#171717] mb-7 p-[4px] relative flex items-center">
          <div className="flex">
            <div className="w-[28px] h-[28px] rounded-full bg-[#635BFF] dark:bg-[#41414140] myFlex">
              <FaStripeS className="text-[#FFFFFF] w-[13px] h-[13px]"/>
              {/* <img src="https://fbl-eta.vercel.app/images/figma.svg" alt="_" className="w-[35%] h-auto"/> */}
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#212121] dark:bg-[#41414140] -ml-[6%] myFlex">
              <img src="https://cdn.brandfetch.io/id9IJJnIpA/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[50%] h-auto"/>
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#F04F23] dark:bg-[#41414140] -ml-[6%] myFlex overflow-hidden">
              <img src="https://cdn.brandfetch.io/id_r-vy7Tu/w/400/h/400/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[82.5%] h-auto"/>
            </div>
            <div className="w-[28px] h-[28px] rounded-full bg-[#212121] dark:bg-[#41414140] -ml-[6%] myFlex">
              <img src="https://cdn.brandfetch.io/idCeIE9B96/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[32.1%] h-auto"/>
            </div>
          </div>

          <p className="text-[9.25px] tracking-[0.05em] text-[#78777780] dark:text-[#5A5A5A99] font-SatoshiBold leading-none uppercase -ml-[5.8%] px-4">
            <span className="font-HovesDemi text-[9.5px]"></span>- THE YOUTH CULTURE -
          </p>
        </div>
        <p className="text-[65px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.1]">
          Mmm... Like a<br />
          Social Media School.
        </p>

        {/* <p className="w-[35%] mt-[26px] text-[14px] text-[#787777] gabarito font-[400] px-[6px]">
          Expert-Led Workshops Designed to Succeed on Social Media.
        </p> */}

        <div className="flex items-center mt-7 px-[4px]">
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
              Trusted by <span className="text-[#414141] dark:text-[#E9E6DE]">33K People.</span>
            </p>
          </div>
        </div>

        <div className="flex gap-x-3.5 mt-8 px-[4px]">
          <button className="w-[110px] h-[40px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full">
            <p className="text-[10px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
              JOIN
            </p>
          </button>
          <button className="w-[100px] h-[40px] bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-[#171717] rounded-full group">
            <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
              REEL
            </p>
          </button>
        </div>
        
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

        {/* Shape */}
        <div className="absolute top-[36.5%] -translate-y-[36.5%] right-0 w-[30%] h-[60%] -rotate-[180deg]">
          <div className="w-full h-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
              <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
            </svg>
              
            {/* <div className="absolute bottom-[40%] right-[6.5%] w-[42.5%] z-10 -rotate-[180deg]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA300" viewBox="0 0 800 800"><path d="M294 423c19 0 32 5 40 15 16 21 11 62-23 145 41-71 66-98 87-96 12 2 23 12 32 33-1-20 3-33 12-39 18-11 56 5 132 59-58-53-77-83-70-101 5-11 21-17 53-17-33-9-47-18-49-30-2-17 24-37 91-67-76 22-101 19-110 7-7-11-2-31 19-62-32 30-53 40-70 34-18-7-29-35-34-92-5 73-13 91-24 93-8 2-17-5-32-35 5 25 2 40-8 49-18 15-56 8-134-28 85 53 116 84 112 107-1 10-9 18-25 25h1zm-49 301a4 4 0 01-4-4l1-1c71-148 110-245 86-276-11-14-35-16-78-6a4 4 0 01-5-4c0-2 2-3 3-4 41-9 61-19 63-32 4-33-94-95-254-184a4 4 0 014-6c145 81 247 130 274 107 14-13 9-47-15-109a4 4 0 012-5c2-1 4 0 5 2 25 66 43 98 52 96 19-3 21-154 22-218 0-2 2-4 4-4s3 2 3 4c-1 106 2 206 33 217 21 8 58-22 120-96a4 4 0 115 5c-36 44-83 104-70 122 16 22 132-17 244-59a4 4 0 015 3l-2 4c-114 42-230 89-227 115 2 19 71 31 122 38a4 4 0 013 4c0 2-2 4-4 4-50-7-117-14-126 5-12 28 87 113 195 201a4 4 0 01-4 5C567 540 472 471 446 488c-12 8-12 35 1 86 0 2-1 4-3 4-2 1-4-1-4-3-13-53-27-78-42-80-32-3-83 88-150 227l-3 2z"></path></svg>
            </div> */}
          </div>
        </div>
      </div>

      {/* <Banner/> */}
      {/* <div className="w-full px-[60px]">
        <div className="w-full aspect-video bg-[#1D1D1D50] rounded-[24px]"></div>
      </div> */}
      
      {/* Featured */}
      <Featured/>


      {/* Team */}
      <Alumni/>
      

      {/* Tags */}
      <Tags/>
     
      {/* <div className="w-full h-screen"></div> */}
      {/* Features */}
      <div className="w-full min-h-screen px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none">
          FEATURES • 
        </p>

        <div className="w-full flex items-end justify-between mt-5">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
            Why 33K+ People
            <br />
            — Use AHD.
          </p>
        </div>

        <div className="w-full aspect-video bg-[#1D1D1D50] dark:bg-[#21212160] rounded-[24px] mt-[50px]">

        </div>

      </div>

      {/* Partnership */}
      <div className="w-full mt-[190px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none">
          PARTNERSHIP •     
        </p>
        
        <div className="w-full flex items-end justify-between">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] mt-5 pb-[5px]">
            Your Journey
            <br />
            — Using Skool.
          </p>

          <button className="w-[100px] h-[36px] rounded-full myFlex bg-[#F5F3ED] dark:bg-[#212121] hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300 group">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              ABOUT
            </p>
          </button>
        </div>

        <div className="w-full h-[350px] rounded-[24px] bg-[#1D1D1D50] dark:bg-[#21212160] mt-[50px]">

        </div>
      </div>

      
      {/* Marquee */}
      {/* <div className="w-full myFlex relative mt-[210px]">
        <p className="w-full text-[128px] font-SatoshiBlack text-[#d7d4cd30] whitespace-nowrap myFlex leading-none">
          SOCIAL MEDIA IS BEAUTIFUL ~ SOCIAL MEDIA IS BEAUTIFUL ~ SOCIAL MEDIA IS BEAUTIFUL
        </p>
      </div>   */}


      {/* Labs */}
      <Labs/>


      <Footer/>
    </div>
   );
}
 
export default Main;