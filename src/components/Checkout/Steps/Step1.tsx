'use client'

import { Dispatch, SetStateAction } from "react";

const Step1 = ({setStep}:{setStep: Dispatch<SetStateAction<number>>}) => {

  const handleContinue = () =>{
    setStep(prev => {
      if(prev < 3){
       return prev + 1;
      };

      return prev;
    });
  };

  return ( 
    <>
      <p className="text-[#414141] dark:text-[#E9E6DE] text-[28px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-6">Your Billing.</p>
        
      <div className="w-full flex flex-col gap-y-4 mt-8 opacity-100">
        <div className="w-full min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Email</p>

          <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
        </div>
        <div className="w-full min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Name</p>

          <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
        </div>

        <div className="w-full min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Street</p>

          <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
        </div>

        <div className="w-full flex flex-wrap gap-4">
          <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
            <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Country</p>

            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
          </div>

          <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
            <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">City</p>

            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
          </div>

          <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
            <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">State / Province</p>

            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
          </div>

          <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
            <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Zip Code</p>

            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button onClick={handleContinue} className="w-full h-[45px] rounded-lg bg-[#414141] dark:bg-[#111111] mt-8 myFlex">
        <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
          Next   
        </p>
      </button>
    </>
   );
}
 
export default Step1;