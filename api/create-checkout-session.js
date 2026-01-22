import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Lenca Co. Tee",
          },
          unit_amount: 2500,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${req.headers.origin}/success.html`,
    cancel_url: `${req.headers.origin}`,
  });

  res.json({ url: session.url });
}
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { product } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "https://fisher-cornhole-site.vercel.app/success.html",
      cancel_url: "https://fisher-cornhole-site.vercel.app",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
