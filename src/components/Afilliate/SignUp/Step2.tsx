import { Dispatch, SetStateAction, useState } from "react";
import { IoEllipsisHorizontal, IoFlashSharp } from "react-icons/io5";
import Intro from "./Steps/Intro";
import { Steps } from "./SignUp.model";

const Step2 = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) => {
  return ( 
    <>
      <Intro tag="AUTH" title="Verify Your Email." description=""/>
      <Content setStep={setStep}/>
    </>
  );
}
 
export default Step2;



const Content = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) =>{

  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleContinue = () =>{
    setStep((prevSteps) => ({
      ...prevSteps, // copies all existing steps
      2: {         // updates step 1
        active: false,
        completed: true,
      },
      3: {         // updates step 1
        active: true,
        completed: prevSteps[2].completed,
      },
    }));
  };

  return(
    <>
      <div className="w-full grid grid-cols-6 gap-2.5 mt-14">
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
        </div>
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
        </div>
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
        </div>
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
        </div>
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
        </div>
        <div className="col-span-1 aspect-[1/1.1] bg-[#FAF9F6] rounded-xl myFlex border-[0px] border-[#F2F0EA]">
          <p className="text-[12.5px] text-[#41414150] dark:text-[#E9E6DE90] inconsolata font-[500]">-</p>
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

