'use client'

import Stepper from "@/components/Checkout/Stepper";
import Step1 from "@/components/Checkout/Steps/Step1";
import Step2 from "@/components/Checkout/Steps/Step2/Step2";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const Checkout = () => {

  const router = useRouter();

  const priceRef = useRef<HTMLParagraphElement | null>(null);

  const [step, setStep] = useState<number>(1);
  const [useCoupon, setUseCoupon] = useState<boolean>(false);


  return ( 
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex flex-col p-[95px]">
        {/* Logo & Go Back */}
        <div className="w-[33px] h-[33px] rounded-full bg-[#414141] dark:bg-[#212121] relative mb-5 -ml-1">
          <svg 
            onClick={() => router.back()}
            fill="none" 
            stroke-width="2" 
            viewBox="0 0 24 24" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="h-[18.5px] w-[18.5px] flex-none absolute top-1/2 -translate-y-1/2 -left-7 stroke-[#414141] dark:stroke-[#E9E6DE] cursor-pointer" 
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
          >
              <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        
        {/* Title */}
        <div className="w-full flex items-center justify-between">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[28px] font-SatoshiBlack leading-[1.2] pb-[5px]">Your Billing.</p>
          <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none">
            CHECKOUT
          </p>
        </div>
        
        {/* Container */}
        <div className="w-full flex flex-col mt-10">
          {/* Product */}
          <div className="w-full flex items-center justify-between py-[20px] border-b-[0px] border-[#41414199]">
            {/* Image & Name */}
            <div className="w-fit flex items-center justify-start gap-x-5">
              <div className="h-[50px] aspect-square rounded-lg bg-[#E7F8AC] dark:bg-[#445406] relative overflow-clip">
                {/* <img src="https://fearofgod.com/cdn/shop/files/FG870-034TNY_BUCKET_BLACK_1_x2550.jpg?v=1705020391" alt="_" className="absolute inset-0 w-full h-full object-cover"/> */}
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
                <span className="text-[#FFA300]">3X</span>{"\u00A0"}{"\u00A0"}Bucket
                </p>
                <p className="text-[10.5px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-HovesDemi leading-none uppercase mt-3.5">
                  LIMITED EDITION
                </p>
              </div>
            </div>

            <div className="w-fit flex items-end justify-start flex-col">
              <p ref={priceRef} className="w-fit text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative mr-[37px] overflow-visible">
                ~ 96

                {priceRef && priceRef.current && (
                  <span 
                    className="absolute bottom-[4px] text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase"
                    style={{left: priceRef.current.offsetWidth + 16.5}}
                  >
                    EUR
                  </span>
                )}
              </p>
              {/* <p className="text-[14px] text-[#E9E6DE] tracking-[0em] font-HovesDemi leading-none uppercase">
                $32.00 EUR
              </p> */}
              {/* <div className="h-[20px] px-[8px] rounded-md bg-[#445407] mt-2.5 myFlex">
                <p className="text-[9px] tracking-[0.05em] text-[#E7F8AC] font-SatoshiBold leading-none uppercase">HOT SALE</p>
              </div> */}
            </div>
          </div>
          
          <div className="w-full py-[20px] flex flex-col gap-y-[20px]">
            {/* Coupon Code */}
            <div className="w-full min-h-[45px] bg-[#F5F4EF] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start relative">
              <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">COUPON</p>

              <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
              
              <button className="absolute top-1/2 -translate-y-1/2 right-3.5 w-[65px] h-[calc(100%-28px)] bg-[#414141] dark:bg-[#E9E6DEd7] rounded-md">
                <p className="text-[10px] tracking-[0.05em] text-[#E9E6DE] dark:text-[#111111] font-SatoshiBold leading-none uppercase">
                  APPLY
                </p>
              </button>
            </div>
            
            {/* Afilliate */}
            {/* <div className="w-full min-h-[45px] bg-[#F5F4EF] dark:bg-[#272727] rounded-lg border-[0px] border-[#333333] p-3.5 flex flex-col items-start justify-start relative">
              <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">AFILLIATE</p>

              <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p>
            </div> */}
          </div>

          
          {/* Tax */}
          <div className="w-full flex items-center justify-between py-[20px] px-[1.75px] border-b-[0px] border-[#41414199]">
            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase pl-[1.5px]">Tax</p>

            <p className="text-[10px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">—</p>
          </div>
          
          {/* Total */}
          <div className="w-full flex items-center justify-between py-[20px] px-[1.75px]">
            <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase pl-[1.5px]">Total</p>

            <p className="text-[11px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE] font-HovesDemi leading-none uppercase">
              96 <span className="font-SatoshiBold text-[10px]">{"\u00A0"}EUR</span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-full bg-[#FFFEFE] dark:bg-[#212121] p-[95px] relative">
        {/* Stepper */}
        <Stepper step={step}/>
        

        {step === 1 && (
          <Step1 setStep={setStep}/>
        )}

        {step === 2 && (
          <Step2 setStep={setStep}/>
        )}


        {/* Shape */}
        <div className="absolute -top-[4%] right-0 w-[25%] -rotate-[180deg]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
        
        
      </div>
    </div>
   );
}
 
export default Checkout;