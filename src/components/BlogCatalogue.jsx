import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, TrendingUp, Filter, Users, FileText, ArrowRight, ChevronLeft, Wind } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper for placeholder images ---
// Replaces the local image imports for a more dynamic and shareable component.
// You can replace this with your original image imports.
const getImageUrl = (seed, width, height) => `https://picsum.photos/seed/${seed}/${width}/${height}`;

// --- Placeholder Footer Component ---
// As the original Footer component was not provided.
const Footer = (props) => (
  <footer {...props} className="bg-gray-800 text-white py-8 mt-16">
    <div className="max-w-6xl mx-auto text-center">
      <p>&copy; {new Date().getFullYear()} Islamic Finance Blog. All Rights Reserved.</p>
    </div>
  </footer>
);

function BlogCatalogue() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Articles', icon: BookOpen },
    { id: 'investing', name: 'Halal Investing', icon: TrendingUp },
    { id: 'screening', name: 'Stock Screening', icon: Filter },
    { id: 'community', name: 'Community Insights', icon: Users },
    { id: 'guides', name: 'Beginner Guides', icon: FileText },
  ];
  
  // NOTE: I've updated imageUrl to use the placeholder function and added 'categoryName'
  const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Haram Stocks',
    excerpt: 'Navigate the stock market with confidence while adhering to Islamic principles. Learn what makes a stock halal or haram.',
    category: 'community',
    categoryName: 'Community Insights',
    date: 'April 10, 2025',
    author: 'Ahmed Hassan',
    imageUrl: getImageUrl('haram-stocks', 600, 400),
    readTime: '8 min read',
    featured: true,
    path: '/understand-haram'
  },
  {
    id: 2,
    title: 'Difference between Halal and Haram Stocks',
    excerpt: 'A comprehensive guide to ethical investing according to Islamic principles.',
    category: 'guides',
    categoryName: 'Beginner Guides',
    date: 'April 11, 2025',
    author: 'Fatima Ali',
    imageUrl: getImageUrl('halal-haram-diff', 600, 400),
    readTime: '6 min read',
    featured: false,
    path: '/halal-haram-diff'
  },
  {
    id: 3,
    title: 'The Role of AI in Halal Stock Screening',
    excerpt: 'Can artificial intelligence help Muslims invest more ethically? Absolutely.',
    category: 'screening', // Corrected category based on its content
    categoryName: 'Stock Screening',
    date: 'April 12, 2025',
    author: 'Ibrahim Khan',
    imageUrl: getImageUrl('ai-screening', 600, 400),
    readTime: '10 min read',
    featured: true,
    path: '/role-ai'
  },
  {
    id: 4,
    title: 'What Is a Halal Stock?',
    excerpt: 'Is it really possible to invest in the stock market without compromising your faith?',
    category: 'guides', // Corrected category
    categoryName: 'Beginner Guides',
    date: 'April 13, 2025',
    author: 'Aisha Rahman',
    imageUrl: getImageUrl('halal-stock-what', 600, 400),
    readTime: '7 min read',
    featured: false,
    path: '/halal-stock'
  },
  {
    id: 5,
    title: 'Top 5 Financial Ratios Used in Islamic Stock Screening',
    excerpt: 'Top 5 financial ratios used by Shariah scholars to determine if a stock meets Islamic guidelines.',
    category: 'screening',
    categoryName: 'Stock Screening',
    date: 'April 14, 2025',
    author: 'Yusuf Mahmood',
    imageUrl: getImageUrl('ratios', 600, 400),
    readTime: '9 min read',
    featured: false,
    path: '/financial-ratios'
  },
  {
    id: 6,
    title: 'How It Works: A Step-by-Step Guide to Our App', // Corrected title
    excerpt: 'A step-by-step tutorial on using our app to screen, monitor, and build your halal investment portfolio.',
    category: 'guides',
    categoryName: 'Beginner Guides',
    date: 'February 28, 2025',
    author: 'Nadia Jameel',
    imageUrl: getImageUrl('work', 600, 400),
    readTime: '5 min read',
    featured: true,
    path: '/how-it-works'
  },
  {
    id: 7,
    title: 'Top 10 Halal Stocks to Watch in 2025', // Corrected title
    excerpt: 'Here are the Top 10 Halal Stocks to Watch in 2025 based on their Shariah compliance, financial strength, and growth potential.',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'April 21, 2025',
    author: 'Abdul Rahman',
    imageUrl: getImageUrl('stocks', 600, 400),
    readTime: '5 min read',
    featured: true,
    path: '/top10'
  },
  {
    id: 8,
    title: 'What makes a Stock Haram',
    excerpt: 'Understanding Islamic Guidelines for Ethical Investing.',
    category: 'guides',
    categoryName: 'Beginner Guides',
    date: 'April 21, 2025',
    author: 'Bilal',
    imageUrl: getImageUrl('haram-guide', 600, 400),
    readTime: '5 min read',
    featured: true,
    path: '/haram'
  },
  {
    id: 9,
    title: 'How AI Helps Analyze Islamic Compliance in Stocks',
    excerpt: 'Imagine having the power to scan through thousands of companies in seconds—checking if they align with Islamic principles.',
    category: 'screening',
    categoryName: 'Stock Screening',
    date: 'April 21, 2025',
    author: 'Shakir',
    imageUrl: getImageUrl('ai-compliance', 600, 400),
    readTime: '5 min read',
    featured: true,
    path: '/aicompliance'
  },
  {
    id: 10,
    title: 'Case Study: How a Haram Stock Can Become Halal — And Vice Versa',
    excerpt: 'Discover the real factors that affect a stock’s halal status and how AI-powered tools help you stay informed in real time.',
    category: 'community',
    categoryName: 'Community Insights',
    date: 'May 28, 2025',
    author: 'Ahmed Hassan',
    imageUrl: getImageUrl('case-study', 600, 400),
    readTime: '8 min read',
    featured: true,
    path: '/case-study'
  },
  {
    id: 12,
    title: 'From Fatwas to Fintech: The Evolution of Shariah-Compliant Investing',
    excerpt: 'What began as a handful of religious rulings has now evolved into a sophisticated financial ecosystem powered by fintech.',
    category: 'community',
    categoryName: 'Community Insights',
    date: 'May 27, 2025',
    author: 'Fatima Ali',
    imageUrl: getImageUrl('fatwa-fintech', 600, 400),
    readTime: '6 min read',
    featured: false,
    path: '/fatwas'
  },
  {
    id: 13,
    title: '5 Common Myths About Halal Investing — Busted!',
    excerpt: 'Think halal investing means fewer opportunities or lower returns? Think again. In this article, we bust 5 common myths.',
    category: 'community',
    categoryName: 'Community Insights',
    date: 'May 13, 2025',
    author: 'Aisha Rahman',
    imageUrl: getImageUrl('myths-busted', 600, 400),
    readTime: '7 min read',
    featured: true, // Made featured to have more variety in the featured section
    path: '/myth'
  },
  {
    id: 14,
    title: 'Halal Stock Investing in India: Challenges and Opportunities',
    excerpt: 'Youre sitting with your savings, watching Indias booming stock market create millionaires daily.',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'July 28, 2025',
    author: 'Aisha Rahman',
    imageUrl: getImageUrl('halal-india', 600, 400),
    readTime: '7 min read',
    featured: true,
    path: '/halalIndia'
  },
  {
    id: 15,
    title: 'Sector Spotlight: Is the Biotech Industry Halal-Compliant?',
    excerpt: 'A groundbreaking new vaccine could save millions, but its development involved a pork-derived enzyme.',
    category: 'screening',
    categoryName: 'Stock Screening',
    date: 'July 30, 2025',
    author: 'Aisha Rahman',
    imageUrl: getImageUrl('biotech-halal', 600, 400),
    readTime: '7 min read',
    featured: false,
    path: '/Biotech'
  },
  {
    id: 16,
    title: 'Zakat and Halal Investments: What Every Muslim Investor Should Know',
    excerpt: 'Your Investments & Spiritual Duty: Zakat and Halal Investments',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'July 29, 2025',
    author: 'Aisha Rahman',
    imageUrl: getImageUrl('zakat-invest', 600, 400),
    readTime: '7 min read',
    featured: false,
    path: '/Zakat'
  },
  {
    id: 17,
    title: 'Can You Build Wealth Without Compromising Faith? A Practical Halal Investing Roadmap',
    excerpt: 'The question haunts many Muslim investors: Can I achieve financial freedom while staying true to my Islamic beliefs? Learn a practical, step-by-step roadmap.',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'December 31, 2025',
    author: 'Islamic Finance Team',
    imageUrl: getImageUrl('wealth-faith-roadmap', 600, 400),
    readTime: '12 min read',
    featured: true,
    path: '/wealth-faith-roadmap'
  },
  {
    id: 18,
    title: 'Halal Mutual Funds vs Halal Stocks: Which Is Better for Muslim Investors?',
    excerpt: 'Choosing between halal stocks and halal mutual funds is a crucial decision. Compare both approaches and discover which aligns best with your financial goals.',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'December 31, 2025',
    author: 'Islamic Finance Team',
    imageUrl: getImageUrl('mutual-funds-vs-stocks', 600, 400),
    readTime: '11 min read',
    featured: true,
    path: '/mutual-funds-vs-stocks'
  },
  {
    id: 19,
    title: 'How Often Does a Stock\'s Halal Status Change? (And Why You Must Monitor It)',
    excerpt: 'One of the most overlooked aspects of halal investing is that a stock\'s Shariah compliance isn\'t permanent. Learn why status changes occur and how to monitor.',
    category: 'screening',
    categoryName: 'Stock Screening',
    date: 'December 31, 2025',
    author: 'Islamic Finance Team',
    imageUrl: getImageUrl('halal-status-monitor', 600, 400),
    readTime: '10 min read',
    featured: true,
    path: '/halal-status-changes'
  },
  {
    id: 20,
    title: 'Beginner Mistakes Muslim Investors Make — And How to Avoid Haram Income',
    excerpt: 'Learn the 10 most common mistakes that Muslim investors make and how to avoid them. Protect your portfolio and ensure you never accidentally earn haram income.',
    category: 'guides',
    categoryName: 'Beginner Guides',
    date: 'December 31, 2025',
    author: 'Islamic Finance Team',
    imageUrl: getImageUrl('beginner-mistakes', 600, 400),
    readTime: '12 min read',
    featured: true,
    path: '/beginner-mistakes'
  },
  {
    id: 21,
    title: 'The Future of Halal Investing: AI, Automation, and Real-Time Shariah Compliance',
    excerpt: 'Artificial intelligence, blockchain, and real-time monitoring are transforming halal investing. Discover the technologies shaping the future and what they mean for you.',
    category: 'investing',
    categoryName: 'Halal Investing',
    date: 'December 31, 2025',
    author: 'Islamic Finance Team',
    imageUrl: getImageUrl('future-halal-ai', 600, 400),
    readTime: '11 min read',
    featured: true,
    path: '/future-halal-investing'
  },
];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured).sort((a, b) => new Date(b.date) - new Date(a.date));
  const heroPost = featuredPosts[0];
  const otherFeaturedPosts = featuredPosts.slice(1);

  return (
    <div className="min-h-screen bg-gray-50 font-sans" data-testid="blog-catalogue-container">
      {/* Header */}
      <header className="bg-white border-b border-gray-200" data-testid="blog-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button 
            className="group flex items-center text-sm font-medium text-gray-500 hover:text-green-700 mb-6 transition-colors duration-200" 
            onClick={() => navigate(-1)}
            aria-label="Go Back"
            data-testid="go-back-button"
          >
            <ChevronLeft className="w-5 h-5 mr-1 transform transition-transform duration-200 group-hover:-translate-x-1" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2" data-testid="blog-title">
            The Halal Investor's Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl" data-testid="blog-subtitle">
            Insights, guides, and resources for building wealth on Shariah principles.
          </p>
        </div>
      </header>

      {/* Search and Categories Section */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 shadow-sm" data-testid="search-categories-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {/* Search Box */}
          <div className="relative mb-5" data-testid="search-container">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-testid="search-icon-container">
              <Search className="h-5 w-5 text-gray-400" data-testid="search-icon" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              data-testid="search-input"
              aria-label="Search articles"
            />
          </div>
          
          {/* Categories */}
          <div className="flex space-x-2 pb-2 -mx-4 px-4 overflow-x-auto" data-testid="categories-container" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  data-testid={`category-${category.id}`}
                  className={`flex-shrink-0 flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ease-out ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-800 hover:bg-green-100 hover:text-green-800'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  aria-pressed={activeCategory === category.id}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="blog-main-content">
        
        {/* Featured Section - Only show if not searching or filtering */}
        {!searchTerm && activeCategory === 'all' && heroPost && (
          <section className="mb-16" data-testid="featured-articles-section">
            {/* Hero Post */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to={heroPost.path} className="block group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2 items-center bg-white">
                  <div className="p-8 order-2 md:order-1">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">{heroPost.categoryName}</span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">{heroPost.title}</h2>
                    <p className="text-gray-600 mb-6">{heroPost.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>By {heroPost.author} &bull; {heroPost.date}</span>
                      <span className="font-semibold text-gray-700">{heroPost.readTime}</span>
                    </div>
                  </div>
                  <div className="h-64 md:h-full order-1 md:order-2">
                    <img src={heroPost.imageUrl} alt={heroPost.title} className="w-full h-full object-cover"/>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Other Featured Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" data-testid="featured-posts-grid">
              {otherFeaturedPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* All Blog Posts Section */}
        <section data-testid="blog-posts-section">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" data-testid="section-title">
            {searchTerm ? `Results for "${searchTerm}"` : activeCategory !== 'all' ? categories.find(c => c.id === activeCategory).name : 'All Articles'}
          </h2>
          
          <AnimatePresence>
            {filteredPosts.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16" data-testid="no-results">
                <Wind className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-xl font-semibold text-gray-700" data-testid="no-results-message">No articles found.</p>
                <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveCategory('all');}}
                  className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors"
                  aria-label="Clear search filters"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12" data-testid="all-articles-grid">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <Footer data-testid="blog-footer" />
    </div>
  );
}

// --- Reusable Blog Post Card Component ---
const BlogPostCard = ({ post }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.95 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    data-testid={`post-card-${post.id}`}
  >
    <Link to={post.path} className="block group">
      <div className="relative">
        <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
            data-testid={`post-image-${post.id}`}
          />
        </div>
        <span className="absolute top-4 right-4 bg-green-600/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm" data-testid={`post-category-${post.id}`}>{post.categoryName}</span>
      </div>
      <div className="pt-5" data-testid={`post-content-${post.id}`}>
        <p className="text-sm text-gray-500 mb-2" data-testid={`post-meta-${post.id}`}>{post.date} &bull; {post.readTime}</p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200" data-testid={`post-title-${post.id}`}>{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4" data-testid={`post-excerpt-${post.id}`}>{post.excerpt}</p>
        <div className="flex items-center text-green-600 font-semibold text-sm" data-testid={`read-more-${post.id}`}>
          Read More
          <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default BlogCatalogue;
