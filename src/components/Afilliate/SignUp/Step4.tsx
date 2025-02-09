import { Dispatch, SetStateAction, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { IoAlertCircle } from "react-icons/io5";
import { signUpCountries } from "./data";
import { CircleFlag } from "react-circle-flags";
import Intro from "./Steps/Intro";
import { Steps } from "./SignUp.model";

const Step4 = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) => {
  return ( 
    <>
      <Intro tag="PROFILE" title="Setup Your Account." description="This Will Help Us Personalize your Affiliate Experience at A Hottie Dump."/>
      <Content setStep={setStep}/>
    </>
  );
}
 
export default Step4;



const Content = ({setStep}:{setStep: Dispatch<SetStateAction<Steps>>}) =>{

  const [openGender, setOpenGender] = useState<boolean>(false);
  const [openCountry, setOpenCountry] = useState<boolean>(false);

  const handleContinue = () =>{
    setStep((prevSteps) => ({
      ...prevSteps, // copies all existing steps
      4: {         // updates step 1
        active: false,
        completed: true,
      },
      5: {         // updates step 1
        active: true,
        completed: prevSteps[2].completed,
      },
    }));
  };

  return (
    <>
      {/* Gender */}
      <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start mt-7 relative">
        <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Gender</p>

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
          disabled
        />

        {openGender && (
          <div className="absolute top-[105%] left-0 w-full h-fit bg-[#FAF9F6] rounded-xl border-[1px] border-[#F2F0EA] p-1.5">
            <p className="w-full text-[12.5px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE99] inconsolata font-[500] leading-none px-3.5 py-3.5 rounded-lg hover:bg-[#F2F0E9] hover:dark:bg-[#41414175]">
              Female
            </p>
            <p className="w-full text-[12.5px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE99] inconsolata font-[500] leading-none px-3.5 py-3.5 rounded-lg hover:bg-[#F2F0E9] hover:dark:bg-[#41414175]">
              Male
            </p>
          </div>
        )}
      </div>

      {/* Country */}
      <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start mt-7 relative">
        <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Country</p>

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
          disabled
        />

        {openCountry && (
          <div className="absolute top-[105%] left-0 w-full h-[175px] bg-[#FAF9F6] rounded-xl border-[1px] border-[#F2F0EA] p-1.5 overflow-y-auto no-scrollbar">
            {signUpCountries.map((country, index) => (
              <div 
              key={`SIGN_UP_COUNTRY_${country.countryCode}`} 
              className={`
                w-full flex items-center px-2.5 py-0.5 rounded-lg hover:bg-[#F2F0E9] hover:dark:bg-[#41414175] relative
                
              `}
              >
                <CircleFlag countryCode={country.countryCode.toLowerCase()} height={20} width={20} />
                <p className="w-full text-[11.5px] tracking-[0.05em] text-[#414141] dark:text-[#E9E6DE99] inconsolata font-[500] leading-none px-3.5 py-3.5 rounded-lg">
                  {country.countryName}
                </p>
              </div>
            ))}
            
          </div>
        )}
      </div>

      {/* Birth */}
      <div className="w-full min-h-[45px] bg-[#FAF9F6] dark:bg-[#272727] rounded-xl border-[0px] border-[#F2F0EA] p-3.5 flex flex-col items-start justify-start mt-7">
        <p className="text-[9px] tracking-[0.05em] text-[#41414199] dark:text-[#E9E6DE99] font-SatoshiBold leading-none uppercase">Birth</p>

        <input 
          type="text" 
          className={`
            w-full mt-3
            bg-transparent
            text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]
            placeholder:text-[#41414140] placeholder:font-[500] placeholder:text-[11px]
            focus:border-none focus:outline-none focus:shadow-none leading-none
          `}
          placeholder="30/03/2000"
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
};