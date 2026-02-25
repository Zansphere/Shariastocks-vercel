import React, { useState, useEffect } from 'react';
import { Calendar, Clock, TrendingUp, Shield, Globe, Brain, Building, Award } from 'lucide-react';

const Fatwas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

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

  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "The Foundations: Islamic Principles of Investment",
      content: "Islamic finance is guided by core principles rooted in the Quran and Sunnah: No interest (Riba), no excessive uncertainty (Gharar), no involvement in haram sectors, and risk-sharing with ethical conduct."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Fatwas: The First Step Toward Modern Guidelines",
      content: "Islamic scholars began issuing fatwas to guide Muslims on investing, allowing investment in halal companies, permitting small haram income percentages (under 5%) to be purified through charity, and introducing financial ratio filters."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "The Institutional Era: Shariah Boards and Islamic Indices",
      content: "The 1990s-2000s saw institutionalization with Shariah-compliant funds, Islamic indices like DJIM and FTSE Shariah, and the establishment of Shariah boards for compliance guidance."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "The Fintech Revolution: Democratizing Halal Investing",
      content: "The 2010s brought fintech platforms like ShariaStocks, Wahed Invest, and Zoya, making Islamic investing accessible through automated screening, real-time data, and retail-friendly interfaces."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI and the Future of Halal Investing",
      content: "AI now powers automated compliance tracking, sentiment analysis of financial news, and predictive compliance models, enabling proactive investment planning with greater peace of mind."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Beyond Borders: A Global Halal Market",
      content: "With 1.9 billion Muslims worldwide seeking ethical investments, countries like Malaysia, UAE, and Indonesia lead fintech innovation, while ESG and Islamic finance increasingly overlap."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="w-4 h-4" />
            Islamic Finance
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 bg-clip-text text-transparent leading-tight mb-6">
            From Fatwas to Fintech
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Evolution of Shariah-Compliant Investing
          </p>
          
          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>May 28, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Card */}
        <div className={`bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg">
              Shariah-compliant investing has come a long way. What began as a handful of religious rulings (fatwas) on trade ethics has now evolved into a sophisticated financial ecosystem powered by fintech, artificial intelligence, and global market access.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In this article, we'll take a journey through the timeline of Islamic investing — from early religious principles to modern-day platforms like ShariaStocks — and explore how innovation is shaping the future of faith-based finance.
            </p>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className={`grid md:grid-cols-3 gap-6 my-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2">1.9B+</div>
            <div className="text-emerald-100">Muslims Worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2">5%</div>
            <div className="text-blue-100">Max Haram Income</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2">2010s</div>
            <div className="text-purple-100">Fintech Revolution</div>
          </div>
        </div>

        {/* Conclusion */}
        <div className={`bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white mb-12 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center">A Journey Just Beginning</h2>
          <p className="text-slate-200 leading-relaxed text-lg mb-8 text-center max-w-3xl mx-auto">
            From scholarly fatwas to fintech dashboards, the evolution of Shariah-compliant investing has been nothing short of remarkable. What was once limited to scholars and institutions is now at the fingertips of everyday investors — thanks to technology, transparency, and a growing demand for ethical finance.
          </p>
          
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
              <Shield className="w-5 h-5" />
              Try ShariaStocks Today
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p>© 2025 ShariaStocks. Making halal investing easier than ever.</p>
        </footer>
      </div>
    </div>
  );
};

export default Fatwas;