const Labs = () => {
  return ( 
    <div className="w-full px-[60px] mt-[200px] mb-[125px]">
      <div className="w-full h-[100vh] rounded-[24px] bg-[#1D1D1D50] dark:bg-[#21212160] relative overflow-clip">
        
        <div className="absolute bottom-0 left-0 p-[57px] flex flex-col gap-y-10 z-10">
          <p className="text-[70px] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBlack leading-[1.1]">
            Studio — Dumps <br />
            4 Your Feed.
          </p>

          <div className="flex items-center justify-start gap-x-7">
            <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none">~{"\u00A0"}{"\u00A0"}EXPLORE</p>
            {/* <div className="w-[32.5px] h-[32.5px] rounded-full bg-[#FFFEF3] myFlex">
            
            </div> */}
          </div>
        </div>

      </div>
    </div>
   );
}
 
export default Labs;