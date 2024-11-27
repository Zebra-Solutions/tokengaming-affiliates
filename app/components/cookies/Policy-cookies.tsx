"use client";

import { useState, useEffect } from "react";

export default function PolicyCookies() {
  const [policyText, setPolicyText] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false); // Default to not showing
  const [loading, setLoading] = useState(true); // State for initial loading

  useEffect(() => {
    // Check localStorage to see if the user has already accepted or declined
    const popupDismissed = localStorage.getItem("cookiePolicyAccepted");
    if (popupDismissed !== "true") {
      setShowPopup(true);
    }
    setLoading(false); // Mark as finished checking

    async function fetchPolicy() {
      try {
        const response = await fetch("/api/proxyPolicy");
        if (response.ok) {
          const data = await response.json();
          setPolicyText(data.policy);
        }
      } catch (error) {
        console.error("Error fetching policy:", error);
      }
    }
    fetchPolicy();
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("cookiePolicyAccepted", "true");
    setShowPopup(false);
  };

  // Don't render the component while loading
  if (loading) return null;

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-0 right-0 w-full bg-[#353538c3] text-gray-50 rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Cookie Policy</h2>
      <p className="text-sm mb-4">
        {policyText || "Loading policy details..."}
      </p>
      <div className="flex justify-end gap-2">
        <button
          className="px-4 py-2 text-sm bg-gray-600 rounded hover:bg-gray-500"
          onClick={handleDismiss}
        >
          Decline
        </button>
        <button
          className="px-4 py-2 text-sm bg-blue-600 rounded hover:bg-blue-500"
          onClick={handleDismiss}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
