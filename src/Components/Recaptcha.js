import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RecaptchaComponent = ({ onVerify }) => {
  const handleVerify = (token) => {
    if (token) {
      onVerify(true);
    }
  };

  const handleError = (error) => {
    console.error("reCAPTCHA error:", error);
  };

  const handleExpired = () => {
    console.warn("reCAPTCHA expired");
  };

  return (
    <ReCAPTCHA
      sitekey="6LcPdj8qAAAAAKteWFAb4DbtgLUXFTLDNvE_0GIO"
      onChange={handleVerify}
      onErrored={handleError}
      onExpired={handleExpired}
    />
  );
};

export default RecaptchaComponent;
