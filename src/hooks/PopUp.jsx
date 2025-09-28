import React, { useEffect, useState } from "react";

function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    // Generate a unique session ID if not exists
    let sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = crypto.randomUUID
        ? crypto.randomUUID()
        : Date.now().toString();
      localStorage.setItem("sessionId", sessionId);
    }

    localStorage.setItem("cookieConsent", "true");
    setShowPopup(false);

    console.log("✅ Cookie consent given, session ID:", sessionId);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 z-[9999]">
      <p className="text-sm sm:text-base max-w-2xl">
        We use cookies to improve your experience and track usage. By clicking{" "}
        <span className="font-semibold">Accept</span>, you agree to our cookie policy.
      </p>
      <button
        onClick={handleAccept}
        className="bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition shadow-md text-sm sm:text-base"
      >
        Accept
      </button>
    </div>
  );
}

export default CookiePopup;
