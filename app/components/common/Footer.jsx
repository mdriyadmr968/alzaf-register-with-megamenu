
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p>Your go-to place for amazing products!</p>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-md font-semibold">Connect with Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-500">
              Instagram
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p>
            &copy; {new Date().getFullYear()} Alzaf. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
