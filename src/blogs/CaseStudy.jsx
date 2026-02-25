import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RotateCcw, AlertTriangle, CheckCircle, XCircle, Zap, BarChart3, DollarSign, Building2 } from 'lucide-react';

const BlogPost = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const complianceFactors = [
    { factor: "Debt Increase", effect: "May breach the Islamic debt ratio limit", icon: TrendingDown, color: "text-red-500" },
    { factor: "Interest Income Growth", effect: "Crosses the 5% threshold for haram revenue", icon: DollarSign, color: "text-red-500" },
    { factor: "Business Diversification", effect: "Enters haram sectors (e.g., alcohol, gambling)", icon: Building2, color: "text-red-500" },
    { factor: "Strategic Divestments", effect: "Exits haram businesses, potentially becoming halal", icon: CheckCircle, color: "text-green-500" },
    { factor: "Financial Restructuring", effect: "Reduces debt or interest income", icon: BarChart3, color: "text-green-500" }
  ];

  const KeyPoint = ({ icon: Icon, title, children, status }) => (
    <div className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${status === 'halal' ? 'border-green-500' : 'border-red-500'} transform hover:scale-105 transition-all duration-300`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${status === 'halal' ? 'bg-green-100' : 'bg-red-100'}`}>
          <Icon className={`w-6 h-6 ${status === 'halal' ? 'text-green-600' : 'text-red-600'}`} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section with Hook */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Market Insight</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              When <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Halal</span> Becomes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">Haram</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Think stock compliance is black and white? Think again. Discover how major companies like Tata Motors and Infosys 
              have switched between halal and haram status — and what it means for your portfolio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-blue-400" />
                <span>Dynamic Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>Real Cases</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                <span>Risk Factors</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12 border border-gray-100">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <RotateCcw className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">The Dynamic Nature of Compliance</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                When it comes to investing in a halal way, many people assume that a stock is either halal or haram — end of story. 
                But in reality, the compliance status of a stock can <strong className="text-indigo-600">change over time</strong>. 
                A company that is considered halal today may become haram tomorrow, and vice versa.
              </p>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            These changes can be triggered by mergers, business shifts, debt levels, or income sources. 
            Let's explore real-world examples of how stocks have moved between compliance statuses.
          </p>
        </div>

        {/* Tata Motors Case Study */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <TrendingDown className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">From Halal to Haram</h2>
            <p className="text-gray-600">The Tata Motors Story</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <KeyPoint icon={CheckCircle} title="Initially Halal" status="halal">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Core business in Shariah-compliant automobile manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Relatively low debt levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Revenue from halal sources like vehicle sales and services</span>
                </li>
              </ul>
            </KeyPoint>

            <KeyPoint icon={XCircle} title="The Shift to Haram" status="haram">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Interest income from financial activities increased</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Debt-to-market cap ratio crossed Shariah thresholds (33%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expansion into financing/leasing segments</span>
                </li>
              </ul>
            </KeyPoint>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="font-semibold text-red-800">Result</h3>
            </div>
            <p className="text-red-700">
              Tata Motors was temporarily flagged as <strong>non-compliant</strong> in many Shariah screening databases.
            </p>
          </div>
        </div>

        {/* Infosys Case Study */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">From Haram to Halal</h2>
            <p className="text-gray-600">The Infosys Transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <KeyPoint icon={XCircle} title="Initially Haram" status="haram">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Large cash reserves in interest-bearing accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Significant income from interest, breaching the 5% rule</span>
                </li>
              </ul>
            </KeyPoint>

            <KeyPoint icon={CheckCircle} title="Transition to Halal" status="halal">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Reduced interest-bearing investments</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Shifted to halal-compliant reserves and sukuk alternatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Haram revenue dropped below screening threshold</span>
                </li>
              </ul>
            </KeyPoint>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold text-green-800">Outcome</h3>
            </div>
            <p className="text-green-700">
              Infosys regained <strong>halal status</strong> on several Shariah-compliant investment platforms.
            </p>
          </div>
        </div>

        {/* Compliance Factors Table */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <RotateCcw className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Do These Changes Happen?</h2>
            <p className="text-gray-600">Key factors that affect Shariah compliance status</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid gap-0">
              {complianceFactors.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.factor}</h3>
                        <p className="text-gray-600 text-sm">{item.effect}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ShariaStocks Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">How ShariaStocks Helps You Stay Updated</h2>
            <p className="text-indigo-100">Real-time AI-powered compliance tracking</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-yellow-400" />
                Continuous Monitoring
              </h3>
              <ul className="space-y-2 text-indigo-100">
                <li>• Sector/Industry classification</li>
                <li>• Financial ratios (Debt, Cash, Interest)</li>
                <li>• Income source percentages</li>
                <li>• Company announcements and news</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                Instant Alerts
              </h3>
              <p className="text-indigo-100">
                Get notified immediately when a company's compliance status changes — no guesswork, no delays.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            Key Takeaways
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">A stock's halal or haram status is <strong>not permanent</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Financial strategies and acquisitions can affect compliance</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Regular screening is essential for ethical investing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">AI-powered tools help make informed decisions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Keep Your Investments Halal?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Join thousands of investors who trust ShariaStocks to monitor their portfolios with our AI-powered compliance tracker.
          </p>
          <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 shadow-lg">
            Sign Up on ShariaStocks →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;