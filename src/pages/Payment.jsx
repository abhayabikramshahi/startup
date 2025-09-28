import React from 'react';


function Payment() {
  

  return (
    <div>
      <h1>Payment</h1>
      <button
        onClick={makePayment}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
