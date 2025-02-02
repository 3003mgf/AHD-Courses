const Welcome = () => {
  return ( 
    <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-1 flex-col">
      {/* Intro */}
      <div className="w-full flex items-center justify-between pt-[30px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[15px]">
          AI •
        </p>
      
        <div className="flex gap-x-2.5">
          <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] relative">
            
          </div>

          <div className="w-[72px] h-[36px] rounded-full bg-gradient-to-b from-[#F2F0EA] dark:bg-[#212121] relative myFlex cursor-pointer">
            <p className="text-[10px] text-[#787777d7] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
              REEL
            </p>
          </div>
        </div>
      </div>

      <p className="text-[40px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none mt-10">
        Build Your Skills.
      </p>
      <p className="mt-5 text-[12.5px] text-[#41414190] dark:text-[#E9E6DE90] inconsolata font-[500] px-[1.5px]">
        Talk To <span className="font-bold text-[#F2B347]">Dumpie</span> — Find the <span className="font-bold">Perfect Workshop</span> For You.
      </p>

      {/* Spacer */}
      <div className="w-full flex flex-1"></div>

      {/* Suggestions */}
      <div className="w-full grid grid-cols-3 gap-5">
        <div className="col-span-1 aspect-square rounded-2xl bg-[#FAF9F6] p-4 relative overflow-hidden flex flex-col">
          {/* <div className="w-[40px] h-[40px] rounded-xl bg-[#464646] border-[1px] border-[#2F2F2F]"></div> */}

          {/* Shape */}
          <div className="absolute bottom-0 right-[10%] w-[75%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 800 800" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
              <path d="M146 789c11-23 224-68 470-98-124-9-229-35-255-82-7-12-7-26 1-37 22-29 104-52 269-36-220-79-356-215-375-303-6-30 2-55 23-69 41-29 123-15 236 35-118-83-117-97-116-104 0-5 3-9 8-11 32-13 284 123 486 273-93-126-111-259-87-324 11-33 32-51 58-52h2c36 0 76 32 117 92 235 420 29 855-337 748-104 21-191 33-245 39-49 6-212 23-234 0-4-4-5-10-3-15 4-11 35-25 93-40-100 9-106 1-110-4-2-3-3-8-1-12z"></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1 aspect-square rounded-2xl bg-[#FAF9F6] p-4 relative overflow-hidden">
          {/* <div className="w-[40px] h-[40px] rounded-xl bg-[#464646] border-[1px] border-[#2F2F2F]"></div> */}

          {/* Shape */}
          <div className="absolute bottom-[5%] right-0 w-[75%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 800 800" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
              <path d="M1494 341c-278 0-314-64-318-84-9-43 54-99 175-155a7 7 0 00-6-13c-123 57-214 62-258 14-52-58-28-190 66-352a7 7 0 00-12-7C1055-107 930-21 800-21s-255-86-341-235a7 7 0 10-12 7c86 149 98 300 33 413S279 341 106 341a7 7 0 100 15c188 0 315 46 341 123 21 64-27 144-136 226a7 7 0 00-2 10c2 3 7 3 10 1 107-80 186-110 217-83 14 13 50 73-89 313a7 7 0 1012 7c86-149 211-235 341-235s255 86 341 235a7 7 0 1012-7c-86-149-98-300-33-413s201-177 374-177a7 7 0 100-15z"></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1 aspect-square rounded-2xl bg-[#FAF9F6] p-4 relative overflow-hidden">
          {/* <div className="w-[40px] h-[40px] rounded-xl bg-[#464646] border-[1px] border-[#2F2F2F]"></div> */}


          {/* Shape */}
          <div className="absolute bottom-[5%] -right-[50%] w-[75%] -rotate-[30deg]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 800 800" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
              <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Welcome;