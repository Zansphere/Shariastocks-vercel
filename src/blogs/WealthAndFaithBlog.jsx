import React, { useState } from "react";
import { Book, Briefcase, CheckCircle, ChevronDown, ChevronUp, Clock, Coffee, DollarSign, FileText, Filter, Globe, HelpCircle, Home, Info, List, Pen, Search, Shield, Star, Users, XCircle, Target, TrendingUp, Heart } from "lucide-react";
import Footer from '../components/Footer'

function WealthAndFaithBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it possible to build significant wealth while staying true to Islamic principles?",
      answer: "Absolutely. Many successful Muslim investors have built substantial wealth through halal investing. The key is aligning your investment strategy with Islamic principles while leveraging proven financial strategies. With discipline, knowledge, and the right tools, you can achieve both financial growth and spiritual peace of mind."
    },
    {
      question: "How long does it take to see returns on halal investments?",
      answer: "Halal investing follows the same market dynamics as conventional investing. Short-term returns vary by market conditions, but historically, patient investors who stay invested for 5-10+ years see significant compound growth. The timeline depends on your investment strategy, risk tolerance, and the specific assets you choose."
    },
    {
      question: "Are halal stocks less profitable than conventional stocks?",
      answer: "Research shows that halal stocks perform comparably to or sometimes better than conventional stocks. Companies that follow ethical practices often have stronger governance, lower risk profiles, and more sustainable business models. Profitability comes from smart selection, not from compromising your values."
    },
    {
      question: "What's the first step I should take to start halal investing?",
      answer: "Begin by educating yourself on the basics: understand what makes a stock halal, learn about key financial ratios used in screening, and familiarize yourself with Islamic finance principles. Then, assess your financial goals, risk tolerance, and investment timeline. Finally, use screening tools or consult with Islamic finance advisors to start building your portfolio."
    },
    {
      question: "Can I diversify my portfolio while maintaining halal compliance?",
      answer: "Yes, diversification is crucial in halal investing. You can invest across various halal-compliant sectors including technology, healthcare, consumer goods, and utilities. Consider halal ETFs, individual stocks, bonds (sukuk), and other Islamic financial products to create a well-balanced, compliant portfolio."
    },
    {
      question: "How do I handle zakat on my investment returns?",
      answer: "Zakat obligations depend on your specific circumstances and are calculated based on your total wealth. Generally, you calculate zakat on capital gains and dividends earned from your investments. It's advisable to consult with an Islamic scholar or tax advisor familiar with zakat to ensure you meet your religious obligations correctly."
    },
    {
      question: "What if I already have non-halal investments?",
      answer: "If you currently hold non-halal investments, you can gradually transition to a halal portfolio. Consider divesting haram holdings and reallocating proceeds to halal-compliant assets. Some scholars advise donating gains from haram sources to charity. Consult with an Islamic finance advisor to create a transition plan aligned with your values."
    }
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-16 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Can You Build Wealth Without Compromising Faith?</h1>
          <p className="text-xl md:text-2xl mb-6 italic">A Practical Halal Investing Roadmap</p>
          <p className="text-lg mb-6">
            The question haunts many Muslim investors: Can I achieve financial freedom while staying true to my Islamic beliefs? 
          </p>
          <p className="text-lg">
            The answer is a resounding yes. This comprehensive roadmap will show you how to build lasting wealth through halal investing—with practical steps, proven strategies, and clear guidance every step of the way.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Heart className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">The Dilemma: Faith vs. Financial Growth</h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              For decades, many Muslim investors faced an uncomfortable choice: compromise their faith for financial gains or forgo wealth-building opportunities altogether. This false dichotomy kept countless believers from achieving their financial potential.
            </p>
            <p>
              But times have changed. The Islamic finance industry now exceeds $2 trillion globally, proving that faith and financial success aren't mutually exclusive. Today, more Muslims than ever are discovering that building wealth and honoring Islamic principles can—and should—go hand in hand.
            </p>
            <p>
              The real question isn't whether you can build wealth as a Muslim investor. It's whether you have the right knowledge, tools, and roadmap to do it effectively. This guide provides exactly that.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Target className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">The Halal Investing Roadmap</h2>
          </div>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">1</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Master the Fundamentals</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Before you invest a single dollar, develop a solid understanding of halal investing basics. Learn what makes a stock halal or haram, understand key Islamic finance concepts, and familiarize yourself with Shariah screening criteria.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Study business activity screening (which industries are halal vs. haram)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Learn financial ratio thresholds for debt, interest income, and liquidity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Understand how zakat obligations apply to your investments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Familiarize yourself with Islamic financial products (stocks, sukuk, halal ETFs)</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">2</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Define Your Financial Goals and Timeline</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Clarity on your objectives is essential. Are you saving for retirement? A down payment on a home? Your children's education? Your goals determine your investment strategy, risk tolerance, and timeline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Set SMART financial goals (Specific, Measurable, Achievable, Relevant, Time-bound)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Determine your investment timeline (short-term, medium-term, long-term)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Assess your risk tolerance and financial capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Build an emergency fund before investing (3-6 months of expenses)</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">3</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Start with Halal Screening</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Use screening tools and methodologies to identify halal-compliant companies. Modern technology makes this easier than ever, but understanding the process helps you make informed decisions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Use AI-powered screening platforms that apply Shariah criteria automatically</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Filter by business activity: exclude haram industries (alcohol, gambling, interest-based finance, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Apply financial ratio filters for debt, interest income, and cash composition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Verify screening results with trusted Islamic finance resources or advisors</span>
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">4</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Build a Diversified Halal Portfolio</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Don't put all your eggs in one basket. A well-diversified portfolio reduces risk and improves your chances of consistent returns over time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Spread investments across multiple sectors (technology, healthcare, consumer goods, utilities, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Consider a mix of asset classes: halal stocks, halal ETFs, sukuk (Islamic bonds)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Balance growth stocks with dividend-paying companies for regular income</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Use asset allocation strategies aligned with your risk tolerance and goals</span>
                </li>
              </ul>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">5</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Commit to Regular Investment (Dollar-Cost Averaging)</h3>
              </div>
              <p className="text-gray-700 mb-4">
                One of the most powerful wealth-building strategies is consistent, regular investing. This approach smooths out market volatility and builds discipline.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Set up automatic monthly or quarterly investments from your income</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Stay invested through market ups and downs—avoid panic selling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Reinvest dividends to harness the power of compound growth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Track your progress and celebrate milestones along the way</span>
                </li>
              </ul>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-emerald-600 shadow-sm">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-emerald-600 text-white font-bold">6</div>
                <h3 className="text-2xl font-bold text-gray-800 ml-4">Monitor, Rebalance, and Educate</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Investing is not a "set and forget" activity. Regular monitoring and rebalancing ensure your portfolio stays aligned with your goals and Islamic principles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Review your portfolio quarterly to ensure halal compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Rebalance annually to maintain your target asset allocation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Stay updated on market trends and Islamic finance developments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-emerald-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Consult with Islamic finance advisors for major decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Key Principles for Success</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Patience Pays Off</h3>
              <p className="text-gray-700">
                Wealth is built slowly through consistent effort and time. The longer you stay invested, the more compounding works in your favor. Expect to see meaningful results in 5-10 years or more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Knowledge is Power</h3>
              <p className="text-gray-700">
                The more you understand about Islamic finance, stock markets, and investing principles, the better decisions you'll make. Invest in your education first.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emotional Discipline</h3>
              <p className="text-gray-700">
                Market volatility is normal. Don't let short-term price fluctuations derail your long-term strategy. Stay focused on your goals and investment plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Faith-Based Decision Making</h3>
              <p className="text-gray-700">
                Remember that halal investing is about more than returns—it's about building wealth while honoring your values. This alignment brings peace of mind that no return can replace.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Shield className="text-emerald-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Common Pitfalls to Avoid</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Starting without a plan:</strong> Invest only after setting clear goals and understanding your strategy</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Neglecting diversification:</strong> Spreading risk across multiple assets is crucial for long-term success</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Following hype or hot tips:</strong> Make decisions based on research and analysis, not market buzz</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Ignoring halal compliance:</strong> Don't compromise on Islamic principles for short-term gains</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Panicking during downturns:</strong> Market corrections are normal; stay committed to your strategy</span>
            </li>
            <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
              <XCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700"><strong>Forgetting about zakat obligations:</strong> Factor in zakat calculations when planning your returns</span>
            </li>
          </ul>
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Journey to Faithful Wealth Starts Today</h2>
          <p className="text-gray-700 mb-4">
            Building wealth without compromising faith isn't just possible—it's a responsibility. When you align your investments with Islamic principles, you're not just securing your financial future; you're contributing to a more ethical global economy.
          </p>
          <p className="text-gray-700 mb-4">
            Start with the fundamentals, set clear goals, and commit to consistent action. Use the tools and platforms available today to make halal investing accessible and manageable. Remember: every millionaire started with the first investment. The time to begin is now.
          </p>
          <p className="text-gray-700 font-semibold">
            Your faith and your wealth can—and should—grow together. ✨
          </p>
        </section>

        <Footer />
      </main>

    
    </div>
  );
}

export default WealthAndFaithBlog;
