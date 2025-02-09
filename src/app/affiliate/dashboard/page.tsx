const Dashboard = () => {
  return ( 
    <div className="w-full h-screen flex px-[60px] pt-[120px] bg-[#FAF8F6]">
      <div className="w-[25%] h-full flex items-start justify-start flex-col opacity-0">
        <div className="w-full h-[125px] rounded-[24px] bg-gradient-to-tr from-[#F1F0EB] to-[#F1EFEA]">
        
        </div>

        <div className="w-full px-9 -mt-[35px]">
          <div className="w-[65px] h-[65px] rounded-full bg-[#414141] ring-[2px] ring-[#F9F8F5]"></div>


          {/* <div className="w-full flex flex-col gap-y-7">
            <div className="w-full flex gap-x-5">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#414141]"></div>

            </div>
            <div className="w-full flex gap-x-5">
              <div className="w-[45px] h-[45px] rounded-lg bg-[#414141]"></div>

            </div>
          </div> */}
        </div>
      </div>

      <div className="w-[75%] h-full px-[60px] py-3.5">
        <div className="w-full flex items-center justify-between">
          <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none">
            TRACK  •
          </p>
        
          {/* <div className="flex gap-x-2.5">
            <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] relative">

            </div>
          </div> */}
        </div>

        <p className="text-[40px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none mt-10">
          Hi There!
        </p>

        <p className="w-[50%] mt-5 text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500] px-[1.5px]">
          Track Your Sales, Monitor Your Earnings, Manage Your Payouts — All In One Place.
        </p>
      </div>
    </div>
   );
}
 
export default Dashboard;