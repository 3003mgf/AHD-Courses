'use client'

type Item = {
  name: string;
  image: string;
  role: string;
};

const AlumniCard = ({item}:{item: Item}) => {
  return ( 
    <div 
      className="w-full aspect-[1/1.3] bg-[#1D1D1D50] dark:bg-[#21212160] rounded-[24px] myFlex overflow-clip relative"
    >
      {/* <img src={item.image} alt="_" className="absolute top-0 left-0 w-full h-full object-cover"/> */}
      {/* <div className="w-full aspect-[5/6.3] rounded-[20px] relative overflow-clip bg-[#1D1D1D50]">
      </div> */}
    </div>
   );
}
 
export default AlumniCard;