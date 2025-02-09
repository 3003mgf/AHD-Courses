'use client'

import { Steps } from "@/components/Afilliate/SignUp/SignUp.model";
import Step1 from "@/components/Afilliate/SignUp/Step1";
import Step2 from "@/components/Afilliate/SignUp/Step2";
import Step3 from "@/components/Afilliate/SignUp/Step3";
import Step4 from "@/components/Afilliate/SignUp/Step4";
import Step5 from "@/components/Afilliate/SignUp/Step5";
import { useEffect, useState } from "react";


const SignUp = () => {

  const [step, setStep] = useState<Steps>({
    1: {
      active: true,
      completed: false
    },
    2: {
      active: false,
      completed: false
    },
    3: {
      active: false,
      completed: false
    },
    4: {
      active: false,
      completed: false
    },
    5: {
      active: false,
      completed: false
    }
  });

  const handleMarker = (index: number) => {
    if(!step[index].active){
      if(step[index].completed){
        const currentStep = Object.entries(step).filter(el => el[1].active === true);
        const currentStepIndex: number = Number(currentStep[0][0]);

        setStep({
          ...step,
          [currentStepIndex]: {
            active: false,
            completed: step[currentStepIndex].completed
          },
          [index]: {
            ...step[index],
            active: true
          }
        })
      };
    };
  };

  useEffect(() => {
    if(step[5].completed){
      // User Registered Successfully.
    };
  }, [step]);

  return ( 
    <div className="w-full h-screen bg-gradient-to-b from-[#FAF9F6] to-[#F5F3EF] myFlex p-[60px] relative overflow-hidden">
      <div data-lenis-prevent className="w-[32.5%] flex flex-col">
        {step[1].active && (
          <Step1 setStep={setStep}/>
        )}

        {step[2].active && (
          <Step2 setStep={setStep}/>
        )}

        {step[3].active && (
          <Step3 setStep={setStep}/>
        )}

        {step[4].active && (
          <Step4 setStep={setStep}/>
        )}

        {step[5].active && (
          <Step5 setStep={setStep}/>
        )}

        <div className="w-full flex items-center justify-center gap-x-1 mt-7">
          {[...Array(5)].map((_, index) => (
            <div 
              key={`SIGN_UP_MARKER_${index + 1}`} 
              className={`w-[8px] h-[8px] rounded-full cursor-pointer ${step[index + 1].active ? "bg-[#414141]" : "bg-[#E9E6DE]"} transition-colors duration-100`}
              onClick={() => handleMarker(index + 1)}
            ></div>
          ))}
        </div>
      </div>

      <Shapes/>
    </div>
   );
}
 
export default SignUp;


const Shapes = () =>{
  return (
    <>
      {/* Shape Left */}
      <div className="absolute -bottom-[20%] -left-[2.5%] w-[27.5%] h-[60%] -rotate-[30deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>

      {/* Shape Right */}
      <div className="absolute -bottom-[5.5%] -right-[20%] w-[25%] h-[60%] -rotate-[30deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </div>
      </div>
    </>
  )
};

