import React, { useState } from "react";
import Cookie from "../assets/cookie.png";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CheckCircle } from "lucide-react";

function ProductCookie() {
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
    "View all browser cookies",
    "No tracking",
    "Privacy ki MKC",
  ];

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900 p-6 lg:p-12">
      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product Card */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="bg-white rounded-3xl shadow-2xl p-6 transform hover:-translate-y-3 transition-all duration-500 border border-gray-200">
            <img
              src={Cookie}
              alt="Cookie Stealer"
              className="w-full max-w-sm rounded-2xl mb-5 shadow-lg"
            />
            <h1 className="text-4xl font-extrabold mb-2">Cookie Stealer</h1>
            <p className="text-gray-600 mb-4">
             Clean , gui based software for stealing cookie from your client's computer. Easy and use
            </p>
            <form onSubmit={makePayment} className="flex flex-col gap-3">
              <CardElement className="bg-gray-100 p-2 rounded border border-gray-300" />
              <button
                type="submit"
                disabled={loading}
                className="bg-purple-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-purple-700 transition"
              >
                {loading ? "Processing..." : "Buy Now — $0.90"}
              </button>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && <div className="text-green-500 text-sm">Payment successful!</div>}
            </form>
          </div>

          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
        </div>

        {/* Features List */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Why Choose Cookie Stealer?</h2>
          <ul className="space-y-4">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700">{feat}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 mt-4">
            Developed by <span className="font-semibold">Mandip</span>
          </p>
        </section>
      </div>

      {/* Additional CTA Section */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to clean your cookies?</h3>
        <p className="text-gray-600 mb-6">Start managing your browser data in a few clicks.</p>
        <button
          onClick={makePayment}
          className="bg-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-700 transition"
        >
          Buy Cookie Manager — $0.90
        </button>
      </section>
    </main>
  );
}

export default ProductCookie;
