import React, { useState } from "react";
import { Book, Briefcase, CheckCircle, ChevronDown, ChevronUp, Clock, Coffee, DollarSign, FileText, Filter, Globe, HelpCircle, Home, Info, List, Pen, Search, Shield, Star, Users, XCircle, BarChart3, TrendingUp, GitCompare } from "lucide-react";
import Footer from '../components/Footer'

function HalalMutualFundsVsStocks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I invest in both halal stocks and halal mutual funds?",
      answer: "Absolutely! Many successful Muslim investors maintain a diversified portfolio that includes both halal stocks and halal mutual funds. The combination provides the best of both worlds: direct control and professional management. This approach is often recommended for comprehensive portfolio diversification."
    },
    {
      question: "Which option has historically better returns?",
      answer: "Returns depend on market conditions, fund selection, and stock-picking skills. Individual halal stocks can sometimes outperform if you select winners, but they also carry higher risk of underperformance. Halal mutual funds, managed by professionals, offer more consistent returns. Over long periods (10+ years), both have shown comparable average returns."
    },
    {
      question: "Are halal mutual fund fees worth it?",
      answer: "Fees vary significantly between funds (typically 0.5-2% annually). Consider fees when choosing funds, but don't let them be your only factor. A good fund manager who outperforms the market by 2-3% annually more than compensates for fees. Compare funds by net returns after fees, not just expense ratios."
    },
    {
      question: "What if I don't have time to research stocks?",
      answer: "If researching individual stocks is too time-consuming, halal mutual funds are an excellent choice. Fund managers do the research for you. Many working professionals and busy investors prefer this approach. You still benefit from halal investing without the time commitment."
    },
    {
      question: "Can I switch between halal stocks and halal funds?",
      answer: "Yes, you can absolutely move between them. Some investors start with mutual funds to learn, then transition to individual stocks. Others do the opposite. You might also maintain both simultaneously. Tax implications vary by location and account type, so consult a tax advisor before making large switches."
    },
    {
      question: "How do I ensure a halal mutual fund is truly Shariah-compliant?",
      answer: "Look for funds that clearly state their Shariah compliance standards and have an independent Shariah board overseeing them. Read fund prospectuses carefully, check holdings lists, and verify their screening criteria match Islamic principles. Reputable halal funds publish their compliance details transparently."
    },
    {
      question: "Is it better to invest a lump sum or gradually through halal funds?",
      answer: "Dollar-cost averaging (gradual investing) is generally safer with both stocks and funds, especially if you're new to investing. This approach reduces the impact of market timing. However, if you have a substantial amount and strong conviction in your strategy, lump sum investing has worked historically. Most experts recommend gradual investment for risk management."
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Halal Mutual Funds vs Halal Stocks</h1>
          <p className="text-xl md:text-2xl mb-6 italic">Which Is Better for Muslim Investors?</p>
          <p className="text-lg mb-6">
            Choosing between halal stocks and halal mutual funds is one of the most important decisions for Muslim investors.
          </p>
          <p className="text-lg">
            Each approach offers distinct advantages—and drawbacks. This comprehensive guide compares both options to help you determine which aligns best with your financial goals, knowledge level, and lifestyle.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Info className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Why This Choice Matters</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              For Muslim investors seeking halal wealth-building opportunities, the decision between individual stocks and mutual funds is far more than academic. It fundamentally affects your investment experience, potential returns, risk exposure, and time commitment.
            </p>
            <p>
              The problem? Both halal stocks and halal mutual funds are excellent options—but they serve different investor profiles. Choosing the right path requires understanding your circumstances, personality, and financial objectives.
            </p>
            <p>
              This guide breaks down the comparison in detail, giving you clarity to make the best decision for your unique situation.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <BarChart3 className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Understanding the Two Approaches</h2>
          </div>
          
          <div className="space-y-8">
            {/* Halal Stocks */}
            <div className="bg-white p-8 rounded-lg border-2 border-emerald-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-emerald-600 mr-3">📈</span>
                Halal Individual Stocks
              </h3>
              <p className="text-gray-700 mb-6">
                When you buy halal stocks, you're purchasing shares directly in companies that meet Islamic principles. You own a piece of each business.
              </p>
              
              <h4 className="font-semibold text-lg text-gray-800 mb-3">How It Works:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You research and select individual halal stocks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You build your own portfolio by directly purchasing shares</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You decide when to buy, hold, and sell each position</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You receive dividends directly from the companies</span>
                </li>
              </ul>
            </div>

            {/* Halal Mutual Funds */}
            <div className="bg-white p-8 rounded-lg border-2 border-emerald-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-emerald-600 mr-3">🏛️</span>
                Halal Mutual Funds
              </h3>
              <p className="text-gray-700 mb-6">
                A halal mutual fund is a professionally managed pool of investors' money that is invested in halal-compliant securities according to Islamic principles.
              </p>
              
              <h4 className="font-semibold text-lg text-gray-800 mb-3">How It Works:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You invest money into a fund managed by professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">A fund manager conducts research and selects halal stocks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You own "units" representing your share of the fund</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">The manager makes buy/sell decisions; you receive distributions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <GitCompare className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Head-to-Head Comparison</h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-lg shadow-md">
            <table className="w-full">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left font-semibold">Halal Stocks</th>
                  <th className="px-6 py-4 text-left font-semibold">Halal Mutual Funds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Control</td>
                  <td className="px-6 py-4 text-gray-700">Complete control over your selections</td>
                  <td className="px-6 py-4 text-gray-700">Limited; professional manager decides</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Time Required</td>
                  <td className="px-6 py-4 text-gray-700">High (research, monitoring, rebalancing)</td>
                  <td className="px-6 py-4 text-gray-700">Low (let the manager handle it)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Expertise Needed</td>
                  <td className="px-6 py-4 text-gray-700">High (must know stock analysis)</td>
                  <td className="px-6 py-4 text-gray-700">Low (professionals manage it)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Diversification</td>
                  <td className="px-6 py-4 text-gray-700">Your responsibility; can be limited</td>
                  <td className="px-6 py-4 text-gray-700">Built-in; inherently diversified</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Fees</td>
                  <td className="px-6 py-4 text-gray-700">Low (broker commissions only)</td>
                  <td className="px-6 py-4 text-gray-700">Higher (management & operating fees)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Minimum Investment</td>
                  <td className="px-6 py-4 text-gray-700">Often low (one stock)</td>
                  <td className="px-6 py-4 text-gray-700">Often higher (fund minimums)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Risk (Single Choice)</td>
                  <td className="px-6 py-4 text-gray-700">High (stock-specific risk)</td>
                  <td className="px-6 py-4 text-gray-700">Moderate (diversified holdings)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Potential Returns</td>
                  <td className="px-6 py-4 text-gray-700">Higher (if you pick winners)</td>
                  <td className="px-6 py-4 text-gray-700">Market average (after fees)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-800">Emotional Discipline</td>
                  <td className="px-6 py-4 text-gray-700">Challenging (you control trades)</td>
                  <td className="px-6 py-4 text-gray-700">Easier (automatic management)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Advantages of Halal Stocks</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Lower Costs</h4>
              <p className="text-gray-700">No management fees or operating expenses. You only pay broker commissions, which are often minimal or zero with modern brokers.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Full Control</h4>
              <p className="text-gray-700">You decide which companies to invest in, how much to buy, and when to sell. This control appeals to investors with strong conviction and research abilities.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Potential for Outperformance</h4>
              <p className="text-gray-700">If you're skilled at stock selection, you can outperform market averages. Some individual investors consistently beat professional managers.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Learning Opportunity</h4>
              <p className="text-gray-700">Investing in individual stocks teaches you valuable financial literacy and market understanding that benefits your entire financial life.</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Direct Ownership</h4>
              <p className="text-gray-700">There's psychological satisfaction in directly owning pieces of businesses you believe in—and collecting dividends from them.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Shield className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Advantages of Halal Mutual Funds</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Professional Management</h4>
              <p className="text-gray-700">Experienced fund managers with teams of analysts do the research for you. You benefit from their expertise without needing your own.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Built-In Diversification</h4>
              <p className="text-gray-700">Each fund holds dozens of halal stocks, spreading risk automatically. You get portfolio diversification through a single investment.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Time Savings</h4>
              <p className="text-gray-700">No need to research companies, monitor holdings, or rebalance. Perfect for busy professionals who want to invest without consuming countless hours.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Emotional Protection</h4>
              <p className="text-gray-700">Reduces the temptation to panic-sell during market downturns. Professional management keeps emotions out of investment decisions.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Consistent Strategy</h4>
              <p className="text-gray-700">Funds follow a disciplined investment strategy. No second-guessing yourself or abandoning your plan during market volatility.</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Easier to Get Started</h4>
              <p className="text-gray-700">For beginners, mutual funds require less financial knowledge to invest confidently and appropriately.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <HelpCircle className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">How to Choose: Decision Framework</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Choose Halal Stocks If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You have 5+ hours per week for research and monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You enjoy financial analysis and learning about businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You're comfortable making investment decisions alone</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You want to minimize fees and maximize potential returns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You have strong emotional discipline and patience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You're willing to accept higher volatility for potential upside</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Choose Halal Mutual Funds If:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You have limited time for investing decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You prefer professional expertise managing your money</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You want automatic diversification without effort</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You're new to investing and want to learn gradually</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You struggle with emotional investing decisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">You prefer a consistent, disciplined approach</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Star className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">The Hybrid Approach: Best of Both Worlds</h2>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200">
            <p className="text-gray-700 mb-4">
              Many successful Muslim investors don't choose just one approach—they use both. Here's why:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Start with funds:</strong> Beginners often start with halal mutual funds to build discipline and learn how markets work without the stress of individual stock selection.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Add stocks over time:</strong> As confidence grows, investors add individual halal stocks to their portfolio alongside fund holdings.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Core + satellite:</strong> Keep funds as your "core" holding (70%) for stability and diversification, then add individual stocks as "satellites" (30%) for potential outperformance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                <span className="text-gray-700"><strong>Risk management:</strong> This dual approach spreads risk while capturing the benefits of both professional management and personal control.</span>
              </li>
            </ul>
            <p className="text-gray-700 font-semibold">
              Example: Invest $10,000 in a halal mutual fund for stability + $5,000 in 3-5 carefully selected halal stocks for active involvement.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <HelpCircle className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">FAQs (Frequently Asked Questions)</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-emerald-600" size={20} />
                  ) : (
                    <ChevronDown className="text-emerald-600" size={20} />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 py-4 border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg mb-16 border border-emerald-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Bottom Line</h2>
          <p className="text-gray-700 mb-4">
            There is no single "best" option for all investors. The right choice depends on your:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Available time and energy</li>
            <li>Financial knowledge and experience</li>
            <li>Risk tolerance and investment goals</li>
            <li>Personality and emotional discipline</li>
            <li>Investment amount and timeline</li>
          </ul>
          <p className="text-gray-700 font-semibold">
            The best halal investment strategy is the one you'll actually stick with consistently over decades. Whether that's halal stocks, halal mutual funds, or a combination of both, your commitment to regular, long-term investing while maintaining Islamic principles is what truly matters.
          </p>
        </section>

        <Footer />
      </main>

    
    </div>
  );
}

export default HalalMutualFundsVsStocks;
