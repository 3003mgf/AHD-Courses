import { data } from "@/components/Main/Team/Team.data";
import TeamCard from "./TeamCard";

const Team = () => {
  return ( 
    <div className="w-full mt-[175px] px-[120px]">
      {/* Text */}
      <div className="w-full flex">
        <div className="w-[70%] flex items-start justify-start flex-col">
          <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none">~ EXPERTS</p>
          <p className="text-[250px] text-[#414141] font-SatoshiBlack leading-none overflow-visible relative">
            24
            <span className="absolute bottom-[29px] -right-[30%] text-[10px] text-[#d7d4cd] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
              •{"\u00A0"}{"\u00A0"}WORLDWIDE
            </span>
          </p>
        </div>
        <div className="w-[30%] flex items-end justify-end">
          <button className="w-[100px] h-[36px] bg-[#F5F3ED] rounded-full group hover:bg-[#F2B347] transition-colors duration-300 mb-7">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              JOIN
            </p>
          </button>
          {/* <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] font-SatoshiBold leading-none uppercase mb-7">
            • WORLDWIDE •
          </p> */}
          {/* <div className="flex items-start justify-start flex-col">
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] font-SatoshiBold leading-none">~ EXPERTS</p>
            <p className="text-[250px] text-[#414141] font-SatoshiBlack leading-none overflow-hidden">20</p>
          </div> */}
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex gap-x-5 mt-[50px]">
        {data.map((item, index) =>(
          <TeamCard key={index} item={item}/>
        ))}
      </div>

      {/* - - - */}
      <div className="w-full hidden justify-between mt-[50px]">
        {/* LEFT - RIGHT */}
        <div className="w-fit flex items-center gap-x-[5px]">
          <div className="w-[46.5px] h-[46.5px] rounded-full bg-[#212121] myFlex">
            <svg width="15.3" height="12.3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.91109 6.24969L13.0801 6.24969L13.0801 4.74969L2.91109 4.74969L6.17764 1.53418L5.12537 0.465201L0.0109658 5.49969L5.12537 10.5342L6.17764 9.4652L2.91109 6.24969Z" fill="#FFFEF3"></path>
            </svg>
          </div>
          <div className="w-[46.5px] h-[46.5px] rounded-full bg-[#212121] myFlex">
            <svg width="15.3" height="12.3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[180deg]">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.91109 6.24969L13.0801 6.24969L13.0801 4.74969L2.91109 4.74969L6.17764 1.53418L5.12537 0.465201L0.0109658 5.49969L5.12537 10.5342L6.17764 9.4652L2.91109 6.24969Z" fill="#FFFEF3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Team;