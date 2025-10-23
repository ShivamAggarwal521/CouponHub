import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg">
                <span className="font-bold text-xl">🎫</span>
              </div>
              <span className="font-bold text-xl">CouponBazaar</span>
            </div>
            <p className="text-gray-300 text-sm">
              India's leading platform for buying and selling unused coupons. 
              Save money while helping others monetize their unused offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/browse" className="block text-gray-300 hover:text-white transition-colors">
                Browse Coupons
              </Link>
              <Link to="/sell" className="block text-gray-300 hover:text-white transition-colors">
                Sell Coupon
              </Link>
              <Link to="/how-it-works" className="block text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-gray-300 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link to="/safety" className="block text-gray-300 hover:text-white transition-colors">
                Safety Guidelines
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-300" />
                <span className="text-gray-300 text-sm">support@couponbazaar.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-300" />
                <span className="text-gray-300 text-sm">+91 9876543210</span>
              </div>
              <p className="text-gray-300 text-sm">
                Available Mon-Fri, 9 AM - 6 PM IST
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 CouponBazaar. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;