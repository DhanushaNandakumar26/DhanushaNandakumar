import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://github.com/DhanushaNandakumar26"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dhanusha-nandakumar"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default SocialMedia;
