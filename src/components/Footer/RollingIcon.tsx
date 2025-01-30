/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RiCopyrightLine } from "react-icons/ri";

const RollingIcon = () => {

  let interval: NodeJS.Timer;

  const ref = useRef<HTMLDivElement | null>(null);
  const [roll, setRoll] = useState<number>(0);

  useLayoutEffect(() => {
    interval = setInterval(()=>{
      const randomValue = Math.floor(Math.random() * 500 - 200 + 1) + 200;

      setRoll(randomValue);
    }, 5000);

    // return ()=>{
    //   clearInterval(interval);
    // };
  }, []);

  useEffect(() => {
    if(ref && ref.current){

      gsap.to(ref.current, {
        rotate: roll,
        duration: 1.5,
        ease: "bounce.out"
      });

    };
  }, [ref, roll]);

  return ( 
    <div ref={ref} className="w-fit h-fit myFlex">
      <RiCopyrightLine className={`w-[27px] h-[27px] text-[#FFFEF3]`} /> 
    </div>
  );
}
 
export default RollingIcon;