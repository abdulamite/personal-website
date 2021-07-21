import React from "react";

import {
    TiSocialTwitter,
    TiSocialGithub,
    TiSocialLinkedin,
} from "react-icons/ti";

export default function Socials() {
  return (
    <div className="socials">
      <h2>🧑‍💻 @ Me:</h2>
      <div className="contact-form"></div>
      <ul>
        <li>
          <a
            href="https://twitter.com/AbdulIsBomb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialTwitter size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/abdulamite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialGithub size={20} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abdul-shaikh-7a9583114/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <TiSocialLinkedin size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
}
