import Stripe from 'stripe';
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


export async function POST(request: Request){
  
  const { product, billingInfo } = await request.json();


  try{

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'amazon_pay', 'klarna', 'cashapp'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name, // Customize as needed
              description: "A Hottie Dump",
              images: ['https://fearofgod.com/cdn/shop/files/FG24FW20-0172MER_FULL_ZIP_SWEATER-MELANGE_BLACK_1_x2550.jpg?v=1721833238']
            },
            unit_amount: product.price * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:3000/checkout?status=success`,
      cancel_url: `http://localhost:3000/checkout`,
      metadata: {
        ...billingInfo
      }
    });
    

    return NextResponse.json({success: true, response: { id: session.id }});
    
  }catch(error){
    console.log(error);

    return NextResponse.json({success: false, response: error})
  }
};