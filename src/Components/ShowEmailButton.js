import React, { useState } from "react";
import recaptcha from "./Recaptcha";
import Recaptcha from "./Recaptcha";
import { Button } from "@mui/material";

const ShowEmailButton = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleVerify = (verified) => {
    setIsVerified(verified);
    if (verified) {
      setShowEmail(true);
    }
  };

  return (
    <div>
      {!isVerified && (
        <button onClick={() => setIsVerified(true)}>Show Email</button>
      )}
      {
        <div
          style={{
            display: isVerified && !showEmail ? "block" : "none",
          }}
        >
          <Recaptcha onVerify={handleVerify} />
        </div>
      }
      {showEmail && (
        <div>
          <a href="mailto:muminelsayed@gmail.com">Send me an Email!</a>
        </div>
      )}
    </div>
  );
};

export default ShowEmailButton;
