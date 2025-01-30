'use client'

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const StoreCard = ({item, index}:{item: any, index: number}) => {

  const tl = gsap.timeline({delay: 0});
  
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  const priceRef = useRef<HTMLParagraphElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(hovered){
    
    };

    if(!hovered){
     
    };
  }, [hovered]);

  const handleClose = (e: MouseEvent) => {
    e.stopPropagation(); 
    setOpen(false);
  };

  return ( 
    <div 
      ref={ref}
      onClick={() => setOpen(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        w-full aspect-[1/1.3] bg-[#1D1D1D50] dark:bg-[#21212160] rounded-[24px] myFlex overflow-clip relative
      `}
    >
      {/* <img src={item?.images[0]} alt="_" className="absolute inset-0 w-full h-full object-cover rounded-[25px]"/> */}

      {/* <div id={`STORE_CARD_${index}_SHADOW`} className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent to-[#010101] z-10">

      </div> */}

      <AnimatePresence mode="wait">
        {open && (
          <div 
            data-lenis-prevent 
            onClick={handleClose} 
            className="w-full h-screen fixed top-0 left-0 z-[100] bg-[#2D2D2D60] dark:bg-[#0e0e0d50] myFlex"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-[65%] aspect-video bg-[#F9F8F4] dark:bg-[#171717] rounded-[24px] border-[2px] border-[#D7D4CE] dark:border-[#212121] p-5 pr-0 flex items-start justify-start">
              <div className="w-1/2 h-full bg-[#212121] rounded-2xl relative overflow-y-auto flex-col no-scrollbar">
                <div className="w-full h-full bg-[#F5F3EE] dark:bg-[#141414]">

                </div>
                <div className="w-full h-full bg-[#f5f3eef8] dark:bg-[#111111]">

                </div>
                <div className="w-full h-full bg-[#F5F3EE] dark:bg-[#141414]">

                </div>
                <div className="w-full h-full bg-[#f5f3eef8] dark:bg-[#111111]">

                </div>
                {/* <img src="https://fearofgod.com/cdn/shop/files/FG870-034TNY_BUCKET_BLACK_1_x2550.jpg?v=1705020391" alt="_"  className="absolute inset-0 w-full h-full object-cover"/> */}
              </div>

              <div className="w-1/2 h-full flex items-start justify-start flex-col py-5 px-[50px]">
                <div className="w-full flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.05em] text-[#4144141] dark:text-[#E9E6DE] font-SatoshiBold leading-none uppercase">
                    Bucket XO
                  </p>

                  <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none">
                    PRODUCT
                  </p>
                </div>
                <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none uppercase mt-3.5">
                  LIMITED EDITION
                </p>
                {/* <p className="text-[9px] tracking-[0.05em] text-[#E9E6DE50] font-SatoshiBold leading-none uppercase mt-3.5">
                  Limited Edition X 2025
                </p> */}

                <div className="w-full relative mt-10">
                  <p ref={priceRef} className="w-fit text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative overflow-visible">
                    ~ 32

                    {priceRef && priceRef.current && (
                      <span 
                        className="absolute bottom-[4px] text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase"
                        style={{left: priceRef.current.offsetWidth + 16.5}}
                      >
                        EUR
                      </span>
                    )}
                  </p>
                  
                  <button className="absolute top-1/2 -translate-y-1/2 right-0 w-[75px] h-[36px] rounded-full bg-[#F2F0EA] dark:bg-[#212121] myFlex px-5 cursor-default">
                    {/* <p className="text-[12px] text-[#E9E6DE99] tracking-[0.05em] font-SatoshiRegular leading-none uppercase">
                      -
                    </p> */}
                    <p className="text-[10.5px] text-[#787777] dark:text-[#E9E6DE99] tracking-[0.05em] font-HovesDemi leading-none uppercase">
                      1
                    </p>
                    {/* <p className="text-[12px] text-[#E9E6DE99] tracking-[0.05em] font-SatoshiRegular leading-none uppercase">
                      +
                    </p> */}
                  </button>
                </div>
             
                {/* <div className="w-full flex flex-col gap-y-1 mt-10">
                  <div className="w-full h-[40px] bg-[#212121] rounded-full flex items-center justify-start px-4 gap-x-3">
                    <p className="text-[10px] tracking-[0.05em] text-[#5A5A5A99] font-SatoshiBold leading-none uppercase">
                      Size
                    </p>
                    <p className="text-[10px] text-[#E9E6DE99] tracking-[0.05em] font-SatoshiBold leading-none uppercase myFlex">M</p>
                  </div>
                </div> */}

                <div className="w-full flex items-center justify-start gap-x-1.5 mt-10">
                  <p className="h-[36px] aspect-square bg-[#414141] dark:bg-[#E9E6DE] rounded-full text-[10px] text-[#E9E6DE] dark:text-[#414141] tracking-[0.05em] font-SatoshiBold leading-none uppercase myFlex">S</p>
                  <p className="h-[36px] aspect-square text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase myFlex">M</p>
                  <p className="h-[36px] aspect-square text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase myFlex">L</p>
                  <p className="h-[36px] aspect-square text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase myFlex">XL</p>
                </div>

                <div className="w-full min-h-[100px] flex items-start justify-start gap-x-2.5 mt-10 overflow-x-auto no-scrollbar">
                  <div className="min-w-[25%] h-full rounded-xl bg-[#F2F0EA] dark:bg-[#212121]"></div>
                  <div className="min-w-[25%] h-full rounded-xl bg-[#F2F0EA] dark:bg-[#212121]"></div>
                  <div className="min-w-[25%] h-full rounded-xl bg-[#F2F0EA] dark:bg-[#212121]"></div>
                  <div className="min-w-[25%] h-full rounded-xl bg-[#F2F0EA] dark:bg-[#212121]"></div>
                </div>

                <button className="w-full min-h-[42.5px] bg-[#414141] dark:bg-[#111111] rounded-full mt-10">
                  <p onClick={() => router.push("/checkout")} className="text-[10px] text-[#E9E6DE] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                    BUY
                  </p>
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
   );
}
 
export default StoreCard;