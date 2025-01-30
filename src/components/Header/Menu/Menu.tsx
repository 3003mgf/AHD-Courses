'use client'
import { motion } from "framer-motion";
import { animation, animation2, animation3 } from "./Menu.framer";

const Menu = () => {

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return ( 
    <div className="fixed w-[270px] top-[72.5px] right-[60px] z-[100] flex items-start justify-start flex-col gap-y-2.5 overflow-visible">
      {/* Links */}
      <motion.div 
        variants={animation}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-fit p-3 bg-[#414141] dark:bg-[#212121] rounded-[24px] flex flex-col gap-y-1"
      >
        <p className="text-[10px] tracking-[0.05em] text-[#FAF9F5] dark:text-[#E9E6DE] font-SatoshiBold leading-none px-3.5 py-3.5 rounded-lg rounded-t-2xl hover:bg-[#21212150] hover:dark:bg-[#41414175] mt-0">
          HOME{"\u00A0"}{"\u00A0"}•
        </p>
        <p className="text-[10px] tracking-[0.05em] text-[#FFFEF399] dark:text-[#E9E6DE99] font-SatoshiBold leading-none px-3.5 py-3.5 rounded-lg hover:bg-[#21212150] hover:dark:bg-[#41414175]">
          ACADEMY
        </p>
        <p className="text-[10px] tracking-[0.05em] text-[#FFFEF399] dark:text-[#E9E6DE99] font-SatoshiBold leading-none px-3.5 py-3.5 rounded-lg hover:bg-[#21212150] hover:dark:bg-[#41414175]">
          ABOUT
        </p>
        
        {/* <div className="w-full mx-auto h-[0.5px] my-2"></div> */}

        <div className="w-full flex items-center justify-between px-3.5 rounded-lg hover:bg-[#21212150] hover:dark:bg-[#41414175] relative group">
          <div className="flex items-center gap-x-2">
            <svg stroke="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-[#FFFEF399] dark:fill-[#E9E6DE99]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"></path>
            </svg>
            <p className="text-[10px] tracking-[0.05em] text-[#FFFEF399] dark:text-[#E9E6DE99] font-SatoshiBold leading-none py-3.5">
              THEME
            </p>
          </div>

          <button onClick={handleDarkMode} className="absolute top-1/2 -translate-y-1/2 right-1.5 w-[75px] h-[26px] bg-[#414141] dark:bg-[#212121] rounded-md">

          </button>
        </div>

        <p className="text-[10px] tracking-[0.05em] text-[#FFFEF399] dark:text-[#E9E6DE99] font-SatoshiBold leading-none px-3.5 py-3.5 rounded-lg rounded-b-2xl hover:bg-[#21212150] hover:dark:bg-[#41414175]">
          SUPPORT
        </p>


        
        {/* <div className="w-full h-[50px] rounded-t-lg rounded-b-2xl bg-[#F5F3EE] flex items-center justify-start px-3.5">
         
        </div> */}
      </motion.div>

      {/* NL */}
      <motion.div 
        variants={animation2}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-[125px] p-3 bg-[#FAF9F6] rounded-[24px] border-[0px] border-[#E4E1D5] hidden"
      >
        <p className="text-[10px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase px-1 pt-3.5">
          # KEEP IN TOUCH
        </p>

        <div className="w-full flex flex-1"></div>
        
        <div>

        </div>
        <div className="w-full">
          <div className="w-full h-[50px] rounded-t-lg rounded-b-2xl bg-[#F5F3EE] mt-5">

          </div>
        </div>
      </motion.div>

      {/* Extra */}
      <motion.div 
        variants={animation2}
        initial="initial"
        animate="enter"
        exit="exit"
        className="w-full h-[65px] rounded-full bg-[#232323] dark:bg-[#E9E6DE] border-[0px] border-[#F2F0EA] px-5 flex items-center justify-start gap-x-5 relative group"
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="none" viewBox="0 0 28 38">
          <path stroke="#FFFEF3" stroke-width="5" d="M20.128 29.65C18.584 31.217 16.532 32 13.972 32c-2.56 0-4.612-.783-6.156-2.35C6.272 28.05 5.5 26 5.5 23.5c0-2.5.772-4.533 2.316-6.1 1.544-1.6 3.596-2.4 6.156-2.4 2.56 0 4.612.8 6.156 2.4C21.71 18.967 22.5 21 22.5 23.5c0 2.5-.79 4.55-2.372 6.15Z"></path>
          <path fill="#FFFEF3" d="M23.5 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0ZM11 4.25a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0Z"></path>
        </svg> */}

        {/* <div className="min-w-[30px] min-h-[30px] rounded-full bg-[#414141] myFlex">
          <p className="text-[#FFFEF3] font-Basebloom text-[18px] leading-none">c</p>
        </div>

        <p className="w-full text-[10px] tracking-[0.05em] text-[#FFFEF399] font-SatoshiBold leading-none">~ STUDIO</p>
        */}

        {/* <svg width="13" height="10" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 -translate-y-1/2 right-8 rotate-[180deg]">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.91109 6.24969L13.0801 6.24969L13.0801 4.74969L2.91109 4.74969L6.17764 1.53418L5.12537 0.465201L0.0109658 5.49969L5.12537 10.5342L6.17764 9.4652L2.91109 6.24969Z" fill="#FFFEF390"></path>
        </svg> */}
      </motion.div>
    </div>
   );
}
 
export default Menu;