import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  type FormDataType = {
    name: string;
    email: string;
    subject: string;
    category: string;
    message: string;
  };
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | null>(null);
  const [activeTab, setActiveTab] = useState<string>("contact");

  const supportEmail = "studyco.eduonline@gmail.com";
  const supportPhone = "+91 70259 77832";

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: supportEmail,
      action: `mailto:${supportEmail}`,
      availability: "Response within 24 hours",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: supportPhone,
      action: `tel:${supportPhone}`,
      availability: "Mon-Sat, 9 AM - 6 PM IST",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Instant support for urgent queries",
      contact: "Available on website",
      action: "#",
      availability: "Mon-Fri, 10 AM - 5 PM IST",
    },
  ];

  const departments = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Academic Support",
      description: "Course content, assignments, and learning materials",
      email: "academics@studyco.edu",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Student Services",
      description: "Enrollment, scheduling, and student affairs",
      email: "services@studyco.edu",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Technical Support",
      description: "Platform issues, login problems, and tech help",
      email: "tech@studyco.edu",
    },
  ];

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer:
        "Click 'Forgot Password' on the login page and follow the email instructions.",
    },
    {
      question: "What are your support hours?",
      answer:
        "We provide support Monday through Saturday, 9:00 AM to 6:00 PM IST.",
    },
    {
      question: "How can I access my course materials?",
      answer:
        "Log into your dashboard and navigate to 'My Courses' to access all materials.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer refunds within 14 days of purchase. Contact support for details.",
    },
  ];

  return (
    <div
      className="min-h-screen "
      style={{
        background:
          "linear-gradient(135deg, #FDF9F0 0%, #F8F4E6 25%, #F5F0DC 50%, #F2EDD8 75%, #EFEBD4 100%)",
      }}
    >
      {/* Header */}
      <div
        className=" text-gray-900 py-16"
        style={{
          background:
            "linear-gradient(135deg, #FDF9F0 0%, #F8F4E6 25%, #F5F0DC 50%, #F2EDD8 75%, #EFEBD4 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help you succeed in your learning journey. Reach out
            anytime!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {[
              { id: "contact", label: "Contact Form" },
              { id: "methods", label: "Contact Methods" },
              { id: "departments", label: "Departments" },
              { id: "faq", label: "FAQ" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Form Tab */}
        {activeTab === "contact" && (
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Send us a Message
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief subject of your message"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="">Select a category</option>
                    <option value="academic">Academic Support</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Describe your question or concern in detail..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-gray-900 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  aria-busy={isSubmitting}
                  aria-label="Send Message"
                >
                  {isSubmitting ? (
                    <>
                      <div
                        className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                        aria-hidden="true"
                      ></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <a
                        href={`mailto:${supportEmail}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {supportEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <a
                        href={`tel:${supportPhone}`}
                        className="text-indigo-600 hover:underline"
                      >
                        {supportPhone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <Clock className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Support Hours
                      </p>
                      <p className="text-gray-600">Mon-Sat, 9 AM - 6 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  💡 Pro Tip
                </h3>
                <p className="text-gray-600">
                  For faster support, please include your student ID and course
                  details in your message. This helps us assist you more
                  efficiently!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Methods Tab */}
        {activeTab === "methods" && (
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-indigo-100 p-4 rounded-full w-fit mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-semibold text-gray-800 mb-2">
                  {method.contact}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  {method.availability}
                </p>
                <a
                  href={method.action}
                  className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors"
                >
                  <span>Contact Now</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === "departments" && (
          <div className="grid md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-6">{dept.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {dept.title}
                </h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-indigo-600 hover:underline font-semibold"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === "faq" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <AlertCircle className="w-6 h-6 text-indigo-600 mr-3" />
                    {item.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-9">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <button
                onClick={() => setActiveTab("contact")}
                className="bg-gray-800 text-white px-8 py-3 rounded-xl hover:bg-gray-900 transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-gray-800 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              StudyCo Educational Platform
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Empowering students worldwide with quality education and
              comprehensive support. Your success is our mission.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 StudyCo</span>
              <span>•</span>
              <Link to="/privacy-policy">
                <span>Privacy Policy</span>
              </Link>

              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
