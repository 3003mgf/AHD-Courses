type Props = {
  tag: string;
  title: string;
  description: string;
};

const Intro = ({tag, title, description}: Props) =>{
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="text-[10px] tracking-[0.05em] text-[#F2B347] font-SatoshiBold leading-none mt-[15px]">
          {tag?.toUpperCase()}  •
        </p>
      
        <div className="flex gap-x-2.5">
          <div className="w-[36px] h-[36px] rounded-full bg-[#414141] dark:bg-[#212121] relative">

          </div>
        </div>
      </div>

      <p className="text-[40px] text-[#414141] dark:text-[#E9E6DE] font-SatoshiBlack leading-none mt-10">
        {title}
      </p>

      <p className="mt-5 text-[12.5px] text-[#414141] dark:text-[#E9E6DE90] inconsolata font-[500] px-[1.5px]">
        {description || "- - -"}
      </p>
    </>
  )
};

export default Intro;