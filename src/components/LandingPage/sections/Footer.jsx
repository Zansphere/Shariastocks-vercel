import React from 'react';
import logo1 from '../../../images/ShariaStocks-logo/ShariaStocks1.png'; // Use .webp if possible

export default function Footer() {
  const socialLinks = [
    { platform: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
    { platform: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { platform: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative z-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src={logo1} alt="ShariaStocks Logo" className="w-40 mb-4 filter brightness-0 invert" />
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">Your trusted platform for halal stock screening and ethical investment guidance.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.platform} href="#" className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors group">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Features', 'How It Works', 'Pricing', 'FAQ'].map(link => (<li key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-emerald-400 transition-colors">{link}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {[{ title: 'Halal Investment Blog', path: '/blogs' }, { title: 'About Us', path: '/about' }, { title: 'Terms & Conditions', path: '/terms' }, { title: 'Privacy Policy', path: '/privacy' }].map(link => (<li key={link.title}><a href={link.path} className="text-gray-400 hover:text-emerald-400 transition-colors">{link.title}</a></li>))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400"><svg className="h-5 w-5 mr-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> contact@shariastocks.in</p>
              <p className="flex items-center text-gray-400"><svg className="h-5 w-5 mr-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Chennai, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Zansphere Private Limited. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0"><a href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms</a><a href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy</a><a href="/cookies" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}