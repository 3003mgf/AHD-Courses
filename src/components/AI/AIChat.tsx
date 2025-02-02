'use client'

import { useState } from "react";
import { IoEllipsisHorizontal, IoFlashSharp, IoNavigate } from "react-icons/io5";
// import { motion } from "framer-motion";
import Welcome from "./AIChat/Welcome";
import { useAI } from "@/utils/zustand/zustand";

// const exitAnimation = {
//   exit: {
//     opacity: 0,
//     duration: 1
//   }
// };

// const enterAnimation = {
//   initial: {
//     opacity: 0
//   },
//   enter: {
//     opacity: 1,
//     transition: {duration: 1, delay: 0.5}
//   }
// };

const AIChat = () => {

  const [inputValue, setInputValue] = useState<string>("");
  const [isThinking, setIsThinking] = useState<boolean>(false);

  const [showWelcome, setShowWelcome] = useState<boolean>(true);


  const handleSubmit = () =>{
    if(!isThinking){
      
    };
  };

  return ( 
    <div 
      data-lenis-prevent
      className="w-full h-screen fixed top-0 left-0 z-[100]"
    >
      {/* Relative */}
      <div className='w-full h-screen relative p-[60px] bg-gradient-to-b from-[#FAF9F6] to-[#F5F3EF] dark:bg-[#0e0e0d50] myFlex'>
        
        {/* Content */}
        <div className="w-[40%] h-full flex flex-col">
          {showWelcome && (
            <Welcome/>
          )}

          {!showWelcome && (
            <div data-lenis-prevent className="w-[40%] h-full flex flex-col items-start justify-end pt-[60px] relative overflow-hidden">
              
              <div className="w-full flex flex-col gap-y-7 overflow-y-auto">
                {/* Question 1 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      In Which Workshop Can I Learn Social Media Automation Tools?
                    </p>
                  </div>
                </div>

                {/* Answer 1 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Oh! Building a professional website for your brand is a smart move. 
                        <br /><br />
                        Your perfect workshop would be <span className="font-bold text-[#F2B347]">Wix Studio</span>, led by <span className="font-bold">Lucia Miranda</span>  — In this workshop, you'll master the tools to design, customize, and launch a high-quality site that stands out. From layouts to advanced features, you'll learn how to build a site that truly represents your brand.
                        <br /><br /> 
                        The best part? It’s only <span className="font-bold">75 USD</span>!                      
                      </p>
                    </div>
                    
                    <div className="w-full flex gap-x-2.5 mt-6">
                      <button className="w-[72px] h-[30px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full">
                        <p className="text-[9.25px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                          JOIN
                        </p>
                      </button>

                      <button className="w-[72px] h-[30px] bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-[#171717] rounded-full group">
                        <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                          REEL
                        </p>
                      </button>

                    </div>


                  </div>
                </div>
                
                {/* Question 2 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      What's the Best Social Media Platform to Grow Fast?
                    </p>
                  </div>
                </div>

                {/* Answer 2 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Great question! While there are many platforms to grow on, my specialty is helping you find the perfect Workshop to master them. 
                        <br /><br />
                        Tell me about your goals, and I'll recommend the best Workshop for you!                   
                      </p>
                    </div>

                  </div>
                </div>

                {/* Question 3 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      I’ve heard bananas are yellow, but do they come in other colors too?
                    </p>
                  </div>
                </div>

                {/* Answer 3 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Haha, yes they do! Bananas are typically yellow, but there are also green and red varieties. I love a fun fact, but I'm here to help you find the perfect workshop to reach your goals.
                        <br /><br />
                        Tell me what you're looking to learn, and I'll find the best workshop for you!                 
                      </p>
                    </div>

                  </div>
                </div>

                {/* Question 4 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      aieduidihweuif
                    </p>
                  </div>
                </div>

                {/* Answer 4 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex flex-col">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Oops, I couldn't understand that! Please make sure your request is related to finding the right Workshop for your goals.           
                      </p>
                      <br />

                      <p className="w-fit text-[11px] text-[#AE4A3F] dark:text-[#E9E6DE90] inconsolata font-[500] bg-[#FEDDD6] px-[8px] py-[4px] rounded-md">
                        Our AI is designed to help you find the perfect Workshop.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Question 5 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      I’m looking to learn how to set up a professional website and manage my brand through an all-in-one platform. I want to integrate e-commerce, membership features, and automate a lot of the processes.
                    </p>
                  </div>
                </div>

                {/* Answer 5 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex flex-col">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Sounds like you’re building something amazing! While we don't have a specific Workshop for an all-in-one platform setup just yet, we do have several Workshops that could help you get closer to your goals. 
                        <br /><br /> 
                        You might want to check out our <span className="font-bold">Wix Studio</span> Workshop for building a professional website, or our <span className="font-bold">Automation</span> and <span className="font-bold">ManyChat</span> Workshops to automate parts of your business.
                      </p>             
                    </div>
                  </div>
                </div>

                {/* Question 6 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      I'm Looking to Learn how to Build a Rocket.
                    </p>
                  </div>
                </div>

                {/* Answer 6 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex flex-col">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Oh, building rockets? I’ve got just the workshop for you — Rocket Science for Beginners. You’ll be launching in no time! 🚀 …Nah, I’m kidding! 😄 <span className="font-bold">A Hottie Dump</span> is actually all about helping you learn tools to succeed on Digital Marketing and Social Media. If you’re ready to blast off your online presence, I’m here to help you find the perfect workshop to do just that!
                      </p>             
                    </div>
                  </div>
                </div>

                {/* Question 7 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      I Want To Learn Everything From Scratch To Succeed. I Need The Professional Tools And Knowledge To Be The Best At Creating And Selling MRR Products On Instagram.
                    </p>
                  </div>
                </div>

                {/* Answer 7 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        Oh! Starting with a solid foundation and the right tools is crucial to your success.
                        <br /><br />
                        Your perfect workshop would be <span className="font-bold text-[#F2B347]">AHD</span>, led by <span className="font-bold">Industry Experts</span>  — In this comprehensive workshop, you'll learn everything you need to build your brand and grow your business. From setting up your Hostinger, Stripe, and PayPal accounts to mastering branding and crafting the perfect Instagram Reels, Stories, and profile setup. You’ll dive into advertisement strategies, Capcut, Canva, and advanced tools like Wix Studio for website building, Stan Store, Systeme, Beacons, and Shopify for e-commerce, and even Hotmart for affiliate marketing.
                        <br /><br /> 
                        You'll also master ManyChat automation, the Instagram algorithm, ChatGPT prompt engineering, Adobe FireFly for generating images and vectors, and professional copywriting skills to help you monetize. Plus, you’ll learn about email marketing, sales strategies, and how to sell on Instagram Stories with effective techniques.
                        <br /><br /> 
                        The best part? It’s only <span className="font-bold">500 USD</span>!                      
                      </p>
                    </div>
                    
                    <div className="w-full flex gap-x-2.5 mt-6">
                      <button className="w-[72px] h-[30px] bg-[#414141] dark:bg-[#E9E6DE] rounded-full">
                        <p className="text-[9.25px] text-[#F5F3EF] dark:text-[#141414] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                          JOIN
                        </p>
                      </button>

                      <button className="w-[72px] h-[30px] bg-gradient-to-b from-[#faf9f6] to-transparent dark:from-[#171717] rounded-full group">
                        <p className="text-[10px] text-[#787777] dark:text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                          REEL
                        </p>
                      </button>

                    </div>


                  </div>
                </div>

                {/* Question 8 */}
                <div className="w-full flex items-start justify-end">
                  <div className="w-[50%] bg-[#414141] rounded-2xl p-4 flex items-center justify-start">
                    <p className="text-[12px] text-[#E9E6DE] dark:text-[#E9E6DE90] inconsolata font-[500]">
                      I’ve seen A Hottie Dump also has individual workshops. Shouldn't I start with those?
                    </p>
                  </div>
                </div>

                {/* Answer 8 */}
                <div className="w-full flex items-start justify-start gap-x-2.5">
                  <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex"></div>
                  <div className="w-full bg-[#fffefe] rounded-2xl relative flex flex-col p-4">
                  
                
                    <div className="w-full flex items-center justify-between">
                      <p className="text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500]">
                        That’s a valid point! While individual workshops focus on specific aspects, they can end up being more expensive, and you’d only be covering one part of what you need to know. The <span className="font-bold text-[#F2B347]">AHD</span> Workshop, on the other hand, gives you everything in one package.
                        <br /><br /> 
                        By starting with The <span className="font-bold text-[#F2B347]">AHD</span> Workshop, you get a comprehensive, all-in-one education that saves you money and time. It’s the most cost-effective way to ensure you have the full toolkit to succeed!                   
                      </p>
                    </div>
            
                  </div>
                </div>

              </div>

            </div>
          )}
          

          {/* Input */}
          <div onClick={(e) => e.stopPropagation()} className="w-full flex gap-x-2.5 mt-10">
            <div className="h-[40px] aspect-square rounded-full bg-[#414141] myFlex">
              <IoFlashSharp className="w-[18px] h-[18px] text-[#E9E6DE75]" />
            </div>

            <div className="w-full flex items-center justify-between h-[40px] rounded-full bg-[#FFFEFE] p-1">
              <div className="h-full aspect-square rounded-full bg-[#F1EFEA] myFlex">
                <IoEllipsisHorizontal className="w-3.5 h-3.5 text-[#414141]" />
              </div>

              <div className="h-full flex flex-1 items-center justify-start px-2.5">
                <input 
                  type='text'
                  className={`
                    w-full
                    text-[12px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500] px-[1.5px]
                    placeholder:text-[#41414150] placeholder:text-[12px] placeholder:font-[500]
                    focus:border-none focus:outline-none focus:shadow-none
                  `}
                  placeholder="Hello..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                >
                  
                </input>
              </div>

              <div className="h-full aspect-square rounded-full bg-[#F2B347] myFlex">
                <IoNavigate className="w-3.5 h-3.5 text-[#F8F6F3]"/>
              </div>
            </div>
          </div>
        </div>

        
        <Top/>
        <Shapes/>
        
      </div>
    </div>
   );
}
 
