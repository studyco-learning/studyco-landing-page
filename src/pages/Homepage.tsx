import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge"
import {
  // Smartphone,
  MessageCircle,
  // Send,
  Instagram,
  Users,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  // Play,
  // Globe,
  Shield,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showWhatsapp, setShowWhatsapp] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #FDF9F0 0%, #F8F4E6 25%, #F5F0DC 50%, #F2EDD8 75%, #EFEBD4 100%)",
      }}
    >
      {/* Header */}
      <header className="container mx-auto px-4 py-6 sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#FDF9F0]/90 to-[#F8F4E6]/90">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gray-900">studyco.</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="#features"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              to="#testimonials"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link
              to="#pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Button size="sm" className="bg-gray-900 hover:bg-black text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 p-4 bg-white/95 shadow-lg border-t border-gray-200 backdrop-blur-md z-50">
                <div className="flex flex-col space-y-4">
                  <Link
                    to="#features"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    Features
                  </Link>
                  <Link
                    to="#testimonials"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    Reviews
                  </Link>
                  <Link
                    to="#pricing"
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2"
                  >
                    Pricing
                  </Link>
                  <Button
                    size="sm"
                    className="bg-gray-900 hover:bg-black text-white w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4">
        <section className="py-16 md:py-24 animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gray-900 leading-tight">
                Studyco.
                <span className="block text-3xl md:text-4xl font-normal text-gray-700 mt-4">
                  Your partner in focused learning
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                Transform your academic journey with our comprehensive study
                platform. Access curated resources, join a thriving community,
                and achieve your educational goals with confidence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <Button onClick={()=>setShowWhatsapp(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] hover:from-[#8FEB9F] hover:to-[#E6EE01] text-gray-900 font-semibold px-10 py-4 text-lg border-0 shadow-xl hover:shadow-2xl transition-all"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Join Our WhatsApp Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900/30 hover:border-gray-900/50 text-gray-900 hover:text-gray-900 px-10 py-4 text-lg bg-white/70 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button> */}
              </div>
              {showWhatsapp && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
                  <Link to="https://chat.whatsapp.com/JzTo6l7LyxB7GkVvQoXDoC?mode=ac_t">
                    <Button
                      variant="outline"
                      size="lg"
                      className=" border-2 border-gray-900/30 hover:border-gray-900/50 text-gray-900 hover:text-gray-900 px-10 py-4 text-lg bg-white/70 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      B.tech 1st Years
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="https://chat.whatsapp.com/Ebj5KtRhSQnAzNsy7o66TJ?mode=ac_t">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-900/30 hover:border-gray-900/50 text-gray-900 hover:text-gray-900 px-10 py-4 text-lg bg-white/70 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      B.tech 2nd Years
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              )}

              {/* Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50K+</div>
                  <div className="text-gray-700 font-medium">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-700 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">1M+</div>
                  <div className="text-gray-700 font-medium">Study Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="text-gray-700 font-medium">Support</div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Everything you need to excel
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Our comprehensive platform combines cutting-edge technology with
                proven educational methods to deliver an unparalleled learning
                experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <BookOpen className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Smart Study Materials
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    AI-curated content tailored to your learning style and pace.
                    Access thousands of practice questions, video lectures, and
                    interactive exercises.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <Users className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Global Community
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Connect with students worldwide. Join study groups,
                    participate in discussions, and learn from peers who share
                    your academic goals.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    Join community <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <TrendingUp className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Progress Analytics
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Track your learning journey with detailed analytics.
                    Identify strengths, address weaknesses, and optimize your
                    study strategy.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    View analytics <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <Clock className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Study at your own pace with our adaptive scheduling system.
                    Set goals, create routines, and never miss important
                    deadlines.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    Plan schedule <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <Award className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Expert Mentorship
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Get guidance from industry experts and top educators.
                    One-on-one sessions, group workshops, and career counseling.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    Find mentor <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/50 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center shadow-lg">
                    <Shield className="h-8 w-8 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Secure & Private
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your data is protected with enterprise-grade security. Focus
                    on learning while we ensure your privacy and safety.
                  </p>
                  <div className="flex items-center text-gray-900 font-medium">
                    Security details <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Loved by students worldwide
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Join thousands of successful students who have transformed their
                academic journey with Studyco.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    "Studyco completely changed how I approach learning. The
                    personalized study plans and community support helped me
                    achieve my dream university admission."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-gray-800 font-bold">S</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Razi</div>
                      <div className="text-gray-700 text-sm">
                        CSE Student, MEA
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    "The AI-powered recommendations and progress tracking are
                    incredible. I improved my grades by 40% in just one semester
                    using Studyco."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-gray-800 font-bold">M</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Midlaj AM
                      </div>
                      <div className="text-gray-700 text-sm">
                        Engineering Student, MEA
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white/60 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-6 leading-relaxed">
                    "The community aspect is amazing. I found study partners,
                    got help with difficult concepts, and made lifelong friends.
                    Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-gray-800 font-bold">L</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Lina Rahiman
                      </div>
                      <div className="text-gray-700 text-sm">
                        Engineering Student, MEA
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto">
            <Card className="p-12 md:p-16 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-sm border-0 shadow-2xl text-center">
              <CardContent className="p-0">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Ready to transform your learning journey?
                </h2>
                <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                  Join over 500 students who are already achieving their
                  academic goals with Studyco. Start your free trial today and
                  experience the difference.
                </p>

                {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#9FFBB0] to-[#F7FF02] hover:from-[#8FEB9F] hover:to-[#E6EE01] text-gray-900 font-semibold px-12 py-4 text-xl border-0 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Smartphone className="mr-2 h-6 w-6" />
                    Download on Play Store
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-4 text-xl bg-white/70 shadow-xl hover:shadow-2xl transition-all"
                  >
                    <MessageCircle className="mr-2 h-6 w-6" />
                    Join WhatsApp Channel
                  </Button>
                </div> */}

                <div className="flex justify-center space-x-6">
                  <Link
                    to="https://www.linkedin.com/in/studyco-learning-a04345369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="p-4 rounded-full bg-white/70 hover:bg-white/90 transition-colors shadow-xl hover:shadow-2xl"
                    aria-label="Telegram"
                  >
                    <Linkedin className="h-6 w-6 text-gray-900" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/studyco_btech?igsh=YTBrdTZuYWUxcGp6"
                    className="p-4 rounded-full bg-white/70 hover:bg-white/90 transition-colors shadow-xl hover:shadow-2xl"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6 text-gray-900" />
                  </Link>
                  <Link
                    to="https://chat.whatsapp.com/Ebj5KtRhSQnAzNsy7o66TJ?mode=ac_t"
                    className="p-4 rounded-full bg-white/70 hover:bg-white/90 transition-colors shadow-xl hover:shadow-2xl"
                    aria-label="Community"
                  >
                    <MessageCircle className="h-6 w-6 text-gray-900" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-gray-900">studyco.</div>
              </div>
              <p className="text-gray-700 mb-4">
                Empowering students worldwide with innovative learning solutions
                and community support.
              </p>
              <div className="flex space-x-4">
                <Link
                  to="https://www.linkedin.com/in/studyco-learning-a04345369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  to="https://www.instagram.com/studyco_btech?igsh=YTBrdTZuYWUxcGp6"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  to="https://chat.whatsapp.com/Ebj5KtRhSQnAzNsy7o66TJ?mode=ac_t"
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Mobile App
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="/help"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-8 text-center text-gray-700">
            <p>
              &copy; 2025 Studyco. All rights reserved. Empowering learners
              worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
