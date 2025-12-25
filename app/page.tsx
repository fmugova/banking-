<!DOCTYPE html>
<html lang="en">
<head>
  <base target="_blank">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BankFlow - Modern Banking SaaS Platform</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .gradient-bg { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    .card-shadow { box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1); }
    .feature-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .feature-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15); }
    .animate-float { animation: float 6s ease-in-out infinite; }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  </style>
</head>
<body>
  <div id="root"></div>
  
  <script type="text/babel">
    const { useState, useEffect } = React;
    
    const BankFlowLanding = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeTab, setActiveTab] = useState('personal');
      const [stats, setStats] = useState({
        customers: 0,
        transactions: 0,
        countries: 0,
        uptime: 0
      });

      useEffect(() => {
        const animateStats = () => {
          const targetStats = {
            customers: 250000,
            transactions: 1200000,
            countries: 45,
            uptime: 99.9
          };
          
          let current = { customers: 0, transactions: 0, countries: 0, uptime: 0 };
          const increment = {
            customers: targetStats.customers / 100,
            transactions: targetStats.transactions / 100,
            countries: targetStats.countries / 100,
            uptime: targetStats.uptime / 100
          };

          const timer = setInterval(() => {
            current.customers = Math.min(current.customers + increment.customers, targetStats.customers);
            current.transactions = Math.min(current.transactions + increment.transactions, targetStats.transactions);
            current.countries = Math.min(current.countries + increment.countries, targetStats.countries);
            current.uptime = Math.min(current.uptime + increment.uptime, targetStats.uptime);

            setStats({
              customers: Math.floor(current.customers),
              transactions: Math.floor(current.transactions),
              countries: Math.floor(current.countries),
              uptime: current.uptime.toFixed(1)
            });

            if (current.customers >= targetStats.customers) {
              clearInterval(timer);
            }
          }, 50);
        };

        animateStats();
      }, []);

      const features = [
        {
          icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
          title: "Advanced Security",
          description: "Bank-grade encryption with multi-factor authentication and real-time fraud detection."
        },
        {
          icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
          title: "Real-time Analytics",
          description: "Comprehensive dashboards with AI-powered insights and predictive analytics."
        },
        {
          icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
          title: "API-First Platform",
          description: "Robust RESTful APIs with extensive documentation and developer tools."
        },
        {
          icon: "M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z",
          title: "Compliance Ready",
          description: "Built-in compliance with PCI DSS, SOX, GDPR, and other financial regulations."
        },
        {
          icon: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z",
          title: "Auto-scaling",
          description: "Elastic infrastructure that scales automatically with your transaction volume."
        },
        {
          icon: "M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z",
          title: "24/7 Support",
          description: "Round-the-clock technical support with dedicated account management."
        }
      ];

      const pricingPlans = [
        {
          name: "Starter",
          price: "99",
          period: "month",
          description: "Perfect for small financial institutions",
          features: [
            "Up to 10,000 transactions/month",
            "Basic API access",
            "Email support",
            "Standard security features",
            "Mobile SDK"
          ],
          popular: false
        },
        {
          name: "Professional",
          price: "299",
          period: "month",
          description: "Ideal for growing businesses",
          features: [
            "Up to 100,000 transactions/month",
            "Full API access",
            "Priority support",
            "Advanced security & analytics",
            "Custom integrations",
            "Multi-currency support"
          ],
          popular: true
        },
        {
          name: "Enterprise",
          price: "Custom",
          period: "",
          description: "For large-scale operations",
          features: [
            "Unlimited transactions",
            "White-label solution",
            "Dedicated support team",
            "Custom compliance features",
            "On-premise deployment",
            "SLA guarantee"
          ],
          popular: false
        }
      ];

      return (
        <div className="min-h-screen bg-white">
          {/* Navigation */}
          <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <span className="ml-2 text-xl font-bold text-gray-900">BankFlow</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-8">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Pricing</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>

                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>

              {isMenuOpen && (
                <div className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                    <a href="#features" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Features</a>
                    <a href="#pricing" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Pricing</a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Contact</a>
                    <button className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Hero Section */}
          <section className="pt-20 pb-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    The Future of
                    <span className="block text-yellow-300">Banking Technology</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100">
                    Empower your financial institution with our cutting-edge SaaS platform. 
                    Secure, scalable, and compliant banking solutions for the digital age.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                      Start Free Trial
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                      Watch Demo
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="animate-float">
                    <div className="bg-white rounded-2xl p-8 card-shadow">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Overview</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Total Volume</span>
                            <span className="font-semibold text-green-600">+24.5%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full w-3/4"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Active Users</span>
                            <span className="font-semibold text-blue-600">156,789</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-4/5"></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                          <div className="text-sm text-gray-600">Daily Volume</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">99.9%</div>
                          <div className="text-sm text-gray-600">Uptime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stats.customers.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stats.transactions.toLocaleString()}+
                  </div>
                  <div className="text-gray-600 font-medium">Transactions Daily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                    {stats.countries}+
                  </div>
                  <div className="text-gray-600 font-medium">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                    {stats.uptime}%
                  </div>
                  <div className="text-gray-600 font-medium">System Uptime</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Powerful Features for Modern Banking
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive platform provides everything you need to deliver exceptional banking experiences
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="feature-card bg-white p-8 rounded-2xl card-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d={feature.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Product Demo Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Built for Every Banking Need
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  From personal banking to enterprise solutions, our platform adapts to your requirements
                </p>
              </div>

              <div className="bg-white rounded-2xl card-shadow overflow-hidden">
                <div className="border-b border-gray-200">
                  <nav className="flex">
                    {['personal', 'business', 'enterprise'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 font-medium capitalize ${
                          activeTab === tab
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab} Banking
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-8">
                  {activeTab === 'personal' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Banking Made Simple</h3>
                        <p className="text-gray-600 mb-6">
                          Offer your customers a seamless digital banking experience with intuitive interfaces, 
                          real-time notifications, and comprehensive financial management tools.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Mobile-first design
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Instant transfers
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Budgeting tools
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">Personal Dashboard</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'business' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Banking Solutions</h3>
                        <p className="text-gray-600 mb-6">
                          Empower businesses with advanced payment processing, cash management, 
                          and comprehensive reporting tools designed for growth.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Multi-account management
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Bulk payments
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Advanced analytics
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">Business Analytics</h4>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'enterprise' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise-Grade Platform</h3>
                        <p className="text-gray-600 mb-6">
                          Scale to millions of users with our enterprise platform featuring advanced security, 
                          compliance tools, and dedicated infrastructure.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            White-label solution
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Dedicated infrastructure
                          </li>
                          <li className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                            </svg>
                            Custom compliance
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900">Enterprise Control</h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose the perfect plan for your organization. Scale up or down as needed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-white rounded-2xl card-shadow p-8 ${
                      plan.popular ? 'ring-2 ring-blue-600 transform scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.description}</p>
                      <div className="flex items-center justify-center">
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        {plan.period && (
                          <span className="text-gray-600 ml-2">/{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-4 rounded-lg font-semibold text-lg transition-colors ${
                        plan.popular
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Banking?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of financial institutions already using BankFlow to deliver exceptional customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Start Your Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="ml-2 text-xl font-bold">BankFlow</span>
                  </div>
                  <p className="text-gray-300 mb-6 max-w-md">
                    Empowering financial institutions with next-generation banking technology. 
                    Secure, scalable, and compliant solutions for the digital banking era.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-300 text-sm">
                  © 2025 BankFlow Technologies. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    };
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<BankFlowLanding />);
  </script>
</body>
</html>