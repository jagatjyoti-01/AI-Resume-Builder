import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t shadow-sm mt-16 text-gray-700 dark:bg-gray-900 dark:text-gray-300 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Works Limited</h3>
          <p className="text-sm mb-2">
            Helping you craft job-winning resumes with ease and style.
          </p>
          <p className="text-sm text-blue-600 mt-2">
            Call Us: <a href="tel:8009857561" className="hover:underline">800-985-7561</a>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {['About', 'Accessibility', 'Contact', 'Privacy Policy', 'Terms of Service', 'Resume Templates'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-600 transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Socials & Logos */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 mb-4">
            {/* Replace these with actual icons */}
            <a href="#" className="hover:text-blue-600 transition">🌐</a>
            <a href="#" className="hover:text-blue-600 transition">🌐</a>
            <a href="#" className="hover:text-blue-600 transition">📘</a>
            <a href="#" className="hover:text-blue-600 transition">📸</a>
          </div>
          <div className="flex gap-4">
            <img src="https://images.ctfassets.net/6qcfpd094hd1/2GQ7JC4iHuJmYOrUjPZBOI/e35072194a01f7f0215a7acfe2e02c4d/ncda.png" alt="NCDA" className="h-8" />
            <img src="https://images.ctfassets.net/6qcfpd094hd1/7J2rkhUQ7m3zTrD1RWkOTd/2d7aaaf2b2c7fcf4ef7211577240f712/cprw.png" alt="PRWA" className="h-8" />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-gray-200 dark:border-gray-700 mt-6 text-xs px-6 py-4 max-w-7xl mx-auto space-y-2">
        <p>*Based on survey responses shared by 1,133 job seekers</p>
        <p>**The names and logos of the companies referred to above are all trademarks of their respective holders. Unless specifically stated otherwise, such references are not intended to imply any affiliation or association with Zety.</p>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-xs border-t border-gray-200 dark:border-gray-700">
        © 2025 Works Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
