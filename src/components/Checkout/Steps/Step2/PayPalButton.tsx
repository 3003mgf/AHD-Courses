import { FaPaypal } from "react-icons/fa";

const PayPalButton = () => {
  return ( 
    <div className="w-[23px] h-[23px] bg-[#333879] rounded-full cursor-pointer relative myFlex">
      <FaPaypal className="w-[12px] h-[12px] text-[#FFFEF3]"/>
    </div>
   );
}
 
export default PayPalButton;