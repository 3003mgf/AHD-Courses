import { Dispatch, SetStateAction, useState } from "react";
import { IoEllipsisHorizontal, IoFlashSharp } from "react-icons/io5";
import Intro from "./Steps/Intro";
import { Steps } from "./SignUp.model";

const Step1 = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) => {
  return ( 
    <>
      <Intro tag="AUTH" title="Please Sign Up." description=""/>
      <Content setStep={setStep}/>
    </>
  );
}
 
export default Step1;



const Content = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) =>{

  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleContinue = () =>{
    setStep((prevSteps) => ({
      ...prevSteps, // copies all existing steps
      1: {         // updates step 1
        active: false,
        completed: true,
      },
      2: {         // updates step 1
        active: true,
        completed: prevSteps[2].completed,
      },
    }));
  };

  return(
    <>
      <div className="w-full flex flex-col gap-y-5 mt-14">
        {/* Email */}
        <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start">
          <p className="text-[9px] tracking-[0.05em] text-[#41414175] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Mail</p>

          <input 
            type="text" 
            className={`
              w-full mt-3
              bg-transparent
              text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]
              placeholder:text-[#41414140] placeholder:font-[500] placeholder:text-[11px]
              focus:border-none focus:outline-none focus:shadow-none leading-none
            `}
            placeholder="---"
          />
        </div>

        {/* Pin */}
        <div onFocus={() => setShowGuide(true)} onBlur={() => setShowGuide(false)} className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start relative">
          <p className="text-[9px] tracking-[0.05em] text-[#41414175] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Pin</p>

          <input 
            type="text" 
            className={`
              w-full mt-3
              bg-transparent
              text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]
              placeholder:text-[#41414140] placeholder:font-[500] placeholder:text-[11px]
              focus:border-none focus:outline-none focus:shadow-none leading-none
            `}
            placeholder="---"
          />
          {/* <p className="text-[10px] tracking-[0.05em] text-[#41414140] dark:text-[#E9E6DE40] font-SatoshiBold leading-none uppercase mt-3">---</p> */}

          {/* Icon */}
          <div className="absolute top-1/2 -translate-y-1/2 right-3.5">
            <IoFlashSharp className="w-[18px] h-[18px] text-[#F2B347]" />
          </div>

          {/* Guide */}
          {showGuide && (
            <div className="absolute left-[105%] top-0 w-[200px] h-[200px] bg-[#FAF9F6] rounded-xl">

            </div>
          )}
        </div>
      </div>


      {/* Continue Button */}
      <div onClick={handleContinue} className="flex items-center gap-x-2.5 mt-[30px]">
        <div className="min-w-[42.5px] min-h-[42.5px] rounded-full bg-[#F1EEE9] myFlex">
          <IoEllipsisHorizontal className="w-[14.5px] h-[14.5px] text-[#414141]" />
        </div>
        <button className="w-full h-[42.5px] bg-[#414141] rounded-full myFlex">
          <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
            CONTINUE
          </p>
        </button>
      </div>
    </>
  )
};

