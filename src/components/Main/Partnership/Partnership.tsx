import AnimatedText from "@/components/AnimatedText/AnimatedText";

const Partnership = () => {
  return ( 
    <div className="w-full mt-[190px] px-[120px]">
      
      <AnimatedText id="PARTNERSHIP_TAG" text="PARTNERSHIP •" custom="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold" type={4}/>
      
      <div className="w-full flex items-end justify-between mt-5">
        <div className="flex flex-col">
          <AnimatedText id='PARTNERSHIP_1' text="Your Journey" custom="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] z-[10]" type={1}/>
          <AnimatedText id='PARTNERSHIP_1' text="— Using Skool." custom="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1] pb-[6px] z-[5]" type={1}/>
        </div>

        <button className="w-[100px] h-[36px] rounded-full myFlex bg-[#F5F3ED] dark:bg-[#212121] hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300 group">
          <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
            ABOUT
          </p>
        </button>
      </div>

      <div className="w-full h-[350px] rounded-[24px] bg-[#1D1D1D50] dark:bg-[#21212160] mt-[50px]">

      </div>
    </div>
   );
}
 
export default Partnership;