import React, { useState } from "react";
import { Book, Briefcase, CheckCircle, ChevronDown, ChevronUp, Clock, Coffee, DollarSign, FileText, Filter, Globe, HelpCircle, Home, Info, List, Pen, Search, Shield, Star, Users, XCircle, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import Footer from '../components/Footer'

function BeginnerMistakesBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it worse to earn haram income or make investment mistakes?",
      answer: "Both are problematic, but for different reasons. Haram income directly violates Islamic principles, whereas investment mistakes are learning opportunities. However, a single instance of haram income is spiritually more serious than a poor investment decision. The key is ensuring you never deliberately accept haram income while learning from investment errors."
    },
    {
      question: "What counts as haram income from stocks?",
      answer: "Haram income includes: interest earned on cash holdings, dividends from haram companies, profits from trading haram stocks, and gains from transactions involving speculation or manipulation. Also included: income earned during the period a stock is non-compliant but you hold it anyway. When in doubt, consult an Islamic scholar."
    },
    {
      question: "Can I 'donate away' haram income to make it permissible?",
      answer: "You cannot make haram income halal through charity. However, Islamic scholars suggest that if you've earned haram income unknowingly, you should donate the problematic portion to charity for purification. If you earned it knowingly, repentance and donation are necessary but don't erase the spiritual transgression."
    },
    {
      question: "How much time should I spend researching before investing?",
      answer: "At minimum, spend 3-6 months learning fundamentals before making your first stock purchase. This includes understanding Islamic finance principles, screening criteria, financial analysis basics, and risk management. For halal mutual funds, you need less preparation. Quality over speed—better to delay investing while properly educated than to start hastily."
    },
    {
      question: "Should I avoid all risky investments to stay halal?",
      answer: "No. Risk itself isn't haram; it's part of legitimate investing. What matters is that your investment is in a halal company, conducted with proper research, and undertaken with realistic expectations. A volatile halal stock is permissible; a low-risk haram bond is not. Never confuse halal status with safety."
    },
    {
      question: "What if I accidentally bought a haram stock?",
      answer: "Don't panic. Immediately verify it's truly non-compliant using multiple sources. If confirmed, create a divestment plan considering taxes and timing. Any profits should be considered problematic—consult a scholar about whether to donate them. The key is acting quickly once you realize the mistake rather than continuing to hold."
    },
    {
      question: "How do I know if a crypto or NFT investment is halal?",
      answer: "Most Islamic scholars are cautious about cryptocurrencies and NFTs due to speculation concerns, lack of underlying value, and extreme volatility. While some newer frameworks are emerging, cryptocurrency investments carry significant haram risk through speculation. Consult Islamic finance scholars before investing. Most mainstream halal investors currently avoid these assets."
    },
    {
      question: "Is day trading haram if I only trade halal stocks?",
      answer: "Day trading's halal status depends on your intentions and methods. If it's pure speculation with no underlying business analysis, most Islamic scholars consider it haram. Additionally, day trading often involves interest-based margin, which is always haram. Long-term investing in halal stocks is significantly safer from a Shariah compliance perspective."
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Beginner Mistakes Muslim Investors Make</h1>
          <p className="text-xl md:text-2xl mb-6 italic">— And How to Avoid Haram Income</p>
          <p className="text-lg mb-6">
            You're ready to start halal investing. Your intentions are pure. But without the right guidance, even well-meaning beginners can stumble into costly mistakes—or worse, accidentally earn haram income.
          </p>
          <p className="text-lg">
            This guide reveals the most common pitfalls Muslim investors face and provides practical strategies to avoid them. Learn what separates successful halal investors from those who learn the hard way.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <AlertTriangle className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Why Beginners Are Vulnerable</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              Muslim investors face a unique challenge: they must navigate traditional investing principles while adhering to Islamic guidelines. This dual responsibility makes it easy to make mistakes that non-Muslim investors might never encounter.
            </p>
            <p>
              The good news? Most beginner mistakes are preventable. They follow predictable patterns, and once you know what to watch for, you can sidestep them entirely.
            </p>
            <p>
              This guide helps you avoid becoming another cautionary tale and instead join the ranks of thoughtful Muslim investors who build wealth without compromising faith.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <XCircle className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">The 10 Most Common Beginner Mistakes</h2>
          </div>

          <div className="space-y-6">
            {/* Mistake 1 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
                Investing Without Understanding Halal Criteria
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Beginning investors often buy "halal stocks" without truly understanding what makes them halal. They trust a label or recommendation without verifying screening criteria.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Different organizations use different criteria. A stock marked as halal by one source might not meet another's standards. You could unknowingly own non-compliant assets.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Before buying any stock, personally verify its halal status using at least two reputable screening tools. Understand the specific criteria: debt ratios, interest income thresholds, and business activities. Read the screening reports yourself rather than trusting labels alone.
              </p>
            </div>

            {/* Mistake 2 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
                Neglecting to Monitor Holdings
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Beginners often "buy and forget," assuming a halal stock will remain halal forever. They don't monitor for status changes due to financial ratio changes or business pivots.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Companies change constantly. A stock compliant today might fail screening in six months due to increased debt or new business activities. Unknowingly holding a haram stock violates Islamic principles.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Set quarterly reminders to re-screen all holdings. Use automated monitoring tools that alert you to status changes. Follow quarterly earnings and read management commentary about strategic shifts. Don't assume compliance—verify it regularly.
              </p>
            </div>

            {/* Mistake 3 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
                Ignoring Interest Income and Cash Holdings
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Many beginners focus on business activity but overlook how companies generate income. Interest earned on cash or investments can make a stock non-compliant even if its core business is halal.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> You could earn dividends from interest-based income without realizing it. This haram income might go undetected for years, accumulating problematic wealth.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Always check the "interest income ratio" in screening reports. Understand what percentage of the company's income comes from interest, and ensure it meets Islamic standards (typically under 5%). Review financial statements to see cash positions and interest-bearing investments.
              </p>
            </div>

            {/* Mistake 4 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
                Following Hype Over Fundamentals
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Beginning investors often get caught up in "hot tips" or trending stocks. They invest emotionally based on social media buzz rather than careful analysis.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Hype-driven investing leads to poor selections and potential losses. You might buy a hyped stock only to discover it's non-compliant or overvalued. When the bubble bursts, you lose money and trust in the process.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Create a disciplined investment plan and stick to it. Ignore market chatter. Base decisions on fundamental analysis: company financials, halal compliance, growth prospects, and valuation. Move slowly and deliberately rather than chasing trends.
              </p>
            </div>

            {/* Mistake 5 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
                Inadequate Diversification
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Beginners often concentrate their portfolio in too few stocks or a single sector. They might invest everything in the tech halal stocks they understand best.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Concentrated portfolios expose you to excessive risk. If one stock encounters problems—or loses halal status—a large portion of your wealth is affected. You're not truly investing; you're gambling.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Diversify across at least 5-7 different halal stocks in different sectors. Better yet, consider using halal mutual funds that automatically provide diversification. Ensure no single holding is more than 10-15% of your portfolio.
              </p>
            </div>

            {/* Mistake 6 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">6</span>
                Using Leverage and Margin Without Understanding Them
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Some beginners use margin (borrowed money) to amplify their returns. They don't realize that margin typically involves interest payments, which are haram.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Margin involves paying riba (interest), which is explicitly forbidden in Islam. Even if you invest in halal stocks using borrowed money, the interest on that debt makes the entire arrangement haram. Additionally, margin amplifies losses as well as gains.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Never use margin or leverage in your halal portfolio. Only invest capital you already own. If leverage appeals to you, research Islamic-compliant financing options (some do exist), but recognize they have complications. Conservative investing is more compatible with Islamic principles.
              </p>
            </div>

            {/* Mistake 7 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">7</span>
                Day Trading and Speculation
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Some beginner investors treat halal stocks like gambling vehicles, trading frequently to "time the market" or chase short-term gains. They might use day trading strategies.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Most Islamic scholars view excessive short-term speculation as haram. Additionally, day trading costs (commissions, bid-ask spreads) typically exceed gains for amateur traders. You're not investing; you're speculating.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Commit to a long-term investment horizon (5+ years minimum). Buy and hold quality halal stocks. Avoid trading unless you're confident in your analysis and planning to hold for meaningful periods. Consider your trading decisions through an Islamic lens: are you investing or gambling?
              </p>
            </div>

            {/* Mistake 8 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">8</span>
                Forgetting About Zakat Obligations
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Beginners often build investment portfolios without considering zakat implications. They're surprised later when they realize they owe zakat on their portfolio but haven't set aside funds.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Zakat is a pillar of Islam. Failing to calculate and pay it properly violates a religious obligation. Investing without zakat accounting can lead to becoming unwittingly non-compliant with Islamic principles.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> From your first investment, understand your zakat obligations. Consult an Islamic finance advisor about how to calculate zakat on investments. Set aside funds annually to pay zakat as required. Factor zakat into your expected returns when planning investments.
              </p>
            </div>

            {/* Mistake 9 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">9</span>
                Selling at Panic During Market Downturns
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Inexperienced investors often panic sell during market corrections, locking in losses and missing the recovery that typically follows.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> You miss the opportunity to benefit from long-term market growth. You lock in losses and may buy back higher later. Market downturns are opportunities for believers with conviction, not reasons to abandon strategy.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Build a long-term perspective. Market volatility is normal and historically temporary. Have an emergency fund separate from investments so you don't need to tap investments during emergencies. Trust in your research and your Islamic principles—downturns test conviction but shouldn't shake strategy.
              </p>
            </div>

            {/* Mistake 10 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">10</span>
                Not Seeking Professional Guidance
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>The Mistake:</strong> Many beginners try to navigate halal investing entirely alone. They avoid consulting advisors or Islamic scholars to save money or due to embarrassment about financial ignorance.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Why It's Dangerous:</strong> Without expert guidance, you make costly mistakes that dwarf advisor fees. You might miss important nuances of Islamic finance or misunderstand halal requirements. The cost of ignorance far exceeds the cost of guidance.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>How to Avoid It:</strong> Invest in education and professional guidance. Consult with a certified Islamic finance advisor. Ask questions of Islamic scholars. Read reputable books on halal investing. The small investment in learning pays dividends throughout your investing lifetime.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Lightbulb className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">How to Ensure You Never Earn Haram Income</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold text-gray-800 mb-3">1. Verify Before Buying</h4>
              <p className="text-gray-700 mb-3">
                This is your first and most critical line of defense. Before purchasing any stock:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Screen using at least 2 reputable tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Review the detailed screening report</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Understand all compliance metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Note the screening date (avoid outdated reports)</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold text-gray-800 mb-3">2. Monitor Quarterly</h4>
              <p className="text-gray-700 mb-3">
                After purchase, maintain vigilance:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Re-screen holdings every quarter</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Use automated monitoring tools for alerts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Follow earnings reports and management commentary</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Watch for major business changes or acquisitions</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold text-gray-800 mb-3">3. Understand Interest vs. Dividends</h4>
              <p className="text-gray-700 mb-3">
                Know the difference and what you're receiving:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span><strong>Dividends:</strong> Income from company profits—halal if the company is compliant</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span><strong>Interest:</strong> Income from interest-based instruments—always haram</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Verify dividend sources to ensure they don't come from haram activities</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold text-gray-800 mb-3">4. Act Immediately if Status Changes</h4>
              <p className="text-gray-700 mb-3">
                If a holding becomes non-compliant:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Verify using multiple sources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Consult an Islamic finance advisor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Plan your divestment considering tax implications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Determine treatment of any haram income earned</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-600">
              <h4 className="text-xl font-bold text-gray-800 mb-3">5. Consult Islamic Scholars</h4>
              <p className="text-gray-700 mb-3">
                When in doubt about anything:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Ask Islamic scholars about specific situations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Different scholars may have different opinions—understand options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span>Document your consultation and decision for future reference</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <CheckCircle className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">The Beginner's Action Plan</h2>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200">
            <h4 className="font-semibold text-lg text-gray-800 mb-6">Follow this roadmap to start right:</h4>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold mr-4">1</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Month 1-2: Learn the Fundamentals</h5>
                  <p className="text-gray-700">Read books on Islamic finance, understand halal criteria, and learn basic financial analysis.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold mr-4">2</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Month 2-3: Consult Professionals</h5>
                  <p className="text-gray-700">Meet with an Islamic finance advisor and a tax professional to understand your obligations.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold mr-4">3</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Month 3-4: Start Small</h5>
                  <p className="text-gray-700">Make your first investment—consider halal mutual funds to learn with less complexity.</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold mr-4">4</span>
                <div>
                  <h5 className="font-semibold text-gray-800">Month 4+: Build and Monitor</h5>
                  <p className="text-gray-700">Gradually build your portfolio while establishing monitoring routines. Invest consistently over time.</p>
                </div>
              </div>
            </div>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Learn From Others' Mistakes</h2>
          <p className="text-gray-700 mb-4">
            Every successful halal investor has made mistakes—the key difference is that they learned from them rather than repeating them. The ten mistakes outlined in this guide represent hundreds of thousands of dollars lost by beginners who didn't know better.
          </p>
          <p className="text-gray-700 mb-4">
            By recognizing these pitfalls now, you gain the advantage of learning from collective experience rather than paying tuition through trial and error.
          </p>
          <p className="text-gray-700 font-semibold">
            Your journey as a halal investor begins with awareness. Use that awareness to build wealth with integrity, discipline, and faith. The rewards—both spiritual and financial—will follow. 🌱
          </p>
        </section>

        <Footer />
      </main>

    
    </div>
  );
}

export default BeginnerMistakesBlog;
