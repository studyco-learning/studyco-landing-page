import { useState } from "react";
import {
  Search,
  HelpCircle,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  MessageCircle,
  Book,
  User,
  CreditCard,
  Settings,
  CheckCircle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const supportEmail = "studyco.eduonline@gmail.com";
  const supportPhone = "+91 70259 77832";

  const categories = [
    { id: "all", name: "All", icon: <HelpCircle className="w-4 h-4" /> },
    { id: "account", name: "Account", icon: <User className="w-4 h-4" /> },
    { id: "courses", name: "Courses", icon: <Book className="w-4 h-4" /> },
    {
      id: "payment",
      name: "Payment",
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      id: "technical",
      name: "Technical",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  const faqs = [
    {
      id: 1,
      category: "account",
      question: "How do I reset my password?",
      answer:
        "Go to the login screen and click on 'Forgot Password'. Enter your registered email address and follow the instructions sent to your email. If you don't receive the email within 5 minutes, check your spam folder or contact our support team.",
      popular: true,
    },
    {
      id: 2,
      category: "account",
      question: "How can I delete my account?",
      answer:
        "You can request account deletion from the Profile section in your dashboard. Navigate to Settings → Account Settings → Delete Account. Please note that all your personal data will be removed permanently and this action cannot be undone.",
      popular: false,
    },
    {
      id: 3,
      category: "account",
      question: "How do I update my profile information?",
      answer:
        "Go to your Profile page and click 'Edit Profile'. You can update your name, email, phone number, and other details. Remember to save your changes before leaving the page.",
      popular: false,
    },
    {
      id: 4,
      category: "payment",
      question: "What payment methods do you support?",
      answer:
        "Paid study materials and classes are processed securely through Razorpay. We support credit/debit cards, UPI, net banking, and popular digital wallets. We do not collect, store, or process your payment details - all transactions are handled directly by Razorpay's secure payment gateway.",
      popular: true,
    },
    {
      id: 5,
      category: "payment",
      question: "How do I get a refund?",
      answer:
        "Refunds are available within 14 days of purchase if you haven't accessed more than 20% of the course content. Contact our support team with your order ID to initiate the refund process. Refunds are processed within 5-7 business days.",
      popular: false,
    },
    {
      id: 6,
      category: "payment",
      question: "Why was my payment declined?",
      answer:
        "Payment decline can happen due to insufficient funds, incorrect card details, expired card, or bank restrictions on online transactions. Please verify your payment details and try again, or contact your bank if the issue persists.",
      popular: false,
    },
    {
      id: 7,
      category: "courses",
      question: "How do I access my purchased courses?",
      answer:
        "After successful payment, your courses will appear in the 'My Courses' section of your dashboard within 5-10 minutes. If you don't see your course, try refreshing the page or logging out and back in.",
      popular: true,
    },
    {
      id: 8,
      category: "courses",
      question: "Can I download course materials for offline study?",
      answer:
        "Yes! Most course materials including PDFs, slides, and additional resources can be downloaded for offline study. Look for the download button next to each resource in your course dashboard.",
      popular: false,
    },
    {
      id: 9,
      category: "courses",
      question: "How long do I have access to my courses?",
      answer:
        "Once you purchase a course, you have lifetime access to all course content, including any future updates or additional materials. There are no time restrictions on completing your courses.",
      popular: false,
    },
    {
      id: 10,
      category: "technical",
      question: "The videos won't play or keep buffering",
      answer:
        "This is usually due to slow internet connection. Try switching to a lower video quality in the player settings, or check your internet speed (minimum 2 Mbps recommended for smooth playback). Also try clearing your browser cache.",
      popular: false,
    },
    {
      id: 11,
      category: "technical",
      question: "I'm having trouble logging in",
      answer:
        "First, check that you're using the correct email and password. If you've forgotten your password, use the 'Forgot Password' link. Clear your browser cache and cookies, or try using a different browser or incognito mode.",
      popular: false,
    },
  ];

  const quickHelp = [
    {
      title: "Getting Started Guide",
      description: "New to StudyCo? Learn the basics",
      icon: <Lightbulb className="w-6 h-6" />,
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: <Book className="w-6 h-6" />,
      link: "#",
    },
    {
      title: "System Status",
      description: "Check if services are running",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "#",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div
      className="min-h-screen  p-6 md:p-12 font-sans text-gray-800"
      style={{
        background:
          "linear-gradient(135deg, #FDF9F0 0%, #F8F4E6 25%, #F5F0DC 50%, #F2EDD8 75%, #EFEBD4 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-white/60 backdrop-blur rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Help Center
            </h1>
            <p className="text-gray-600 mb-8">
              Find answers to your questions or get in touch with us.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-indigo-100 transition-all text-lg"
              />
            </div>
          </div>
        </header>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {quickHelp.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white/60 backdrop-blur rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="bg-indigo-100 text-gray-600 p-3 rounded-full w-fit mb-4 group-hover:bg-gray-800 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center text-indigo-600 font-medium">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all flex items-center space-x-3 ${
                      selectedCategory === category.id
                        ? "bg-gray-800 text-white"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>

              {/* Contact Card */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">
                  Need More Help?
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="break-all">{supportEmail}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{supportPhone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Sat, 9 AM - 6 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/60 backdrop-blur rounded-2xl shadow-lg p-8">
              {/* FAQ Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  {selectedCategory === "all"
                    ? "Frequently Asked Questions"
                    : `${
                        categories.find((c) => c.id === selectedCategory)?.name
                      } Questions`}
                </h2>
                <span className="text-gray-500 text-sm">
                  {filteredFaqs.length} questions
                </span>
              </div>

              {/* Search Results Info */}
              {searchQuery && (
                <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <p className="text-amber-800">
                    📝 Showing results for "<strong>{searchQuery}</strong>"
                  </p>
                </div>
              )}

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-4">
                          <HelpCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                          <div>
                            <h3 className="font-medium text-gray-800 mb-1">
                              {faq.question}
                            </h3>
                            {faq.popular && (
                              <span className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedFaq === faq.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pl-9 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <p className="text-sm text-gray-500 mb-2">
                                Was this helpful?
                              </p>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm">
                                  👍 Yes
                                </button>
                                <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm">
                                  👎 No
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">
                      No results found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your search or browse different categories.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      Reset Search
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-8 bg-gray-50 rounded-2xl p-8 border border-indigo-100">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-gray-800 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  Still need help?
                </h3>
                <p className="text-gray-700 mb-6 max-w-md mx-auto">
                  If you didn't find your answer in the FAQs, reach out to our
                  support team. We'll get back to you as soon as possible.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${supportEmail}`}
                  className="bg-gray-800 text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2"
                  aria-label="Email Support"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Support</span>
                </a>
                <a
                  href={`tel:${supportPhone}`}
                  className="bg-white text-gray-800 border border-gray-900 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                  aria-label="Call Support"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Support</span>
                </a>
                </div>

                <p className="text-gray-600 text-sm mt-4">
                  Support available Mon–Sat, 9:00 AM – 6:00 PM (IST)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur rounded-2xl shadow-lg p-6">
            <p className="text-gray-600">
              <strong>StudyCo</strong> — We're here to help you learn better.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
