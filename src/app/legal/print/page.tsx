'use client'

import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { printTable } from "@/components/Legal/data";
import { useDarkMode } from "@/utils/zustand/zustand";

const Print = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      
      {/* Top */}
      <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] bg-[#F2F0EA99] dark:bg-[#141414] relative">
        <div className="w-full flex items-start justify-start">
          <div className="w-[23.5%]">
            <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none mt-[15px]">
              LEGAL •
            </p>
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
              # THE YOUTH CULTURE.
            </p>
          </div>
          <div className="w-[76.5%] flex flex-col relative">
            <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
              ~ Print.
            </p>

            {/* Editorial & Grid */}
            <div className="absolute top-[15px] right-0 flex items-center gap-x-5">
              {/* E */}
              <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none uppercase">
                LAST UPDATE{'\u00A0'}{'\u00A0'}—{'\u00A0'}{'\u00A0'}<span className="text-[#FFA300]">SEP 30, 2025</span>.
              </p>
              
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
      </div>


      <div className="w-full mt-[80px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
          ~ PRINT
        </p>

        <div className="w-full flex items-end justify-between mt-5">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
            What You'll Learn 
            <br />
            on This Workshop.
          </p>

          <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              REPORT
            </p>
          </button>
        </div>

        <div className="w-full min-h-[300vh] bg-gradient-to-b from-[#F2F0EA99] dark:from-[#171717] via-[#F2F0EA50] dark:via-[#171717] to-transparent rounded-[24px] mt-[50px] p-6 relative flex items-start justify-start">
          {/* Panel */}
          <div 
            data-lenis-prevent 
            className="sticky top-[24px] left-0 min-w-[250px] h-[calc(100vh-48px)] bg-[#232323] dark:bg-[#111111] dark:border-[0px] dark:border-[#212121] rounded-2xl p-[24px] pr-[50px] overflow-y-auto no-scrollbar"
          >
            <p className="text-[10px] text-[#FFA300] tracking-[0.05em] font-SatoshiBold leading-none uppercase">~ Print</p>
            
            <p className="text-[19px] text-[#fffef3f9] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.2] mt-3">You'll Find This.</p>

            <button className="w-full h-[36px] rounded-lg bg-[#FFFEF3] dark:bg-[#E9E6DE] mt-7">

            </button>

            <div className="w-full mt-8 flex flex-col gap-y-1.5">
              {printTable.map((item, index) =>(
                <div key={`PRINT_TABLE_SECTION_${index}`} className="px-3.5 py-3.5 rounded-lg hover:bg-[#414141] hover:dark:bg-[#41414175] group">
                  <p className={`text-[10px] tracking-[0.05em] font-SatoshiBold leading-none uppercase ${index === 0 ? "text-[#FFFEF3f9] dark:text-[#E9E6DE]" : "text-[#C0BFB2] dark:text-[#E9E6DE99]"}`}>{item.section}{index === 0 && `${"\u00A0"}${"\u00A0"}•`}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[calc(100%-250px)] flex items-start justify-start flex-col py-[24px] px-[100px]">
            <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
              ABOUT{"\u00A0"}{"\u00A0"}•
            </p>
            
            <p className="text-[25px] text-[#414141] dark:text-[#E9E6DE] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.2] mt-4">
              ~ Print.
            </p>
            
            <div className="w-full h-[400px] bg-[#d7d4cd25] dark:bg-[#21212160] rounded-[24px] mt-7"></div>
            {/* <p className="text-[12.5px] text-[#787777] syne-mono leading-[1.7] mt-7">
              A Hottie Dump is dedicated to transparency, ensuring you understand our practices fully. In this Privacy Policy, we define critical terms to facilitate a clear understanding of how your data is handled. “You” or “your” refers to any user who accesses or interacts with our services, which include viewing content, purchasing subscriptions or merchandise, or engaging with courses. 
              <br /><br />
              “Personal Information” covers data that could identify you, such as your name, email, contact details, payment methods, or behavioral data on our site. Knowing these definitions clarifies both your rights and the boundaries within which we operate, ensuring a mutual understanding and trust as you engage with A Hottie Dump.
            </p> */}
            
            <div className="w-full hidden flex-col mt-[100px] gap-y-[100px]">
              {printTable.map((item, index) =>(
                <div key={`PRINT_PAGE_${item.section}`} className="w-full flex flex-col">
                  <div className="w-fit p-[14px] px-7 bg-[#414141] rounded-full flex items-center justify-start">
                    <p className="text-[10px] tracking-[0.05em] text-[#C0BFB2] font-SatoshiBold leading-none uppercase">
                      ~{"\u00A0"}{"\u00A0"}{item.section}{"\u00A0"}{"\u00A0"}~
                    </p>
                  </div>
                  
                  {/* <div className="w-full h-[300px] bg-[#d7d4cd25] rounded-[24px] mt-7"></div> */}
                  <p className="text-[12.5px] text-[#787777] syne-mono leading-[1.7] mt-7">
                    A Hottie Dump is dedicated to transparency, ensuring you understand our practices fully. In this Privacy Policy, we define critical terms to facilitate a clear understanding of how your data is handled. “You” or “your” refers to any user who accesses or interacts with our services, which include viewing content, purchasing subscriptions or merchandise, or engaging with courses. 
                    <br /><br />
                    “Personal Information” covers data that could identify you, such as your name, email, contact details, payment methods, or behavioral data on our site. Knowing these definitions clarifies both your rights and the boundaries within which we operate, ensuring a mutual understanding and trust as you engage with A Hottie Dump.
                  </p>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>


      

      <Labs/>

      <Footer/>

    </div>
   );
}
 
export default Print;