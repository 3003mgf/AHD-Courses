'use client'

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51QkpJqFmEnN2hcQc4PCItUHW02fofUZ1OON00tLsylsXRenGadHGBNY0gWpoAe9AOGCvjhDjHgUvgRmgqw6cu1rm000Sb7nfe2");


const StripeButton = () => {

  
  const handleStripe = async() =>{
    const stripe = await stripePromise;
    
    const response = await fetch('/api/stripeCheckout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        product: {
          name: "Bucket X Limited Edition",
          price: 73
        }
      }),
    });

    const data = await response.json();
    const { id } = data.response;

    await stripe!.redirectToCheckout({ sessionId: id });
    
  };


  return ( 
    <div onClick={handleStripe} className="w-[23px] h-[23px] bg-[#6860FF] rounded-full cursor-pointer relative overflow-clip myFlex">
      {/* <FaStripeS className="w-[11px] h-[11px] text-[#FFFEF3]"/> */}
    </div>
   );
}
 
export default StripeButton;