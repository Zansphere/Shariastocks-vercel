import React from 'react';
import { Coins, ShieldCheck, TrendingUp, CircleDollarSign, Check, X, CalendarDays, BookOpen, Droplets } from 'lucide-react';

const ZakatInvestingBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Hook */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Coins className="text-yellow-600" size={20} />
            Your Investments & Spiritual Duty
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
              Zakat and Halal Investments
            </span>
          </h1>
          
          {/* Engaging Hook */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                You've meticulously built a Shariah-compliant investment portfolio, focusing on growth and ethical principles. But as your wealth grows, a crucial question arises:
              </p>
              <p className="text-xl font-medium text-gray-900">
                How do you fulfill one of the most important pillars of Islam—Zakat—on these modern assets?
              </p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <CircleDollarSign className="text-green-600" size={28} />
            Bridging Faith and Finance
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Zakat is not just a personal act of worship—it's a financial obligation that extends to your investment portfolio. For Muslims engaged in halal investing, understanding when and how to calculate and pay zakat on stocks, dividends, and other assets is a cornerstone of financial and spiritual integrity.
          </p>
        </section>

        {/* What Types of Investments Are Zakatable? Section */}
        <section className="bg-gray-50 rounded-2xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            Which of Your Investments are Zakatable?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zakatable Assets */}
            <div className="bg-green-100/60 border-l-4 border-green-500 rounded-r-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Check size={20} /> Zakat is Due On:
              </h3>
              <ul className="text-green-800 space-y-2">
                <li>Stocks held for <strong className="font-semibold">short-term trading</strong></li>
                <li>Profits and dividends received from halal stocks[9]</li>
                <li>Cash sitting in your brokerage accounts</li>
              </ul>
            </div>
            {/* Non-Zakatable Assets */}
            <div className="bg-red-100/60 border-l-4 border-red-500 rounded-r-lg p-6">
              <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center gap-2">
                <X size={20} /> Zakat is Not Due On:
              </h3>
              <ul className="text-red-800 space-y-2">
                <li>Stocks held for <strong className="font-semibold">long-term growth</strong> (the principal value)</li>
                <li className="text-sm italic">(Note: Zakat is still due on the underlying zakatable assets of the company itself)[8].</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Calculate Zakat on Stocks Section */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <TrendingUp className="text-yellow-600" size={28} />
            How Much Zakat to Pay on Stocks?
          </h2>
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">For Trading Stocks (Short-Term)</h3>
              <p className="text-gray-700">If you buy and sell stocks with the intention of making a quick profit, the calculation is simple. You pay <strong className="text-yellow-800">2.5% on the current market value</strong> of your entire stock holding[6].</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">For Investment Stocks (Long-Term)</h3>
              <p className="text-gray-700">If you hold stocks for long-term value growth and dividends, you pay <strong className="text-green-800">2.5% on the zakatable portion</strong> of the company's underlying assets (e.g., cash, inventory)[8]. This often requires checking the company's balance sheet or using a proxy calculation, such as 25% of your holding's value[6].</p>
            </div>
          </div>
        </section>

        {/* Purification & Dividends Section */}
        <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <Droplets className="text-blue-600" size={28} />
              Purification: A Critical First Step
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Even Shariah-compliant stocks can have tiny amounts of haram income (e.g., interest from a corporate bank account). This portion must be "purified" by donating it to charity <strong className="text-blue-800">before</strong> you calculate your Zakat[7][10]. You do not pay Zakat on haram money[7].
            </p>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500 mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Zakat on Dividends</h3>
                <p className="text-gray-700">Once you receive dividends, you must first purify them if the company had any non-compliant income. Afterward, you pay <strong className="text-blue-800">2.5% on the net halal dividends</strong> you hold[5].</p>
            </div>
        </section>

        {/* Zakat on ETFs and Funds Section */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BookOpen className="text-purple-600" size={28} />
                Zakat on ETFs and Mutual Funds
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
                The zakatability of an ETF or mutual fund depends on its underlying assets[4]. Many Shariah-compliant funds simplify this by providing an annual "zakat report" that tells you the exact amount of zakatable assets per share, making the calculation straightforward for investors[4].
            </p>
        </section>

        {/* When to Pay Section */}
        <section className="bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl text-white p-8 mb-8 text-center">
            <div className="flex justify-center items-center gap-4 mb-3">
                <CalendarDays size={32} />
                <h2 className="text-2xl font-bold">When to Pay Your Zakat?</h2>
            </div>
            <p className="text-lg text-yellow-50">
                Zakat on your wealth is paid <strong className="font-semibold">annually</strong>. You should choose a consistent "Zakat date" each year—either based on the Hijri or Gregorian calendar—to assess your assets and fulfill your obligation[5].
            </p>
        </section>

        {/* Conclusion */}
        <section className="bg-green-900/90 rounded-2xl text-white p-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <ShieldCheck className="text-green-400" size={28} />
            Your Path to Compliant Giving
          </h2>
          <div className="text-green-100 leading-relaxed text-lg space-y-4">
            <p>
              Calculating zakat on halal investments is a moral and spiritual obligation that aligns your financial journey with your faith. By keeping clear records, screening for compliance, and purifying your earnings, you can fulfill this important pillar with confidence and clarity.
            </p>
            <div className="bg-green-50/10 rounded-xl p-6 mt-6">
              <p className="text-white font-medium text-center">
                💡 <strong>The bottom line:</strong> Proper Zakat management ensures your wealth is not only growing but also blessed and purified.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZakatInvestingBlog;