export default AIChat;



const Top = () =>{

  const setIsOpen = useAI(state => state.setIsOpen);

  return (
    <div className="absolute top-0 left-0 w-full h-[90px] flex items-center justify-between px-[60px]">
      
      {/* Logo */}
      <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] myFlex">
        <img src="https://cdn.brandfetch.io/id9IJJnIpA/theme/light/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" alt="_" className="w-[50%] h-auto"/>
      </div>


      {/* Close */}
      <div onClick={() => setIsOpen(false)} className="w-[36px] h-[36px] rounded-full bg-[#F1EFEA] dark:bg-[#212121] myFlex cursor-pointer">
        
      </div>
    </div>
  );
};


const Shapes = () =>{
  return (
    <>
      {/* Shape Left */}
      <div className="absolute -bottom-[15%] left-0 w-[27.5%] h-[60%] -scale-x-[1] -rotate-[45deg]">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M951 59C902-9 412-413 399-10c-1 40 23 131 234 220-249-55-373-36-403 2-11 13-12 29-3 46 31 57 188 126 442 128-100 16-172 34-219 48-87 26-141 54-150 77-2 7-1 14 5 19 24 25 140 19 328-29-205 84-329 163-334 200-1 6 2 12 7 16 26 17 140-14 337-112-115 79-177 141-173 175 1 10 8 17 19 21 53 16 230-55 401-216 170-160 245-232 61-526z"></path>
          </svg>
        </div>
      </div>

      {/* Shape Right */}
      <div className="absolute -bottom-[5.5%] right-0 w-[25%] h-[60%] ">
        <div className="w-full h-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 950" className="w-full h-auto fill-[#e9e6de6b] dark:fill-[#181818] overflow-visible">
            <path d="M917 37C676-335 116-241 659 451c-341 163-469 452 54 274-183 343-167 767 205 148 64 226 451 601 338-271 267 16 526-234 183-322 184-141-125-226-277-6 131-515 35-890-245-237z"></path>
          </svg>
        </div>
      </div>
    </>
  )
};