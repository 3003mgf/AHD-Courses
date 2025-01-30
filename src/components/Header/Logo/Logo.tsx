'use client'

import gsap from "gsap";
import { useEffect, useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";

const Logo = () => {

  const [logoRotation, setLogoRotation] = useState<number>(0);
  

  useEffect(() => {
    // Function to generate a random number
    const generateRandomNumber = () => {
    return Math.floor(Math.random() * (360 - 45 + 1)) + 45;
    };

    // Set an interval to update the random number every 2 seconds
    const interval = setInterval(() => {
      setLogoRotation(generateRandomNumber());
    }, 2500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   gsap.to("#HEADER_LOGO", {
  //     rotation: logoRotation,
  //     duration: 1,
  //     ease: "bounce.out"
  //   })
  // }, [logoRotation]);

  return ( 
    <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#E9E6DE] myFlex">
      {/* <div id="HEADER_LOGO" className="w-fit h-fit myFlex">
        <RiCopyrightLine className="text-[#FFFEF3] dark:text-[#111111] w-[27px] h-[27px]"/>
      </div> */}
    </div>
  );
}
 
export default Logo;