import AnimatedText from "@/components/AnimatedText/AnimatedText";

const Features = () => {
  return ( 
    <div className="w-full min-h-screen px-[120px]">
      
      <AnimatedText id="FEATURES_TAG" text="FEATURES •" custom="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold" type={4}/>

      <div className="w-full flex items-end justify-between mt-5">
        <div className="flex flex-col">
          <AnimatedText id='FEATURES_1' text="Why 33K+ People" custom="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] z-[10]" type={1}/>
          <AnimatedText id='FEATURES_1' text="— Use AHD." custom="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1] pb-[6px] z-[5]" type={1}/>
        </div>
      </div>

      <div className="w-full aspect-video bg-[#1D1D1D50] dark:bg-[#21212160] rounded-[24px] mt-[50px]">

      </div>

    </div>
   );
}
 
export default Features;