import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions', count: 25 },
    { id: 'buying', name: 'Buying Coupons', count: 8 },
    { id: 'selling', name: 'Selling Coupons', count: 7 },
    { id: 'payments', name: 'Payments & Refunds', count: 5 },
    { id: 'account', name: 'Account & Security', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'buying',
      question: 'How do I know if a coupon is genuine?',
      answer: 'All sellers on our platform are verified through our strict verification process. We check seller identity, require proof of coupon ownership, and maintain a rating system based on buyer feedback. Additionally, we offer a money-back guarantee if a purchased coupon doesn\'t work as described.'
    },
    {
      id: 2,
      category: 'buying',
      question: 'What happens if a coupon doesn\'t work?',
      answer: 'If a purchased coupon doesn\'t work, you can report it through our platform within 24 hours of purchase. Our support team will investigate the issue and provide a full refund if the coupon is found to be invalid. We also take action against sellers who repeatedly list non-working coupons.'
    },
    {
      id: 3,
      category: 'buying',
      question: 'How quickly do I receive the coupon code after purchase?',
      answer: 'Coupon codes are delivered instantly after successful payment. You\'ll receive the code via email and it will also be available in your account dashboard. For high-value coupons, there might be a brief verification period of up to 30 minutes.'
    },
    {
      id: 4,
      category: 'buying',
      question: 'Can I return a coupon after purchase?',
      answer: 'Coupons can only be returned if they don\'t work as described or if there was an error in the listing. Since coupons are digital products, we don\'t accept returns for change of mind. However, if you encounter any issues, our support team is here to help.'
    },
    {
      id: 5,
      category: 'buying',
      question: 'Are there any hidden fees when buying coupons?',
      answer: 'No, there are no hidden fees for buyers. The price you see is the final price you pay. We don\'t charge any transaction fees, processing fees, or service charges to buyers. All fees are transparently displayed before you complete your purchase.'
    },
    {
      id: 6,
      category: 'buying',
      question: 'How can I verify a seller\'s credibility?',
      answer: 'You can check a seller\'s credibility by looking at their verification badge, reading reviews from previous buyers, checking their response time, and viewing their total sales count. Verified sellers have completed our identity verification process and have a proven track record.'
    },
    {
      id: 7,
      category: 'buying',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets like Paytm, PhonePe, and Google Pay. All payments are processed through secure, encrypted channels to protect your financial information.'
    },
    {
      id: 8,
      category: 'buying',
      question: 'Can I buy multiple coupons from the same seller?',
      answer: 'Yes, you can purchase multiple coupons from the same seller. You can either buy them individually or contact the seller for bulk purchase discounts. Some sellers offer special rates for bulk purchases.'
    },
    {
      id: 9,
      category: 'selling',
      question: 'How do I list my coupon for sale?',
      answer: 'To list your coupon, create an account, complete the verification process, then click "Sell Coupon" and fill in the details including title, description, platform, original value, selling price, and upload clear photos of your coupon. Our team reviews all listings before they go live.'
    },
    {
      id: 10,
      category: 'selling',
      question: 'How quickly do I get paid after selling a coupon?',
      answer: 'Payments are processed instantly after the buyer confirms successful coupon usage. The money is transferred to your linked bank account or digital wallet immediately. For new sellers, there might be a 24-hour verification period for the first few transactions.'
    },
    {
      id: 11,
      category: 'selling',
      question: 'What commission do you charge sellers?',
      answer: 'We charge a small commission of 5-10% only when you successfully sell a coupon. There are no listing fees, monthly charges, or upfront costs. The exact commission rate depends on the coupon value and your seller rating.'
    },
    {
      id: 12,
      category: 'selling',
      question: 'Can I edit my listing after posting?',
      answer: 'Yes, you can edit your listing details including price, description, and photos anytime before someone purchases it. However, you cannot change the fundamental details like platform or coupon code after posting.'
    },
    {
      id: 13,
      category: 'selling',
      question: 'What happens if my coupon expires before selling?',
      answer: 'If your coupon expires before selling, the listing will be automatically removed from our platform. We recommend pricing your coupons competitively and listing them well before their expiry date to ensure quick sales.'
    },
    {
      id: 14,
      category: 'selling',
      question: 'How do I increase my chances of selling?',
      answer: 'To increase sales chances: upload clear, high-quality photos; write detailed descriptions; price competitively; respond quickly to buyer inquiries; maintain a good seller rating; and list coupons well before their expiry date.'
    },
    {
      id: 15,
      category: 'selling',
      question: 'Can I sell partially used coupons?',
      answer: 'No, we only allow completely unused coupons to be sold on our platform. This ensures buyers get the full value they\'re paying for and maintains trust in our marketplace.'
    },
    {
      id: 16,
      category: 'payments',
      question: 'How does the escrow system work?',
      answer: 'When a buyer purchases your coupon, their payment is held in escrow. The buyer receives the coupon code and has 24 hours to confirm it works. Once confirmed, the payment is released to you. If there\'s an issue, our support team mediates the resolution.'
    },
    {
      id: 17,
      category: 'payments',
      question: 'What if there\'s a payment dispute?',
      answer: 'If there\'s a payment dispute, our support team investigates both sides of the issue. We review the coupon details, communication between buyer and seller, and any evidence provided. Our decision is final and binding for both parties.'
    },
    {
      id: 18,
      category: 'payments',
      question: 'How long do refunds take to process?',
      answer: 'Refunds are processed within 24-48 hours of approval. The time it takes to reflect in your account depends on your payment method - UPI and wallets are instant, while bank transfers may take 2-3 business days.'
    },
    {
      id: 19,
      category: 'payments',
      question: 'Can I change my payment method after purchase?',
      answer: 'Payment methods cannot be changed after completing a purchase. However, if you need to update your payment information for future transactions, you can do so in your account settings.'
    },
    {
      id: 20,
      category: 'payments',
      question: 'Are there any withdrawal limits for sellers?',
      answer: 'There are no withdrawal limits for verified sellers. However, new sellers may have a temporary limit of ₹10,000 per day for the first month as a security measure. This limit is automatically removed after successful completion of initial transactions.'
    },
    {
      id: 21,
      category: 'account',
      question: 'How do I verify my account?',
      answer: 'Account verification requires uploading a government-issued ID (Aadhaar, PAN, or Passport) and a recent photo. The process usually takes 24-48 hours. Verified accounts get priority support, higher trust ratings, and access to premium features.'
    },
    {
      id: 22,
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'No, each person is allowed only one account on our platform. Multiple accounts by the same person are against our terms of service and may result in permanent suspension of all associated accounts.'
    },
    {
      id: 23,
      category: 'account',
      question: 'How do I delete my account?',
      answer: 'You can delete your account by going to Settings > Account > Delete Account. Please note that this action is irreversible and you\'ll lose all your transaction history, ratings, and stored payment methods.'
    },
    {
      id: 24,
      category: 'account',
      question: 'What if I forget my password?',
      answer: 'Click on "Forgot Password" on the login page and enter your registered email or phone number. You\'ll receive a reset link or OTP to create a new password. If you still face issues, contact our support team.'
    },
    {
      id: 25,
      category: 'account',
      question: 'How is my personal information protected?',
      answer: 'We use bank-grade encryption to protect your personal information. Your data is stored on secure servers and we never share your personal details with third parties without your consent. We comply with all data protection regulations.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <HelpCircle size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about buying and selling coupons
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === faq.category)?.name.replace(' Coupons', '')}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="text-blue-600 transform transition-transform duration-200" size={20} />
                    ) : (
                      <ChevronRight className="text-gray-400 transform transition-transform duration-200" size={20} />
                    )}
                  </div>
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4 animate-fadeIn">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all categories
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you with any questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <MessageCircle className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get instant help from our support team
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Chat
              </button>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Mail className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-blue-100 text-sm mb-4">
                Send us your questions via email
              </p>
              <a
                href="mailto:support@couponbazaar.com"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <Phone className="mx-auto mb-4" size={40} />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-blue-100 text-sm mb-4">
                Call us for immediate assistance
              </p>
              <a
                href="tel:+919876543210"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;