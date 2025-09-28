
import React, { useState } from 'react';
import Cookie from '../assets/cookie.png';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

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
      setError('Stripe not loaded');
      setLoading(false);
      return;
    }
    const apiurl = 'http://localhost:5000';
    const body = {
      amount: 90, // $0.90 in cents
      currency: 'usd',
    };
    const response = await fetch(`${apiurl}/api/payment/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
      payment_method: {
        card: cardElement,
      },
    });
    if (result.error) {
      setError(result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      setSuccess(true);
    }
    setLoading(false);
  };

  const goToPayment = () => {
    navigate('/payment'); // your payment route
  };

  return (
    <main className="bg-black min-h-screen text-white p-6 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LHS: Visual / Quick CTA */}
        <aside className="flex flex-col items-center lg:items-start gap-6">
          <img
            src={Cookie}
            alt="Cookie Manager"
            className="w-full max-w-sm rounded-2xl shadow-xl border border-gray-800"
          />

          <div className="w-full max-w-sm text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold">Cookie Manager</h1>
            <p className="text-gray-300 mt-3">
              Clean, view and manage your browser cookies safely. Built for users who want
              privacy-first controls without the sketchy stuff.
            </p>

            <form onSubmit={makePayment} className="mt-6 flex flex-col gap-3">
              <CardElement className="bg-white text-black rounded p-2" />
              <button
                type="submit"
                disabled={loading}
                className="bg-white cursor-pointer text-black rounded-full px-6 py-3 font-semibold hover:opacity-95 transition"
              >
                {loading ? 'Processing...' : 'Buy Now — $0.90'}
              </button>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              {success && <div className="text-green-500 text-sm">Payment successful!</div>}
            </form>

            <a
              href="#features"
              className="self-center sm:self-start text-sm text-gray-300 underline hover:text-white mt-2"
            >
              See features
            </a>

            <p className="text-gray-400 text-sm mt-4">
              Developed by <span className="font-semibold">Mandip</span>
            </p>
          </div>
        </aside>

        {/* RHS: Details, Features, Tech */}
        <section className="space-y-8" id="features">
          {/* ...existing code... */}
        </section>
      </div>
    </main>
  );
}

export default ProductCookie;
