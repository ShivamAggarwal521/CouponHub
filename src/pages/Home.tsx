import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, DollarSign, Star, TrendingUp, Users } from 'lucide-react';
import { platforms, mockCoupons, categories } from '../data/mockData';
import CouponCard from '../components/CouponCard';

const Home: React.FC = () => {
  const featuredCoupons = mockCoupons.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Unused
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Coupons Into Cash
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              India's largest marketplace for buying and selling unused coupons from Paytm, PhonePe, Swiggy, and more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/browse"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Browse Coupons</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/sell"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Sell Your Coupon</span>
                <DollarSign size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50,000+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">₹2.5 Crore</h3>
              <p className="text-gray-600">Money Saved</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">4.8/5</h3>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support for All Major Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Buy and sell coupons from your favorite brands and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {platform.logo}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to start saving or earning money
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up & Verify</h3>
              <p className="text-gray-600">
                Create your account and verify your identity for a safe trading experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Post or Browse</h3>
              <p className="text-gray-600">
                List your unused coupons or browse available coupons from other users
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safe Transaction</h3>
              <p className="text-gray-600">
                Complete secure transactions with our escrow protection and rating system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coupons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Coupons
              </h2>
              <p className="text-xl text-gray-600">
                Latest and best deals from verified sellers
              </p>
            </div>
            <Link
              to="/browse"
              className="hidden md:flex bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors items-center space-x-2"
            >
              <span>View All</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/browse"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Coupons</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CouponBazaar?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield size={48} className="mx-auto mb-6 text-blue-200" />
              <h3 className="text-xl font-semibold mb-4">100% Safe & Secure</h3>
              <p className="text-blue-100">
                Advanced security measures and escrow protection for all transactions
              </p>
            </div>
            <div className="text-center">
              <Clock size={48} className="mx-auto mb-6 text-blue-200" />
              <h3 className="text-xl font-semibold mb-4">Instant Deals</h3>
              <p className="text-blue-100">
                Get instant access to coupons and start saving money right away
              </p>
            </div>
            <div className="text-center">
              <DollarSign size={48} className="mx-auto mb-6 text-blue-200" />
              <h3 className="text-xl font-semibold mb-4">Best Prices</h3>
              <p className="text-blue-100">
                Competitive pricing and great deals from verified sellers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Saving Money?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who are already saving money with unused coupons
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              to="/browse"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              Browse Coupons
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;