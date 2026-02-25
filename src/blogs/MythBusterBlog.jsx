import React, { useState, useEffect } from 'react';
import { X, CheckCircle, TrendingUp, Shield, Globe, Zap, Users, DollarSign, Building, AlertTriangle } from 'lucide-react';

const MythBusterBlog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bustedMyths, setBustedMyths] = useState({});

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBustMyth = (mythId) => {
    setBustedMyths(prev => ({
      ...prev,
      [mythId]: true
    }));
  };

  const myths = [
    {
      id: 1,
      icon: <Building className="w-6 h-6" />,
      title: "Halal Investing Means Fewer Opportunities",
      mythText: "Halal investing limits your investment options significantly.",
      truthText: "Halal investing doesn't limit your options — it filters them. There are thousands of halal stocks worldwide in sectors like Technology, Healthcare, Energy, Manufacturing, and Consumer Goods.",
      details: "With tools like ShariaStocks, you can easily discover halal companies across the globe. Plus, halal mutual funds, ETFs, and real estate investment options are rapidly growing.",
      color: "from-red-500 to-pink-600"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Halal Portfolios Perform Worse Than Conventional Ones",
      mythText: "You have to sacrifice returns for ethical compliance.",
      truthText: "Studies show that halal-compliant funds often perform on par with — or even better than — conventional funds.",
      details: "Halal investing naturally avoids highly leveraged companies, stays away from volatile sectors, and focuses on asset-backed real economic activity, making portfolios more resilient during downturns.",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      icon: <DollarSign className="w-6 h-6" />,
      title: "You Can't Invest Without Paying or Earning Interest",
      mythText: "Modern investing is impossible without interest-based transactions.",
      truthText: "Islamic finance has developed Shariah-compliant alternatives including profit-and-loss sharing, joint ventures, lease-based financing, and asset-backed investments.",
      details: "Platforms like ShariaStocks screen out companies that earn or pay excessive interest, helping you invest without compromising your beliefs.",
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 4,
      icon: <Users className="w-6 h-6" />,
      title: "Halal Investing Is Only for Muslims",
      mythText: "Non-Muslims can't benefit from halal investing principles.",
      truthText: "Halal investing is based on universal ethical values: no exploitation, no harm to society, full transparency, and real economic activity.",
      details: "These values appeal to socially responsible and ESG investors of all backgrounds. Many non-Muslims are intentionally choosing halal funds for their ethical filters.",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 5,
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "If a Company Is in a Halal Industry, It's Automatically Halal",
      mythText: "Companies in 'good' industries are automatically Shariah-compliant.",
      truthText: "Just because a company operates in a halal industry doesn't guarantee Shariah compliance. Islamic screening considers debt levels, interest income, non-compliant income sources, and business partnerships.",
      details: "That's why you need tools like ShariaStocks to dig deeper than just the industry label. Compliance isn't just about what a company does, but how it does it.",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-red-500/30">
            <Zap className="w-4 h-4" />
            Myth Busting
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              5 Common Myths
            </span>
            <br />
            <span className="text-white">About Halal Investing</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              — Busted! 🧨
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Separating fact from fiction in the world of Shariah-compliant investing
          </p>
        </header>

        {/* Intro Card */}
        <div className={`bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="prose prose-lg max-w-none text-gray-200">
            <p className="text-lg leading-relaxed mb-4">
              When people hear the term <em>"Halal Investing,"</em> many immediately associate it with restrictions, complications, or lower returns. But the reality is far more empowering.
            </p>
            <p className="leading-relaxed">
              Halal investing — investing in ways that align with Islamic principles — is not just about avoiding haram; it's about building wealth ethically, transparently, and responsibly.
            </p>
          </div>
        </div>

        {/* Myths Section */}
        <div className="space-y-8">
          {myths.map((myth, index) => (
            <div 
              key={myth.id}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className={`flex-shrink-0 p-4 bg-gradient-to-br ${myth.color} rounded-xl text-white shadow-lg`}>
                  {myth.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-white">
                      Myth {myth.id}: {myth.title}
                    </h2>
                    {bustedMyths[myth.id] && (
                      <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-500/30">
                        <CheckCircle className="w-4 h-4" />
                        BUSTED!
                      </div>
                    )}
                  </div>
                  
                  {/* Myth Statement */}
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <X className="w-5 h-5 text-red-400" />
                      <span className="font-semibold text-red-300">The Myth:</span>
                    </div>
                    <p className="text-gray-300 italic">{myth.mythText}</p>
                  </div>
                  
                  {/* Truth Statement */}
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold text-emerald-300">The Truth:</span>
                    </div>
                    <p className="text-gray-200 font-medium">{myth.truthText}</p>
                  </div>
                  
                  {/* Details */}
                  <p className="text-gray-300 leading-relaxed mb-6">{myth.details}</p>
                  
                  {/* Bust Button */}
                  {!bustedMyths[myth.id] && (
                    <button
                      onClick={() => handleBustMyth(myth.id)}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${myth.color} px-6 py-3 rounded-xl text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <Zap className="w-4 h-4" />
                      Bust This Myth!
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className={`grid md:grid-cols-3 gap-6 my-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold mb-2">1000s</div>
            <div className="text-emerald-100">Halal Stocks Available</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold mb-2">Equal</div>
            <div className="text-blue-100">Performance vs Conventional</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold mb-2">Universal</div>
            <div className="text-purple-100">Ethical Values</div>
          </div>
        </div>

        {/* Conclusion */}
        <div className={`bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-white mb-12 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">Final Thoughts: Clarity Over Confusion</h2>
          <p className="text-emerald-100 leading-relaxed text-lg mb-8 text-center max-w-3xl mx-auto">
            Halal investing doesn't have to be mysterious, restrictive, or risky. In fact, when done right, it offers a balanced, ethical, and financially sound path to wealth-building.
          </p>
          <p className="text-emerald-100 leading-relaxed text-lg mb-8 text-center max-w-3xl mx-auto">
            Armed with the right tools and the right knowledge, you can invest with confidence — without compromising your values.
          </p>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <Shield className="w-5 h-5" />
              Explore ShariaStocks Today
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm">
          <p>© 2025 ShariaStocks. Your AI-powered guide to ethical stock screening.</p>
        </footer>
      </div>
    </div>
  );
};

export default MythBusterBlog;