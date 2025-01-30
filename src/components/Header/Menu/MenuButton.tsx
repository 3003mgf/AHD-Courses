'use client'

import { useHeaderMenu } from "@/utils/zustand/zustand";
import gsap from "gsap";
import { useEffect } from "react";

const MenuButton = () => {

  const open = useHeaderMenu(state => state.isOpen);
  const setOpen = useHeaderMenu(state => state.setIsOpen);

  const handleOpen = () =>{
    gsap.to("#MENU_DOT", {
      rotate: 90,
      duration: 1,
      ease: "power2.out"
    })
  };

  const handleClose = () =>{
    gsap.to("#MENU_DOT", {
      rotate: 0,
      duration: 1,
      ease: "power2.out"
    })
  };

  useEffect(() => {
    if(open) handleOpen();
    if(!open) handleClose();
  }, [open]);

  return ( 
    <button onClick={() => setOpen(!open)} className="w-[85px] h-[36px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full myFlex">
      <p className="text-[10px] tracking-[0.05em] text-[#E9E6DE] dark:text-[#111111] font-SatoshiBold leading-none">
        MENU
      </p>
    </button>
  );
}
 
export default MenuButton;