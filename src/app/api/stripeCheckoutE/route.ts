import Stripe from 'stripe';
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST(request: Request){
  
  const { product, billingInfo } = await request.json();


  try{

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: product.price,
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      payment_method_types: ['card', 'amazon_pay', 'klarna', 'cashapp'], // If is bigger than $$50 we can activate 'affirm'

    });
    

    return NextResponse.json({success: true, response: { clientSecret: paymentIntent.client_secret }});
    
  }catch(error){
    console.log(error);

    return NextResponse.json({success: false, response: error})
  }
};