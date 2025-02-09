'use client'

import Footer from "@/components/Footer/Footer";
import Featured from "@/components/Main/Featured/Featured";
import Labs from "@/components/Labs/Labs";
import Tags from "@/components/Tags/Tags";
import Alumni from "@/components/Main/Alumni/Alumni";
import Hero from "@/components/Main/Hero/Hero";
import Features from "@/components/Main/Features/Features";
import Partnership from "@/components/Main/Partnership/Partnership";

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
      <Features/>

      {/* Partnership */}
      <Partnership/>

      
      {/* Marquee */}
      {/* <div className="w-full myFlex relative mt-[210px]">
        <p className="w-full text-[128px] font-SatoshiBlack text-[#d7d4cd30] whitespace-nowrap myFlex leading-none">
          SOCIAL MEDIA IS BEAUTIFUL ~ SOCIAL MEDIA IS BEAUTIFUL ~ SOCIAL MEDIA IS BEAUTIFUL
        </p>
      </div>   */}


      <Labs/>

      <Footer/>
    </div>
   );
}
 
export default Main;