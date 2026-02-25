import React from 'react';
import { Dna, ShieldCheck, AlertTriangle, FlaskConical, Microscope, Recycle, CheckCircle } from 'lucide-react';

const BiotechHalalBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Hook */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Dna className="text-blue-600" size={20} />
            Sector Spotlight: Biotech & Faith
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Is the Biotech Industry Halal?
            </span>
          </h1>
          
          {/* Engaging Hook */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong className="text-blue-600">Consider this:</strong> A groundbreaking new vaccine could save millions, but its development involved a pork-derived enzyme.
              </p>
              <p className="text-xl font-medium text-gray-900">
                As an investor guided by faith, do you back the innovation or uphold your principles? This is the complex reality of investing in biotechnology today. 🧬
              </p>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Microscope className="text-purple-600" size={28} />
            Where Science Meets Shariah
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Biotechnology is one of the fastest-growing sectors globally, driving innovations that redefine medicine and science. But for the compliance-conscious investor, is it halal? This exploration delves into how Shariah principles intersect with biotechnology, especially concerning medical innovation, genetic research, and pharmaceuticals.
          </p>
        </section>

        {/* What is Biotech Section */}
        <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
            <FlaskConical className="text-blue-600" size={28} />
            What is the Biotech Industry?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800">
            <div className="bg-white p-4 rounded-lg shadow-sm">Drug Development & Pharmaceuticals</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">Genetic Engineering & Gene Editing</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">Vaccine Research & Manufacturing</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">Agricultural Biotech (GMOs)</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">Stem Cell Therapy & Research</div>
            <div className="bg-white p-4 rounded-lg shadow-sm">Diagnostic Technologies</div>
          </div>
        </section>

        {/* Potential Shariah Concerns Section */}
        <section className="bg-red-50 rounded-2xl border border-red-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-3">
            <AlertTriangle className="text-red-600" size={28} />
            Potential Shariah Red Flags
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Use of Haram Substances</h3>
              <p className="text-gray-700">Products derived from pork enzymes, blood, or other non-halal animal sources can render an investment haram. This includes substances used during R&D, even if not in the final product[4].</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Stem Cell & Genetic Research</h3>
              <p className="text-gray-700">Deep ethical debates exist within Islamic jurisprudence regarding embryonic stem cell use, human cloning, or gene editing[10]. Juristic opinions vary widely based on the method and ultimate purpose[6].</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Uncertainty (Gharar) and Speculation</h3>
              <p className="text-gray-700">Many biotech firms are high-risk, R&D-heavy startups with speculative outcomes. Excessive uncertainty (Gharar) can make an investment non-compliant unless it is carefully screened for financial stability[11].</p>
            </div>
          </div>
        </section>

        {/* When is Biotech Halal Section */}
        <section className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            <ShieldCheck className="text-emerald-600" size={28} />
            The Path to Halal-Compliant Biotech
          </h2>
          <p className="text-lg text-gray-800 mb-6">A biotech investment may be considered halal if the company passes rigorous screening. The key is ensuring both the company's financials and its products adhere to Shariah principles[9].</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <CheckCircle className="text-emerald-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900">No Haram Income</h3>
              <p className="text-gray-600 text-sm">The company's core business and secondary income streams must be free from prohibited sources[11].</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <CheckCircle className="text-emerald-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900">Ethical Practices</h3>
              <p className="text-gray-600 text-sm">It must avoid unethical medical practices, such as impermissible forms of gene editing or embryonic research[6].</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <CheckCircle className="text-emerald-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900">Compliant Financing</h3>
              <p className="text-gray-600 text-sm">The company should not engage in impermissible borrowing or have excessive interest-bearing debt[11].</p>
            </div>
          </div>
        </section>
        
        {/* Examples Section */}
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Recycle className="text-blue-600" size={28} />
            Examples of Halal-Friendly Biotech
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Finding compliant companies requires due diligence, but they do exist. Look for firms focused on plant-based medicines, those pursuing official Halal certification for their products, or diagnostic companies with clear ethical frameworks[15][12]. AI-driven drug discovery firms that focus on ethical data can also be a promising area.
          </p>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
          <h2 className="text-2xl font-bold mb-4">The Verdict: A Field of Cautious Opportunity</h2>
          <div className="text-blue-100 leading-relaxed text-lg space-y-4">
            <p>
              The biotech sector can absolutely be a source of halal investment opportunities, but it is not a simple "yes" or "no." It all depends on the specific business practices, product lines, and financial health of the company.
            </p>
            <p className="font-semibold text-white">
              For the compliance-conscious investor, thorough screening and due diligence are not just recommended—they are essential.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BiotechHalalBlog;
