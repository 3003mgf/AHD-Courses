'use client'

import Header from "./Header/Header";
import { ReactLenis } from '@studio-freight/react-lenis'
import Spotify from "./Spotify/Spotify";
import Embed from "./Spotify/Embed";
import { useEffect } from "react";
import { useDarkMode } from "@/utils/zustand/zustand";
import { usePathname } from "next/navigation";

const Provider = ({children}:{children: React.ReactNode}) => {

  const setIsDarkMode = useDarkMode(state => state.setIsDarkMode);
  const pathname = usePathname();

  useEffect(() => {
      // Check if the 'dark' class is on the <body> element
      const checkDarkMode = () => {
        setIsDarkMode(document.body.classList.contains("dark"));
      };
  
      // Run once on mount
      checkDarkMode();
  
      // Optionally: Add a mutation observer if the dark mode can change dynamically
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
  
      return () => observer.disconnect(); // Cleanup on unmount
    }, []);

  return ( 
    <ReactLenis root>
      <div className="w-full h-full bg-gradient-to-br from-[#FAF9F6] to-[#F8F7F3] dark:from-[#111111] dark:to-[#111111]">
        {!pathname?.includes("checkout") && (
          <>
            <Header/>
            <Spotify/>
          </>
        )}

        {/* <Embed/> */}

        {children}
      </div>
    </ReactLenis>
   );
}
 
export default Provider;