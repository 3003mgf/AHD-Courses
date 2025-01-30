'use client'

import gsap from "gsap";
import { useEffect } from "react";

const data: string[] = [
  "Billing",
  "Payment",
  "Status"
];

const Stepper = ({step}:{step: number}) => {

  useEffect(() => {
    const barWidth = step === 1 ? "20%" : step === 2 ? "50%" : "100%";

    gsap.to(`#CHECKOUT_BAR`, {
      width: barWidth,
      duration: 1,
      ease: "bounce.out"
    })
  }, [step]);

  return ( 
    <div className="w-[305px]">
      {/* Steps */}
      <div className="w-full flex items-center gap-x-11">
        {data.map((item, index) =>{
          return(
            <div key={`CHECKOUT_STEP_${index + 1}`} className="flex items-center justify-start gap-x-2">
              <div className={`w-[20px] h-[20px] rounded-[4px] myFlex ${step === index + 1 ? "bg-[#F2F0EA] dark:bg-[#414141]" : step > index + 1 ? "bg-[#F2B347]" : ""}`}>
                {step > index + 1 && (
                  <svg stroke="#FFFEF3" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" className="w-[11px] h-[11px]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}

                {step <= index + 1 && (
                  <p className="text-[9.5px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE] font-HovesDemi leading-none uppercase">
                    {index + 1}          
                  </p>
                )}
              </div>
              <p className={`text-[8.5px] tracking-[0.05em] font-SatoshiBold leading-none uppercase ${step >= index + 1 ? "text-[#414141] dark:text-[#E9E6DE]" : "text-[#414141] dark:text-[#E9E6DE99]"}`}>
                {item}
              </p>
            </div>
          )
        })}
    
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[2px] bg-[#F2F0EA] dark:bg-[#414141] rounded-full relative overflow-clip mt-3.5">
        <div id="CHECKOUT_BAR" className="absolute top-0 left-0 h-full w-[20%] bg-[#F2B347]"></div>
      </div>
    </div>
   );
}
 
export default Stepper;