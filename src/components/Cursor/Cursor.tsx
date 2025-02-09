'use client'

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Cursor = () => {

  const cursor = useRef(null);
  let xMoveCursor = useRef<any>(null);
  let yMoveCursor = useRef<any>(null);

  const moveItems = (x:number, y:number) => {
    xMoveCursor.current(x)
    yMoveCursor.current(y)  
  };

  const handleMouse = (e: MouseEvent) =>{
    moveItems(e.clientX, e.clientY);
  };
  
  useEffect(() => {
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.75, ease: "elastic.out"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.75, ease: "elastic.out"})

    window.addEventListener("mousemove", (e)=> handleMouse(e));

    return ()=>{
      window.removeEventListener("mousemove", (e)=> handleMouse(e));
    }
  }, []);

  return ( 
    <div 
      ref={cursor}
      className={`
        fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
        bg-[#FFA401] w-[0.8rem] h-[0.8rem] rounded-full
        overflow-hidden pointer-events-none z-[100]
      `} 
    >


    </div>
   );
}
 
export default Cursor;