import { Dispatch, SetStateAction } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { IoAdd, IoAddCircle, IoAlertCircle, IoCamera } from "react-icons/io5";
import Intro from "./Steps/Intro";
import { Steps } from "./SignUp.model";

const Step3 = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) => {
  return ( 
    <>
      <Intro tag="PROFILE" title="Hi There!" description="Please Upload a Photo and Tell Us Your Name."/>
      <Content setStep={setStep}/>
    </>
  );
}
 
export default Step3;



const Content = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) =>{

  const handleContinue = () =>{
    setStep((prevSteps) => ({
      ...prevSteps, // copies all existing steps
      3: {         // updates step 1
        active: false,
        completed: true,
      },
      4: {         // updates step 1
        active: true,
        completed: prevSteps[2].completed,
      },
    }));
  };


  return (
    <>
      <div className="w-full flex items-center gap-x-5 mt-7">
        <div className="w-[64px] h-[64px] bg-[#F1F0EB] rounded-full relative overflow-hidden ring-[0px] ring-[#E9E6DE] group cursor-pointer">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[5]">
            <FaUserAstronaut className="w-11 h-11 text-[#D0CEC1]" />
          </div>

          <div className="absolute inset-0 w-full h-full bg-[#00000050] rounded-full z-10 myFlex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <IoCamera className="w-[18px] h-[18px] text-[#F5F3EE]" />
          </div>
        </div>

        <button className="w-[75px] h-[34px] bg-[#F5F3EE] rounded-full myFlex">
          <p className="text-[9px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
            SHOT
          </p>
        </button>
      </div>

      {/* Name */}
      <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start mt-7">
        <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Name</p>

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

      {/* Continue Button */}
      <div onClick={handleContinue} className="flex items-center gap-x-2.5 mt-[30px]">
        <button className="w-full h-[42.5px] bg-[#414141] rounded-full myFlex">
          <p className="text-[10px] tracking-[0.05em] text-[#FFFEF3] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
            CONTINUE
          </p>
        </button>
      </div>
    </>
  )
}