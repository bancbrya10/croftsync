import { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <footer className="cs-footer">
      <p>© {new Date().getFullYear()} CroftSync LLC</p>
      <button className="cs-footer-link" onClick={() => setShowPolicy(true)}>
        Privacy Policy
      </button>

      {showPolicy && (
        <div className="cs-modal">
          <div className="cs-modal-content">
            <button className="cs-close" onClick={() => setShowPolicy(false)}>×</button>
            <PrivacyPolicy />
          </div>
        </div>
      )}
    </footer>
  );
}
