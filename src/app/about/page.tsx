'use client'

import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { useDarkMode } from "@/utils/zustand/zustand";

const About = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      
      {/* Top */}
      <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] bg-[#F2F0EA99] dark:bg-[#141414] relative">
        <div className="w-full flex items-start justify-start">
          <div className="w-[23.5%]">
            <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[15px]">
              ABOUT •
            </p>
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
              - THE YOUTH CULTURE -
            </p>
          </div>
          <div className="w-[76.5%] flex flex-col relative">
            <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
              ~ About.
            </p>

            {/* Editorial & Grid */}
            <div className="absolute top-[15px] right-0 flex items-center gap-x-5">
              {/* E */}
              {/* <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] font-SatoshiBold leading-none uppercase">
                <span className="text-[#FFA300]">#1</span>{'\u00A0'}{'\u00A0'}<span className="text-[#414141]">Online</span> <span className="text-[#787777]">Social Media</span> Academy.
              </p> */}
              
              {/* <p className="text-[10px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase">[{"\u00A0"}{"\u00A0"}{"\u00A0"}]{"\u00A0"}{"\u00A0"}GRID</p> */}
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>


      <div className="w-full mt-[80px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
          ABOUT •
        </p>

        <div className="w-full flex items-end justify-between mt-5">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
            Mmm... Like a
            <br />
            Social Media School.
            
          </p>

          <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              REEL
            </p>
          </button>
        </div>

        <div className="w-full aspect-video bg-[#d7d4cd35] dark:bg-[#21212160] rounded-[24px] mt-[50px] relative">
          <div className="absolute -top-[30px] -left-[5px] w-[50%] h-[65px]">
            <div className="w-full h-full relative">
              <img 
                src={
                  isDarkMode
                    ? "/images/Workshop/workshop-cut-11.svg" // Dark mode image
                    : "/images/Workshop/workshop-cut.svg"     // Light mode image
                }
                alt="_" 
                className="absolute w-full h-full object-cover rotate-[178deg]"
              />
            </div>
          </div>

          
          {/* <div className="absolute -bottom-[30px] -right-[5px] w-[50%] h-[65px] -rotate-[180deg]">
            <div className="w-full h-full relative">
              <img 
                src={
                  isDarkMode
                    ? "/images/Workshop/workshop-cut-11.svg" // Dark mode image
                    : "/images/Workshop/workshop-cut.svg"     // Light mode image
                }
                alt="_" 
                className="absolute w-full h-full object-cover rotate-[178deg]"
              />
            </div>
          </div>
         */}
          
        </div>

      </div>


      {/* <Team/> */}
      
      {/* Partnership */}
      {/* <div className="w-full mt-[175px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none">
          ~ PARTNERSHIP       
        </p>
        
        <div className="w-full flex items-end justify-between">
          <p className="text-[#414141] text-[40px] font-SatoshiBlack leading-[1.2] mt-5 pb-[5px]">
            Your Journey
            <br />
            — Using Skool.
          </p>

          <button className="w-[100px] h-[36px] rounded-full myFlex bg-[#F5F3ED] hover:bg-[#F2B347] transition-colors duration-300 group">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              ABOUT
            </p>
          </button>
        </div>

        <div className="w-full h-[350px] rounded-[24px] bg-[#1D1D1D50] mt-[50px]">

        </div>
      </div> */}

      {/* <div className="w-full h-screen"></div> */}  

      <Labs/>

      <Footer/>

    </div>
   );
}
 
export default About;