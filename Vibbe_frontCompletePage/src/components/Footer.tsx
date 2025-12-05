import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <nav className="flex flex-wrap items-center justify-center gap-8">

          <Link 
            to="/privacypolicy"
            className="text-base hover:opacity-70 transition-opacity"
            style={{ color: '#ffffff', fontWeight: 400 }}
          >
            Privacy Policy
          </Link>

          <Link 
            to="/terms"
            className="text-base hover:opacity-70 transition-opacity"
            style={{ color: '#ffffff', fontWeight: 400 }}
          >
            Terms And Services
          </Link>

          <Link 
            to="/cancellation"
            className="text-base hover:opacity-70 transition-opacity"
            style={{ color: '#ffffff', fontWeight: 400 }}
          >
            Cancellation Policy
          </Link>

        </nav>

        <p 
          className="text-base"
          style={{ color: '#ffffff', fontWeight: 400 }}
        >
          All rights reserved. 2025, Vibbe.
        </p>

      </div>
    </footer>
  );
}