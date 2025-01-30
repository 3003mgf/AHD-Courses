import { data } from "@/components/Main/Featured/Featured.data";
import FeaturedCard from "./FeaturedCard";
import { IoBookmark } from "react-icons/io5";

const Featured = () => {
  return ( 
    <div className="w-full pt-[80px] px-[120px]">
      <div className="w-full flex flex-col pb-[50px] px-0.5">

        <p className="text-[10px] tracking-[0.05em] text-[#F1B347] font-SatoshiBold leading-none">
           ACADEMY •
        </p>
        
        <div className="w-full flex items-end justify-between mt-5">
          <div className="flex flex-col">
            <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] overflow-hidden">
              Start Learning
              <br />
              — Online Today.
            </p>

            {/* <p className="text-[10px] text-[#21212150] font-SatoshiBold tracking-[0.05em] mt-6 leading-none uppercase">
              The Youth Culture.
            </p> */}
          </div>

          <div className="w-[50%] flex items-center justify-start gap-x-[200px]">
            <div className="flex items-start justify-start flex-col group">
              <p className="text-[18px] font-HovesDemi text-[#414141] dark:text-[#E9E6DE] leading-[1.2] border-l-[4px] border-[#E9E6DE] dark:border-[#414141] group-hover:border-[#F2B347] pl-[16px]">95%</p>
              <p className="syne text-[#787777] dark:text-[#E9E6DE] text-sm leading-none mt-2 pl-[20px]">- - -</p>
            </div>
            <div className="flex items-start justify-start flex-col group">
              <p className="text-[18px] font-HovesDemi text-[#414141] dark:text-[#E9E6DE] leading-[1.2] border-l-[4px] border-[#E9E6DE] dark:border-[#414141] group-hover:border-[#F2B347] pl-[16px]">88%</p>
              <p className="syne text-[#787777] dark:text-[#E9E6DE] text-sm leading-none mt-2 pl-[20px]">- - -</p>
            </div>
            <div className="flex items-start justify-start flex-col group">
              <p className="text-[18px] font-HovesDemi text-[#414141] dark:text-[#E9E6DE] leading-[1.2] border-l-[4px] border-[#E9E6DE] dark:border-[#414141] group-hover:border-[#F2B347] pl-[16px]">99%</p>
              <p className="syne text-[#787777] dark:text-[#E9E6DE] text-sm leading-none mt-2 pl-[20px]">- - -</p>
            </div>
          </div>
        </div>
        {/* <p className="text-[10px] text-[#787777] font-SatoshiBold leading-none tracking-[0.05em] uppercase pr-3">~ Train with tools used by the best.</p> */}
      </div>
  
      <div className="w-full flex gap-x-5">
        {data.map((_, index) =>{
          if(index > 2){
            return (
              <FeaturedCard key={`FEATURED_COURSE_${index}`} index={index} data={_}/>
            )
          }
        })}
      </div>


      <div className="w-full flex items-center justify-between mt-[50px]">
        <div className="flex gap-x-1.5">
          <div className="w-[36px] h-[36px] rounded-full myFlex bg-[#414141] dark:bg-[#E9E6DE] hover:bg-[#414141] transition-colors duration-300">
            {/* <svg width="15.3" height="12.3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.91109 6.24969L13.0801 6.24969L13.0801 4.74969L2.91109 4.74969L6.17764 1.53418L5.12537 0.465201L0.0109658 5.49969L5.12537 10.5342L6.17764 9.4652L2.91109 6.24969Z" fill="#FFFEF3"></path>
            </svg> */}
          </div>
          <div className="w-[36px] h-[36px] rounded-full myFlex bg-[#414141] dark:bg-[#E9E6DE] hover:bg-[#414141] transition-colors duration-300">
            {/* <svg width="15.3" height="12.3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[180deg]">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.91109 6.24969L13.0801 6.24969L13.0801 4.74969L2.91109 4.74969L6.17764 1.53418L5.12537 0.465201L0.0109658 5.49969L5.12537 10.5342L6.17764 9.4652L2.91109 6.24969Z" fill="#FFFEF3"></path>
            </svg> */}
          </div>
        </div>

        <button className="w-[100px] h-[36px] rounded-full myFlex bg-[#F5F3ED] dark:bg-[#171717] hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300 group">
          <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
            CHECK
          </p>
        </button>
      </div>

    </div>
   );
}
 
export default Featured;