"use client";

import React, { useContext, useState } from "react";
import { useApi } from "../context/context";

const Testing: React.FC = () => {
  const {
    getCasinoPolicy,
    getCasinoTerms,
    sendResetPasswordEmail,
    registerPartner,
    signIn,
    getCurrentCasinoInfo,
    trackStag,
  } = useApi();

  // State to store responses
  const [policyResponse, setPolicyResponse] = useState("");
  const [termsResponse, setTermsResponse] = useState("");
  const [passwordResetResponse, setPasswordResetResponse] = useState("");

  // Testing functions
  const testPolicyApi = async () => {
    const response = await getCasinoPolicy();
    setPolicyResponse(JSON.stringify(response, null, 2));
  };

  const testTermsApi = async () => {
    const response = await getCasinoTerms();
    setTermsResponse(JSON.stringify(response, null, 2));
  };

  const testPasswordResetApi = async () => {
    const response = await sendResetPasswordEmail(
      "notexistingemail@example.com"
    );
    setPasswordResetResponse(JSON.stringify(response, null, 2));
  };

  return (
    <section id="home" className="py-20 bg-gray-900 text-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">
        TESTING API RESPONSES
      </h2>

      <div className="text-center space-y-4">
        <button
          onClick={testPolicyApi}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Test Policy API
        </button>
        <pre className="bg-gray-800 p-2 rounded text-left">
          {policyResponse}
        </pre>

        <button
          onClick={testTermsApi}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Test Terms API
        </button>
        <pre className="bg-gray-800 p-2 rounded text-left">{termsResponse}</pre>

        <button
          onClick={testPasswordResetApi}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Test Password Reset API
        </button>
        <pre className="bg-gray-800 p-2 rounded text-left">
          {passwordResetResponse}
        </pre>
      </div>
    </section>
  );
};

export default Testing;
