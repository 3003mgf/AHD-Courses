import Logo from "./Image";

const Footer = () => {
  return ( 
    <footer className="w-full h-[80vh] overflow-hidden flex items-start justify-end flex-col relative bg-gradient-to-b from-transparent to-[#F2F0EA99] dark:to-[#141414]">
      
      <div className="w-full px-[60px] mb-[55px]">
        <div className="w-full flex items-center justify-between mb-[28px] uppercase">
          <div className="flex items-center gap-x-5">
            <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em]">Instagram{"\u00A0"}{"\u00A0"}~</p>
            {/* <p className="text-[10px] text-[#212121] font-SatoshiBold tracking-[0.05em]">Linkedin</p>
            <p className="text-[10px] text-[#212121] font-SatoshiBold tracking-[0.05em]">Skool</p> */}
          </div>

          <p className="text-[10px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBold tracking-[0.05em]">
            The Youth Culture.
          </p>

        </div>

        <div className="w-full h-[1px] bg-[#d7d4cd50] dark:bg-[#5A5A5A50] rounded-full"></div>
      </div>

      <div className="w-full flex items-center justify-between px-[60px] mb-[420px]">
        
        <div className="flex gap-x-5">
          <p className="text-[10px] text-[#FFA300] font-SatoshiBold tracking-[0.05em] uppercase">•</p>
          <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] font-SatoshiBold tracking-[0.05em] uppercase">Social Media is beautiful.</p>
        </div>

        <div className="flex gap-x-5">
        
          <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] hover:text-[#FFA300] hover:dark:text-[#FFA300] font-SatoshiBold tracking-[0.05em] uppercase transition-colors duration-100 cursor-pointer">
            Print
          </p>

          <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] hover:text-[#FFA300] hover:dark:text-[#FFA300] font-SatoshiBold tracking-[0.05em] uppercase transition-colors duration-100 cursor-pointer">
            Privacy
          </p>
          
          <p className="text-[10px] text-[#d7d4cd] dark:text-[#5A5A5A99] hover:text-[#FFA300] hover:dark:text-[#FFA300] font-SatoshiBold tracking-[0.05em] uppercase transition-colors duration-100 cursor-pointer">
            Press
          </p>

          <p className="text-[10px] text-[#FFA300] font-SatoshiBold tracking-[0.05em] uppercase">
            —
          </p>
        </div>
      </div>
      {/* Content */}
      {/* <div className="w-full flex items-start justify-between px-[60px]">
        <section className="w-[30%] flex items-start justify-start flex-col gap-y-3.5 opacity-0">
          <div className="w-[40px] h-[40px] rounded-lg bg-[#212121] myFlex mb-1">
            <RollingIcon/>
          </div>

          <p className="text-[10px] font-SatoshiBold w-[70%] text-[#181817] pl-[1.75px] uppercase">
            Online <span className="font-SatoshiBlack">UX/UI</span> Design Training for Team and Individuals.
          </p>

          <div className="myFlex gap-3.5 mt-1 syne">
            <button className="w-[110px] h-[37.5px] bg-[#212121] rounded-lg myFlex text-sm text-[#FFFEF3]">
              
            </button>
            <button className="w-[110px] h-[37.5px] bg-[#F2F0EA] rounded-lg myFlex text-sm text-[#181817]">
              
            </button>
          </div>
        </section>

        <section className="w-[65%] flex items-start justify-start gap-x-5">
          {DUMMY_LINKS.map((object, index)=> (
            <div
              className="flex items-start justify-start flex-col w-[25%]"
              key={`FOOTER_LINK_CONTAINER_${object.title}`}
            >
              <p className="text-[#6966DC] text-[10.5px] tracking-[0.05em] font-SatoshiMedium uppercase">{object.title}</p>

              <div className="w-full flex items-start justify-start flex-col gap-y-3 mt-3">
                {object.list.map((link)=>(
                  <Link
                    key={`FOOTER_LINK_${link.name}`}
                    href={link.href}
                    className="text-[#787777] text-[10.5px] tracking-[0.05em] font-SatoshiMedium uppercase"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div> */}
      
      {/* Banner */}
      <Logo/>
   
    </footer> 
  );
}
 
export default Footer;