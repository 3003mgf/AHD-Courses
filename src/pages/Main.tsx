'use client'

import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Main/Featured/Featured";
import Labs from "@/components/Labs/Labs";
import Tags from "@/components/Tags/Tags";
import Alumni from "@/components/Main/Alumni/Alumni";
import Hero from "@/components/Main/Hero/Hero";

const Main = () => {
  
  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      {/* Hero */}
      <Hero/>

      
      {/* Featured */}
      <Featured/>


      {/* Team */}
      <Alumni/>
      

      {/* Tags */}
      <Tags/>
     

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