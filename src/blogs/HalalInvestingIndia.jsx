import React from 'react';
import { TrendingUp, Shield, AlertTriangle, Target, Star, Users } from 'lucide-react';

const HalalInvestingBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Hook */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-xl">🕌</span>
            Shariah-Compliant Investing
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Halal Stock Investing
            </span>
            <br />
            in India
          </h1>
          
          {/* Engaging Hook */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong className="text-emerald-600">Imagine this:</strong> You're sitting with your savings, watching India's booming stock market create millionaires daily. But as a Muslim investor, you're caught between 
                <span className="text-blue-600 font-semibold"> financial growth</span> and 
                <span className="text-emerald-600 font-semibold"> faith-based principles</span>.
              </p>
              <p className="text-xl font-medium text-gray-900">
                What if you could have both? 🚀
              </p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <TrendingUp className="text-emerald-600" size={28} />
            The Indian Opportunity
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            India, with its rapidly growing economy and diverse stock market, offers a wealth of investment opportunities. 
            But for Muslim investors seeking Shariah-compliant options, navigating the Indian market presents unique 
            challenges and a few promising opportunities.
          </p>
        </section>

        {/* Challenges Section */}
        <section className="bg-red-50 rounded-2xl border border-red-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-600" size={28} />
            The Reality Check: Challenges
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📚 Limited Awareness and Education
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Many Indian investors are unaware of Shariah screening principles</li>
                <li>• Misconceptions around halal investing persist, leading to hesitancy</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📉 Scarcity of Shariah-Compliant Stocks
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Large portion of companies engage in interest-based finance</li>
                <li>• Only <strong className="text-red-600">30-40%</strong> of NSE-listed stocks pass Shariah screens</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🏛️ Lack of Regulatory Support
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• No clear Shariah compliance framework from SEBI</li>
                <li>• Islamic finance is still not mainstream or fully recognized</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🧮 Purification Complexity
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Must purify dividends from haram income</li>
                <li>• Few local tools exist to automate this process</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            <Target className="text-emerald-600" size={28} />
            The Silver Lining: Opportunities
          </h2>
          
          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-emerald-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Star className="text-emerald-600" size={20} />
                Shariah-Compliant Indices
              </h3>
              <p className="text-gray-700">
                NSE has indices like the <strong className="text-emerald-600">Nifty50 Shariah</strong> and 
                <strong className="text-emerald-600"> Nifty Shariah 500</strong>, helping screen stocks systematically.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Users className="text-blue-600" size={20} />
                Growing Demand
              </h3>
              <p className="text-gray-700">
                India has one of the <strong className="text-blue-600">largest Muslim populations</strong> in the world. 
                Rising financial literacy among Muslims creates a strong market for halal investing tools.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💻 Tech & Fintech Growth
              </h3>
              <p className="text-gray-700">
                Indian startups can build screening platforms, robo-advisors, and halal mutual funds using AI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🌱 Ethical Finance Overlap
              </h3>
              <p className="text-gray-700">
                India's ESG (Environmental, Social, Governance) movement aligns partially with Shariah principles, 
                opening cross-interest among investors.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl text-white p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">200M+</div>
              <div className="text-emerald-100">Muslims in India</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30-40%</div>
              <div className="text-emerald-100">Shariah-compliant stocks</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">₹280T</div>
              <div className="text-emerald-100">Indian market cap</div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Shield className="text-emerald-600" size={28} />
            The Path Forward
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            <p>
              While the Indian stock market poses some hurdles for halal investors, the landscape is evolving. 
              With more awareness, innovation, and community-driven solutions, halal investing in India has a 
              <strong className="text-emerald-600"> promising future</strong>.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mt-6">
              <p className="text-emerald-800 font-medium text-center">
                💡 <strong>The bottom line:</strong> Your faith and financial goals don't have to be mutually exclusive. 
                The key is education, the right tools, and patience as this market matures.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Halal Investment Journey?</h3>
            <p className="text-emerald-100 mb-6">
              Join thousands of Muslim investors who are building wealth the halal way
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalalInvestingBlog;