import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export function Footer() {
  return (
    <>
      <footer className="px-4 py-8 w-full bg-black">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-white/30 ">
              Logo
            </div>
            <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
              <li>
                <Link to="/terms" className="text-white hover:underline">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white hover:underline">Privacy</Link>
              </li>
            </ul>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <Link to="/instagram" className="text-white hover:underline">Instagram</Link>
            </li>
            <li>
              <Link to="/facebook" className="text-white hover:underline">Facebook</Link>
            </li>
            <li>
              <Link to="/twitter" className="text-white hover:underline">Twitter</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
