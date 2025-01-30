'use client'

import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FaCcStripe, FaPaypal, FaStripeS } from "react-icons/fa";
import StripeButton from "./StripeButton";
import PayPalButton from "./PayPalButton";

const Step2 = ({setStep}:{setStep: Dispatch<SetStateAction<number>>}) => {

  const handlePayment = () =>{

  };


  return ( 
    <>
      <p className="text-[#414141] dark:text-[#E9E6DE] text-[28px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-6">
        Your Billing.  
      </p>
      
      <div className="w-full flex flex-wrap gap-4 mt-8">
        {/* Card Number */}
        <div className="w-full min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Card</p>

          <div className="w-full flex items-center mt-3 relative">         
            <div className="w-[27.5px] h-[18px] bg-[#eceae5] dark:bg-[#212121] rounded-[2px] mr-3.5 px-[3px] py-1">
              {/* <div className="w-[5.65px] h-[3.65px] bg-[#E9E6DE60] mt-[1px] rounded-[0.5px]"></div>

              <div className="w-full h-[1.75px] flex items-center gap-x-[1px] mt-[3.25px]">
                <div className="min-w-[4.5px] h-full bg-[#393939] rounded-full flex-shrink-0"></div>
                <div className="min-w-[4.5px] h-full bg-[#393939] rounded-full flex-shrink-0"></div>
                <div className="min-w-[4.5px] h-full bg-[#393939] rounded-full flex-shrink-0"></div>
                <div className="min-w-[4.5px] h-full bg-[#393939] rounded-full flex-shrink-0"></div>
              </div> */}
            </div>
            
            <p className="text-[10px] tracking-[0.1em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase">
              ---
            </p>
            
            <div className="absolute right-0 bottom-0 flex items-center gap-x-1.5">
              {/* <FaCcStripe className="w-7 h-7"/> */}
              <StripeButton/>
              
              {/* <PayPalButton/> */}

              {/* <div className="w-[23px] h-[23px] bg-[#F04F23] rounded-full cursor-pointer relative">

              </div> */}
            </div>
          </div>
        </div>
        {/* <p className="w-full mt-1.5 text-[10px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.5px]">
          If you're outside <span className="font-bold">LATAM</span>, please use <span className="font-bold text-[#6860FF]">Stripe</span>.
        </p> */}
        {/*  or <span className="font-bold text-[#F04F23]">Hotmart</span> FOR THE COURSE CHECKOUT*/}

        {/* Expiry Date */}
        <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Expire</p>

          <p className="text-[10px] tracking-[0.1em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
        </div>

        {/* Expiry Date */}
        <div className="w-[calc(50%-8px)] min-h-[45px] bg-[#F5F3EE99] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">CVC</p>

          <p className="text-[10px] tracking-[0.1em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
        </div>
      </div>

      {/* Pay Button */}
      <button onClick={handlePayment} className="w-full h-[45px] rounded-lg bg-[#414141] dark:bg-[#111111] mt-8 myFlex">
        <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
          Pay
        </p>
      </button>
      
      {/* <div className="w-full flex gap-x-4">
        <button onClick={handlePayment} className="w-full h-[45px] rounded-lg bg-[#191919] mt-4 myFlex">
          <p className="text-[9px] tracking-[0.05em] text-[#E9E6DE40] font-SatoshiBold leading-none uppercase">
            
          </p>
        </button>
        <button onClick={handlePayment} className="w-full h-[45px] rounded-lg bg-[#6860FF] mt-4 myFlex">
          <p className="text-[9px] tracking-[0.05em] text-[#E9E6DE40] font-SatoshiBold leading-none uppercase">
            
          </p>
        </button>
        <button onClick={handlePayment} className="w-full h-[45px] rounded-lg bg-[#EEEEEE] mt-4 myFlex">
          <p className="text-[9px] tracking-[0.05em] text-[#E9E6DE40] font-SatoshiBold leading-none uppercase">
            
          </p>
        </button>
      </div> */}


      <p className="mt-5 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.5px]">
        By Clicking the Pay Button — You Agree to our <Link href="legal/userAgreement" className="text-[#41414190] dark:text-[#e9e6dec9] underline underline-offset-[1.5px]">User Agreement</Link> and Authorize This Charge.
      </p>
      <p className="mt-10 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.5px]">
        • Case You're not in <span className="font-bold">LATAM</span> — Please Use <span className="font-bold text-[#6860FF]">Stripe</span>.
      </p>
      <p className="mt-5 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.5px]">
        • To Use Your <span className="font-bold">PayPal</span> Balance — <span className="cursor-pointer">Click Here.</span>
      </p>
      <p className="mt-5 text-[11.5px] text-[#41414190] dark:text-[#E9E6DE90] font-[500] px-[1.5px]">
        • To Use Your <span className="font-bold">Hotmart</span> Balance — <span className="cursor-pointer">Click Here.</span>
      </p>
      {/* <p className="mt-5 text-[12.5px] text-[#E9E6DEd7] syne font-[500]">
        By Clicking Pay — You Agree to our User Agreement and Authorize This Charge.
      </p> */}
    </>
   );
}
 
export default Step2;