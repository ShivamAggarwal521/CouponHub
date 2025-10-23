import React, { useState } from 'react';
import { ChevronDown, ChevronRight, User, Search, ShoppingCart, DollarSign, Shield, Star, Clock, CheckCircle, AlertTriangle, Users, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'seller'>('buyer');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const buyerSteps = [
    {
      icon: User,
      title: 'Sign Up & Verify',
      description: 'Create your account and complete the verification process for secure transactions.',
      details: [
        'Quick registration with email or phone',
        'Identity verification for safety',
        'Set up your payment preferences',
        'Complete your profile'
      ]
    },
    {
      icon: Search,
      title: 'Browse & Search',
      description: 'Find the perfect coupons using our advanced search and filter options.',
      details: [
        'Search by platform, category, or price',
        'Filter by discount percentage',
        'Check seller ratings and reviews',
        'View detailed coupon information'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Purchase Safely',
      description: 'Buy coupons with confidence using our secure payment system.',
      details: [
        'Secure payment processing',
        'Escrow protection for all transactions',
        'Instant coupon code delivery',
        'Money-back guarantee'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Use & Save',
      description: 'Apply your coupon codes and enjoy the savings on your favorite platforms.',
      details: [
        'Receive coupon codes instantly',
        'Clear usage instructions provided',
        'Customer support if needed',
        'Rate your experience'
      ]
    }
  ];

  const sellerSteps = [
    {
      icon: User,
      title: 'Create Account',
      description: 'Join our platform and get verified to start selling your unused coupons.',
      details: [
        'Free account registration',
        'Identity verification process',
        'Bank account linking',
        'Profile setup and customization'
      ]
    },
    {
      icon: DollarSign,
      title: 'List Your Coupons',
      description: 'Upload your unused coupons with photos and set competitive prices.',
      details: [
        'Easy coupon listing process',
        'Upload multiple photos',
        'Set your own prices',
        'Add detailed descriptions'
      ]
    },
    {
      icon: Shield,
      title: 'Secure Transaction',
      description: 'When someone buys your coupon, we handle the secure transaction process.',
      details: [
        'Automatic buyer matching',
        'Secure payment processing',
        'Escrow protection',
        'Transaction monitoring'
      ]
    },
    {
      icon: Star,
      title: 'Get Paid',
      description: 'Receive payment directly to your account after successful coupon delivery.',
      details: [
        'Instant payment processing',
        'Multiple payout options',
        'Build your seller reputation',
        'Earn from unused coupons'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '100% Secure',
      description: 'Advanced security measures protect all transactions'
    },
    {
      icon: Clock,
      title: 'Instant Delivery',
      description: 'Get your coupon codes immediately after purchase'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'Join thousands of verified buyers and sellers'
    },
    {
      icon: TrendingUp,
      title: 'Best Prices',
      description: 'Competitive pricing with maximum savings'
    }
  ];

  const faqs = [
    {
      question: 'How do I know if a coupon is genuine?',
      answer: 'All sellers are verified, and we have a strict verification process for coupons. We also offer a money-back guarantee if a coupon doesn\'t work.'
    },
    {
      question: 'What happens if a coupon doesn\'t work?',
      answer: 'We offer a full refund if a purchased coupon doesn\'t work as described. Our customer support team will investigate and process your refund within 24 hours.'
    },
    {
      question: 'How quickly do I get paid as a seller?',
      answer: 'Payments are processed instantly after successful coupon delivery. The money is transferred to your linked bank account or digital wallet.'
    },
    {
      question: 'Are there any fees for using the platform?',
      answer: 'Buying coupons is free for buyers. Sellers pay a small commission (5-10%) only when they successfully sell a coupon.'
    },
    {
      question: 'Can I sell expired coupons?',
      answer: 'No, only valid and unexpired coupons can be listed on our platform. We regularly check and remove expired listings.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Simple steps to start buying or selling coupons and maximize your savings
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('buyer')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'buyer'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Buyers
              </button>
              <button
                onClick={() => setActiveTab('seller')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'seller'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                For Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeTab === 'buyer' ? 'How to Buy Coupons' : 'How to Sell Coupons'}
            </h2>
            <p className="text-xl text-gray-600">
              {activeTab === 'buyer' 
                ? 'Start saving money in just 4 simple steps'
                : 'Turn your unused coupons into cash easily'
              }
            </p>
          </div>

          <div className="space-y-8">
            {(activeTab === 'buyer' ? buyerSteps : sellerSteps).map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <step.icon className="text-blue-600" size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-4">
                      {step.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
            <p className="text-xl text-blue-100">
              The most trusted platform for coupon trading in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                  <benefit.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our platform
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="text-blue-600" size={20} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={20} />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 animate-fadeIn">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who are already saving and earning money
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Buying
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;