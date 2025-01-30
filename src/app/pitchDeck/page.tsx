'use client'

import Footer from "@/components/Footer/Footer";
import Labs from "@/components/Labs/Labs";
import { data } from "@/components/Main/Alumni/Alumni.data";
import Row from "@/components/PitchDeck/Board/Row";
import { board } from "@/components/PitchDeck/PD.data";
import { useDarkMode } from "@/utils/zustand/zustand";

const About = () => {

  const isDarkMode = useDarkMode(state => state.isDarkMode);
  
  return ( 
    <div className="w-full min-h-screen flex items-start justify-start flex-col">
      
      {/* Top */}
      <div className="w-full h-[60vh] pb-[77px] flex items-end justify-start px-[60px] bg-[#F2F0EA99] dark:bg-[#141414] relative">
        <div className="w-full flex items-start justify-start">
          <div className="w-[23.5%]">
            <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none mt-[15px]">
              PITCH •
            </p>
            <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold leading-none mt-3.5 px-0.5 uppercase">
              # THE YOUTH CULTURE.
            </p>
          </div>
          <div className="w-[76.5%] flex flex-col relative">
            <p className="text-[62.5px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none pb-[10px]">
              ~ Pitch Deck.
            </p>

            {/* Editorial & Grid */}
            <div className="absolute top-[15px] right-0 flex items-center gap-x-5">
              {/* E */}
              {/* <p className="text-[10px] tracking-[0.05em] text-[#d7d4cd] font-SatoshiBold leading-none uppercase">
                <span className="text-[#FFA300]">#1</span>{'\u00A0'}{'\u00A0'}<span className="text-[#414141]">Online</span> <span className="text-[#787777]">Social Media</span> Academy.
              </p> */}
              
              {/* <p className="text-[10px] tracking-[0.05em] text-[#787777] font-SatoshiBold leading-none uppercase">[{"\u00A0"}{"\u00A0"}{"\u00A0"}]{"\u00A0"}{"\u00A0"}GRID</p> */}
            </div>
          </div>
        </div>

        {/* Cut */}
        <div className="absolute -bottom-[40px] left-0 w-full h-[100px]">
          <div className="w-full h-full relative">
            <img 
                src={
                  isDarkMode
                    ? "/images/Workshop/workshop-cut-11.svg" // Dark mode image
                    : "/images/Workshop/workshop-cut.svg"     // Light mode image
                }
                alt="_" 
                className="absolute w-full h-full object-cover"
              />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="w-full mt-[80px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
          ~ TEAM
        </p>

        <div className="w-full flex items-end justify-between mt-5">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
            Building Your
            <br />
            Social Media School.
          </p>
          
          {/* <div className="flex gap-x-1.5">
            <div className="w-[36px] h-[36px] rounded-full myFlex bg-[#F5F3ED] dark:bg-[#21212180]">
            
            </div>
            <div className="w-[36px] h-[36px] rounded-full myFlex bg-[#F5F3ED] dark:bg-[#21212180]">
              
            </div>
          </div> */}

          <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#F2B347] hover:dark:bg-[#F2B347] transition-colors duration-300">
            <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] transition-colors duration-300">
              REEL
            </p>
          </button>
        </div>

        <div className="w-full mt-[50px] overflow-hidden relative">
          <div className="w-full overflow-x-auto flex gap-x-5">
            {data.map((_, index) =>(
              <div key={`PITCH_DECK_TEAM_${index}`} className="min-w-[25vw] aspect-[1/1.3] rounded-[23px] relative overflow-hidden group border-[0px] border-[#212121]">
                
                <img src={_.image} alt="_" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none rounded-[24px]"/>


                <div className="absolute bottom-0 left-0 w-full h-[65%] bg-gradient-to-b from-transparent to-[#010101] z-10">

                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 right-0 h-full w-[2vw] bg-gradient-to-r from-transparent to-[#111111]"></div>
        </div>

      </div>

      
      {/* Board */}
      <div className="w-full mt-[190px] px-[120px]">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none uppercase">
          ~ BOARD
        </p>

        <div className="w-full flex items-end justify-between mt-5">
          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px]">
            What You'll Learn 
            <br />
            on This Workshop.
          </p>
  
        </div>

        <div className="w-full mt-[85px] overflow-hidden relative">
          {board.map((item, index) =>(
            <Row key={`BOARD_ROW_${index + 1}`} item={item} index={index}/>
          ))}
        </div>

      </div>


      {/* Market Size */}
      <div className="w-full mt-[190px] px-[120px]">
          <p className="text-[10px] tracking-[0.05em] text-[#FFA300] font-SatoshiBold leading-none uppercase">
            ~ MARKET R.
          </p>

          <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-[1.2] pb-[5px] mt-5">
            Join This
            <br />
            — Workshop.
          </p>

          <div className="w-full grid grid-cols-2 gap-[100px] mt-[100px]">
            {/* Full */}
            <div className="col-span-1 flex flex-col">
              <div className="pl-8">
                <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  ONLINE EDUCATION.
                </p>
              </div>
              <div className="min-h-[100px] border-l-[6px] border-[#F2B347] pl-8 py-1.5 mt-[50px] flex items-start justify-center flex-col gap-y-5 relative">
                <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">REVENUE</p>

                <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative overflow-visible">
                  ~ 203.80
                  <span className="absolute bottom-[4px] -right-9 text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">USD</span>
                </p>

                <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase mt-2.5">BILLION</p>
                
                <div className="absolute top-1/2 -translate-y-1/2 right-16">
                  <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#414141] hover:dark:bg-[#E9E6DE] transition-colors duration-300">
                    <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] group-hover:dark:text-[#111111] transition-colors duration-300">
                      SOURCE
                    </p>
                  </button>
                </div>
              </div>

              <div className="w-full h-[400px] rounded-[24px] bg-[#21212160] mt-[50px]">

              </div>
            </div>

            {/* Full */}
            <div className="col-span-1 flex flex-col">
              <div className="pl-8">
                <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] tracking-[0.05em] font-SatoshiBold leading-none uppercase">
                  DIGITAL MKT CO.
                </p>
              </div>
              <div className="min-h-[100px] border-l-[6px] border-[#F2B347] pl-8 py-1.5 mt-[50px] flex items-start justify-center flex-col gap-y-5 relative">
                <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">REVENUE</p>

                <p className="text-[#414141] dark:text-[#E9E6DE] text-[40px] font-SatoshiBlack leading-none relative overflow-visible">
                  ~ 1.06
                  <span className="absolute bottom-[4px] -right-9 text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase">USD</span>
                </p>

                <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] tracking-[0.05em] font-SatoshiBold leading-none uppercase mt-2.5">BILLION</p>
                
                <div className="absolute top-1/2 -translate-y-1/2 right-16">
                  <button className="w-[100px] h-[36px] bg-[#F5F3ED] dark:bg-[#212121] rounded-full group hover:bg-[#414141] hover:dark:bg-[#E9E6DE] transition-colors duration-300">
                    <p className="text-[10px] text-[#787777] tracking-[0.05em] font-SatoshiBold leading-none uppercase group-hover:text-[#FFFEF3] group-hover:dark:text-[#111111] transition-colors duration-300">
                      SOURCE
                    </p>
                  </button>
                </div>
              </div>

              <div className="w-full h-[400px] rounded-[24px] bg-[#21212160] mt-[50px]">

              </div>

           
            </div>

          </div>

      </div>


      
      <div className="w-full h-screen"></div>

      <Labs/>

      <Footer/>

    </div>
   );
}
 
export default About;