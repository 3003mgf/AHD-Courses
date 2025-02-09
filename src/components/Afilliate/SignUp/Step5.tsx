import { Dispatch, SetStateAction } from "react";
import Intro from "./Steps/Intro";
import { Steps } from "./SignUp.model";

const Step5 = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) => {
  return ( 
    <>
      <Intro tag="theme" title="Pick Your Vibe." description="Choose Your Theme to Start Your Journey."/>
      <Content setStep={setStep}/>
    </>
   );
}
 
export default Step5;



const Content = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) =>{

  const handleContinue = () =>{
    setStep((prevSteps) => ({
      ...prevSteps, // copies all existing steps
      5: {         // updates step 1
        active: prevSteps[5].active,
        completed: true,
      }
    }));
  };

  return (
    <>
      <div className="w-full h-[125px] mt-7">
        
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
};

