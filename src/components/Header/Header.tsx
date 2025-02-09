'use client'

import { useHeaderMenu } from "@/utils/zustand/zustand";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";
import Music from "./Music/Music";
import { useSearchParams } from 'next/navigation'

const Header = () => {

  const tl = gsap.timeline();

  const ref = useRef<HTMLHeadElement | null>(null);
  const open = useHeaderMenu(state => state.isOpen);

  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      
      if(currentScrollPosition > lastScrollPosition && !open){
        setScrollDirection("down");
      }else if (currentScrollPosition < lastScrollPosition){
        setScrollDirection("up");
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, open]);

  useEffect(() => {
    if(scrollDirection !== null && ref && ref.current){
      if(scrollDirection === "up"){
        tl.to(ref.current, {
          top: 0,
          duration: 0.4
        })
      };
      if(scrollDirection === "down"){
        tl.to(ref.current, {
          top: -100,
          duration: 0.4
        })
      };
    }
  }, [scrollDirection, ref]);



  return ( 
    <header id="HEADER" ref={ref} className="fixed top-0 left-0 w-full h-[90px] flex items-center justify-between px-[60px] bg-transparent z-[100]">
      {/* Logo */}
      <Logo/>

      {/* Actions */}
      <div className="w-fit flex gap-x-2.5">
        {/* Music */}
        {/* <Music/> */}
        

        {/* <MenuButton/> */}
      </div>

      <AnimatePresence mode="wait">
        {open && (
          <Menu/>
        )}
      </AnimatePresence>
    </header>
   );
}
 
export default Header;