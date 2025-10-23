import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, Users, FileText, Phone, Mail } from 'lucide-react';

const SafetyGuidelines: React.FC = () => {
  const safetyTips = [
    {
      icon: Shield,
      title: 'Verify Before You Buy',
      description: 'Always check seller ratings, reviews, and verification status before making a purchase.',
      tips: [
        'Look for verified seller badges',
        'Read previous buyer reviews',
        'Check seller response time',
        'Verify coupon expiry dates'
      ]
    },
    {
      icon: Eye,
      title: 'Inspect Coupon Details',
      description: 'Carefully review all coupon information and terms before purchasing.',
      tips: [
        'Read all terms and conditions',
        'Check minimum order requirements',
        'Verify applicable platforms',
        'Confirm usage restrictions'
      ]
    },
    {
      icon: Lock,
      title: 'Secure Transactions',
      description: 'Use only our secure payment system for all transactions.',
      tips: [
        'Never pay outside the platform',
        'Use escrow protection',
        'Keep transaction records',
        'Report suspicious activity'
      ]
    },
    {
      icon: Users,
      title: 'Community Guidelines',
      description: 'Follow our community standards to maintain a safe environment.',
      tips: [
        'Be honest in listings',
        'Communicate respectfully',
        'Report inappropriate content',
        'Help maintain platform integrity'
      ]
    }
  ];

  const redFlags = [
    {
      icon: AlertTriangle,
      title: 'Too Good to Be True Prices',
      description: 'Be cautious of coupons priced significantly below market value'
    },
    {
      icon: AlertTriangle,
      title: 'Pressure to Buy Quickly',
      description: 'Avoid sellers who pressure you to make immediate purchases'
    },
    {
      icon: AlertTriangle,
      title: 'External Payment Requests',
      description: 'Never pay outside our secure platform payment system'
    },
    {
      icon: AlertTriangle,
      title: 'Unverified Sellers',
      description: 'Be extra cautious with new or unverified seller accounts'
    },
    {
      icon: AlertTriangle,
      title: 'Poor Communication',
      description: 'Avoid sellers who are unresponsive or provide vague answers'
    },
    {
      icon: AlertTriangle,
      title: 'No Clear Photos',
      description: 'Be wary of listings without clear coupon screenshots'
    }
  ];

  const protectionFeatures = [
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'Your money is held securely until you confirm the coupon works'
    },
    {
      icon: CheckCircle,
      title: 'Verification System',
      description: 'All sellers undergo identity verification for your safety'
    },
    {
      icon: FileText,
      title: 'Dispute Resolution',
      description: '24/7 support team to help resolve any transaction issues'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Bank-grade encryption protects all your payment information'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Shield size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Safety Guidelines
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your safety is our priority. Learn how to trade coupons securely on our platform
          </p>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Essential Safety Tips
            </h2>
            <p className="text-xl text-gray-600">
              Follow these guidelines to ensure safe and secure transactions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safetyTips.map((tip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <tip.icon className="text-green-600" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {tip.description}
                    </p>
                    <ul className="space-y-2">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <li key={tipIndex} className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-gray-700">{tipItem}</span>
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

      {/* Red Flags Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Red Flags to Watch Out For
            </h2>
            <p className="text-xl text-gray-600">
              Be aware of these warning signs to avoid potential scams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redFlags.map((flag, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <flag.icon className="text-red-500 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {flag.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {flag.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Features */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Protect You
            </h2>
            <p className="text-xl text-blue-100">
              Multiple layers of security to ensure safe transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-30 transition-all duration-300">
                  <feature.icon size={40} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Report Suspicious Activity
              </h2>
              <p className="text-xl text-gray-600">
                Help us maintain a safe community by reporting any concerns
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  What to Report:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Fake or invalid coupons',
                    'Sellers asking for external payments',
                    'Inappropriate or abusive behavior',
                    'Suspected fraud or scams',
                    'Violation of platform rules'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <AlertTriangle className="text-orange-500" size={16} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  How to Report:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Mail className="text-blue-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-gray-600">safety@couponbazaar.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Phone className="text-green-600" size={24} />
                    <div>
                      <p className="font-medium text-gray-900">24/7 Helpline</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start space-x-3">
                <Shield className="text-blue-600 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Your Privacy is Protected
                  </h4>
                  <p className="text-blue-800">
                    All reports are handled confidentially. We investigate every report 
                    thoroughly and take appropriate action to maintain platform safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Emergency Support
          </h2>
          <p className="text-xl text-red-100 mb-8">
            If you're experiencing an urgent safety issue, contact us immediately
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="mailto:emergency@couponbazaar.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyGuidelines;