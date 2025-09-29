import React, { useState } from "react";
import Dos from "../assets/dos.png";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CheckCircle } from "lucide-react";

function ProductDos() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const makePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) {
      setError("Stripe not loaded");
      setLoading(false);
      return;
    }

    const apiurl = "http://localhost:5000";
    const body = { amount: 90, currency: "usd" };

    const response = await fetch(`${apiurl}/api/payment/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (data.error) {
      setError(data.error);
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: { card: cardElement },
    });

    if (result.error) setError(result.error.message);
    else if (result.paymentIntent?.status === "succeeded") setSuccess(true);

    setLoading(false);
  };

  const features = [
    "Open Source",
    "Fast",
    "Premium software experience",
  ];

  return (
    <main className="bg-white min-h-screen text-black px-6 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Product Showcase */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={Dos}
            alt="Dos Source Code"
            className="w-full max-w-md rounded-2xl shadow-xl mb-6"
          />
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">
            Dos Source Code ( iLLEGAL )
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
           A professional and user expolit src code for you 🫵
          </p>

          {/* Payment Form */}
          <form
            onSubmit={makePayment}
            className="w-full max-w-md space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <CardElement className="p-3 border rounded-md bg-white" />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              {loading ? "Processing..." : "Buy Now — $12.99"}
            </button>
            {error && <div className="text-red-600 text-sm">{error}</div>}
            {success && (
              <div className="text-green-600 text-sm">Payment successful!</div>
            )}
          </form>
        </div>

        {/* Features Section */}
        <section className="lg:pl-8">
          <h2 className="text-3xl font-bold mb-6">Why Choose DOS SRC CODE?</h2>
          <ul className="space-y-5">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-6 h-6 text-black" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 mt-6">
            Crafted with care by <span className="font-semibold">Mandip</span>
          </p>
        </section>
      </div>

      {/* Call to Action */}
      <section className="mt-24 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to take control of websites?
        </h3>
        <p className="text-gray-600 mb-6">
          Start managing your web data in a few codes.
        </p>
        <button
          onClick={makePayment}
          className="bg-black text-white font-semibold px-10 py-4 rounded-lg hover:bg-gray-900 transition"
        >
          Buy Cookie Manager — $12.99
        </button>
      </section>
    </main>
  );
}

export default ProductDos;
