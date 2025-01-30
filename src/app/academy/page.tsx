'use client'

import AIButton from "@/components/AI/AIButton";
import AIChat from "@/components/AI/AIChat";
import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { data } from "@/components/Main/Featured/Featured.data";
import FeaturedCard from "@/components/Main/Featured/FeaturedCard";
import { useDarkMode } from "@/utils/zustand/zustand";

const Academy = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  

  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      {/* Top */}
      <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] bg-[#F2F0EA99] dark:bg-[#141414] relative">
        <div className="w-full flex items-start justify-start">
          <div className="w-[23.5%]">
            <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none mt-[15px]">
              ACADEMY •
            </p>
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
              - THE YOUTH CULTURE -
            </p>
          </div>
          <div className="w-[76.5%] flex flex-col relative">
            <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
              Build Your Skills.
            </p>

            <div className="flex items-center mt-6 px-[4px]">
              {/* Pictures */}
              <div className="flex">
                <div className="w-[36px] h-[36px] rounded-full bg-[#1D1D1D50] dark:bg-[#21212199]"></div>
                <div className="w-[36px] h-[36px] rounded-full bg-[#1D1D1D50] dark:bg-[#21212199] -ml-[6%]"></div>
                <div className="w-[36px] h-[36px] rounded-full bg-[#1D1D1D50] dark:bg-[#21212199] -ml-[6%]"></div>
                <div className="w-[36px] h-[36px] rounded-full bg-[#1D1D1D50] dark:bg-[#21212199] -ml-[6%]"></div>
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
                <p className="text-[9.25px] tracking-[0.05em] text-[#78777780] dark:text-[#414141] font-SatoshiBold leading-none uppercase">
                  ~ Joined by <span className="text-[#414141] dark:text-[#E9E6DE]">23K People.</span>
                </p>
              </div>
            </div>

            {/* AI Button */}
            <div className="absolute top-[15px] right-0 flex items-center gap-x-5 z-10">
           
              <AIButton displayText={true}/>

              {/* <AIChat/> */}
            </div>
          </div>
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
        <div className="absolute top-[36.5%] -translate-y-[36.5%] right-0 w-[25%] h-[60%] -rotate-[180deg]">
          <div className="w-full h-full relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
              <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
            </svg>

            <div className="absolute bottom-[25%] right-[15%] w-[45%] z-10 -rotate-[180deg]">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="fill-[#F2B347]">
                <path d="M318 164a1478 1478 0 00-10 282l-3 1c-91-7-192 55-205 83-1 3-2 5 0 6 1 1 20 14 154-50a3609 3609 0 0155-35l2 2c63 120 127 214 149 237-9-20-41-77-124-202a4 4 0 015-6c118 74 200 109 247 126 54 19 95 24 110 14 4-3 6-7 5-12l-1-1c-9-37-126-113-353-168-3-1-4-5-2-7 172-163 234-290 222-324-2-4-5-7-10-7-18-1-51 24-88 67-33 38-86 109-151 232a4 4 0 01-7-2c8-149 7-215 5-236M91 537c0-2 0-6 2-10 13-29 113-93 208-87-6-139 3-283 15-289h4c3 1 6 3 7 62 0 41-2 100-6 171 61-114 112-182 144-218 39-46 74-71 94-70 8 1 14 5 16 12 8 21-8 65-41 118-27 45-81 117-177 210 130 32 212 68 258 92 55 30 91 60 95 82 1 8-2 14-8 19-17 11-60 6-117-13-46-16-123-49-234-118 40 60 71 110 92 146 29 51 27 55 26 58l-4 2c-16 0-103-138-159-244a3676 3676 0 00-144 100c-31 22-31 22-34 21l-2-3 2-4a1065 1065 0 0189-62c-51 22-109 43-123 30l-3-5"></path>
              </svg> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="fill-[#C67508] dark:fill-[#C67508]">
                <path d="M376 383l21-7c257-21 316-18 329-17-29 11-215 31-350 24m101-216h4c15 5 20 36 12 75-16 77-59 114-100 129l-50 4c63-154 109-208 134-208M341 368v-1l-3-2c-2 0-3 1-3 3v4c-38-72 12-195 47-234 6-7 12-11 15-11l3 1c2 1 23 23-59 240m-10 18h2l-1 1-1-1m-23 288l-1-1c-15-13-21-139 28-273 0 214-19 271-27 274M129 474c-37-11-61-31-58-49 5-23 53-43 169-43a1102 1102 0 0184 3l5 7c-49 96-147 97-200 82m145-142v-5l1-1c5 0 21 9 54 51h-6c-28-7-46-31-49-45m124 332c-3 4-6 5-9 4-15-4-43-65-48-259 75 114 76 228 57 255m336-307c-1-3-4-7-96-3-56 3-131 8-225 16 12-7 23-16 33-26 25-26 44-63 52-101 9-43 3-76-16-81-26-8-65 40-110 133 35-101 46-163 30-173-4-2-12-2-25 12-17 19-42 63-54 115-13 51-9 87 0 111-24-28-42-42-51-38-2 1-5 4-4 12 3 13 17 32 38 43a29934 29934 0 00-233-16v3a7232 7232 0 00129 13c-82 4-131 20-136 47-3 21 22 43 62 55 38 11 80 10 116-3 33-12 60-33 80-63-42 127-38 247-22 264l5 2 3-1c15-6 25-77 29-190 9 127 30 180 48 186 4 1 10 1 16-7 19-29 19-151-62-269l-1-9a3 3 0 003-3c138 14 382-11 391-25v-4"></path>
              </svg>
            </div>
          </div>
        </div>
        
        {/* <div className="absolute -top-[70%] left-0 w-[35%] overflow-visible">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="fill-[#e9e6de6b] dark:fill-[#181818]">
            <path d="M240 612c504 98-474 643-183 98-760-850 944-1297 183-98z"></path>
          </svg>
        </div> */}
      </div>

      {/* <div className="w-[calc(100%-120px)] mx-auto h-[1px] bg-[#d7d4cd50] relative overflow-visible">
      </div> */}


      <div className="w-full px-[120px] pt-[80px]">
        <div className="w-full grid grid-cols-3 gap-5">
          {data.map((_, index) =>(
            <FeaturedCard key={`FEATURED_COURSE_${index}`} index={index} data={_}/>
          ))}
        </div>
      </div>

      <div className="w-full mt-[190px] px-[120px] hidden">
        <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none">
          ~ COLLABO.
        </p>
        
        <div className="w-full flex items-end justify-between">
          <p className="text-[#414141] text-[40px] font-SatoshiBlack leading-[1.2] mt-5 pb-[5px]">
            Any Workshop
            <br />
            — Idea?
          </p>

          <button className="w-[100px] h-[36px] rounded-full myFlex bg-[#F5F3ED] hover:bg-[#F2B347] transition-colors duration-300 group">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              YES
            </p>
          </button>
        </div>

        <div className="w-full h-[350px] rounded-[24px] bg-[#1D1D1D50] mt-[50px]">

        </div>
      </div>


      <Labs/>


      <Footer/>
    </div>
   );
}
 
export default Academy;