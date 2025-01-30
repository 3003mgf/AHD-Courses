'use client'

import gsap from "gsap";
import { useEffect, useState } from "react";

type Item = {
  name: string;
  field: string;
};

const Row = ({item, index}:{item: Item, index: number}) => {

  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if(hovered){
      gsap.to(`#BOARD_ROW_${index}`, {
        clipPath: `inset(0% 0% 0% 0%)`,
        duration: 1,
        ease: "bounce.out"
      })
    }else{
      gsap.to(`#BOARD_ROW_${index}`, {
        clipPath: `inset(100% 0% 0% 0%)`,
        duration: 1,
        ease: "bounce.out"
      })
    }
  }, [hovered, index]);

  return ( 
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full flex items-center justify-between h-[50px] px-4 relative cursor-pointer"
    >
      <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
        ---
      </p>     

      <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">{item.field}</p>  

      <div 
        id={`BOARD_ROW_${index}`}
        className="absolute inset-0 w-full h-full bg-[#161616] z-10 flex items-center justify-between px-4"
        style={{clipPath: `inset(100% 0% 0% 0%)`}}
      >
        <p className="text-[10px] text-[#E9E6DEd7] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
          ---
        </p>     

        <p className="text-[10px] text-[#E9E6DEd7] tracking-[0.05em] font-SatoshiBold leading-none uppercase flex items-center gap-x-2">
          {item.field}
        </p>  
      </div>     
    </div>
   );
}
 
export default Row;