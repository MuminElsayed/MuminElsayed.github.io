import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub"; // Corrected import
import React from "react";

export default function MyLinksIcons({ iconSize = 24 }) {
  return (
    <div className="display-flex gap-m icon-bar">
      <a
        href="https://www.linkedin.com/in/mumin-elsayed-hemayed-b42379120/"
        target="_blank"
        rel="noopener noreferrer external"
      >
        <LinkedInIcon style={{ fontSize: iconSize }} />
      </a>
      <a
        href="https://github.com/MuminElsayed"
        target="_blank"
        rel="noopener noreferrer external"
      >
        <GitHubIcon style={{ fontSize: iconSize }} />
      </a>
    </div>
  );
}
