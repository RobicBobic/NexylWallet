import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';
import { Wallet, TrendingUp, Shield, BarChart3, Zap, Globe, X, ChevronRight, Check, Star, Users, Award, Target, Clock, Bell, Lock, Eye, Download, ArrowUpRight } from 'lucide-react';
import './nexyl-wallet.css';

const NexylWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const portfolioData = [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 5200 },
    { month: 'Mar', value: 4800 },
    { month: 'Apr', value: 6500 },
    { month: 'May', value: 7200 },
    { month: 'Jun', value: 8900 },
  ];

  const allocationData = [
    { name: 'ETH', value: 35, color: '#22c55e' },
    { name: 'BTC', value: 25, color: '#16a34a' },
    { name: 'USDC', value: 20, color: '#15803d' },
    { name: 'Other', value: 20, color: '#166534' },
  ];

  const tradingStatsData = [
    { month: 'Jan', wins: 45, losses: 15 },
    { month: 'Feb', wins: 52, losses: 18 },
    { month: 'Mar', wins: 48, losses: 12 },
    { month: 'Apr', wins: 60, losses: 20 },
    { month: 'May', wins: 65, losses: 15 },
    { month: 'Jun', wins: 72, losses: 18 },
  ];

  const leaderboardData = [
    { rank: 1, name: 'CryptoWhale', pnl: '+$124,589', winRate: '87%', trades: 1243 },
    { rank: 2, name: 'DiamondHands', pnl: '+$98,432', winRate: '82%', trades: 892 },
    { rank: 3, name: 'MoonChaser', pnl: '+$76,234', winRate: '79%', trades: 654 },
    { rank: 4, name: 'DeFiMaster', pnl: '+$65,890', winRate: '75%', trades: 543 },
    { rank: 5, name: 'TokenKing', pnl: '+$54,321', winRate: '73%', trades: 478 },
  ];

  const faqs = [
    {
      question: "What is Nexyl Wallet?",
      answer: "Nexyl Wallet is an advanced crypto wallet analytics platform that helps you track, analyze, and optimize your trading performance across multiple blockchains. We provide real-time insights, portfolio tracking, and AI-powered recommendations to help you make better trading decisions."
    },
    {
      question: "How does wallet analysis work?",
      answer: "We aggregate data from your connected wallets across various chains and provide comprehensive analytics including profit/loss tracking, win rates, portfolio distribution, and trading patterns. Our AI algorithms analyze your trading history to identify patterns and provide actionable insights."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption and never store your private keys. All connections are read-only and use secure API endpoints. Your wallet data is encrypted both in transit and at rest. We are SOC 2 Type II certified and undergo regular security audits."
    },
    {
      question: "Which chains are supported?",
      answer: "We support Ethereum, BSC, Polygon, Arbitrum, Optimism, Avalanche, Fantom, Solana, Base, zkSync, and 15+ other major blockchains with more being added regularly. We're constantly expanding our network support based on user demand."
    },
    {
      question: "How much does it cost?",
      answer: "We offer a free tier with basic analytics for up to 3 wallets. Premium plans start at $19/month for unlimited wallets and advanced features. Pro plans at $49/month include AI insights, custom alerts, and priority support. Enterprise plans are available for teams."
    },
    {
      question: "Can I track multiple wallets?",
      answer: "Yes! Premium users can track unlimited wallets across all supported chains. You can organize wallets with custom tags, create groups, and view consolidated analytics across all your addresses."
    },
    {
      question: "What makes Nexyl different from other trackers?",
      answer: "Nexyl combines advanced analytics with AI-powered insights. We don't just show you data - we help you understand it. Our platform includes features like predictive analytics, trading pattern recognition, risk assessment, and personalized recommendations that you won't find elsewhere."
    },
    {
      question: "Do you offer API access?",
      answer: "Yes! Pro and Enterprise plans include API access. You can integrate Nexyl's analytics into your own applications, create custom dashboards, or automate trading decisions based on our insights."
    }
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "DeFi Trader",
      content: "Nexyl Wallet increased my trading efficiency by 40%. The AI insights are incredibly accurate and have helped me avoid several bad trades.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Portfolio Manager",
      content: "Best portfolio tracker I've used. The multi-chain support and real-time analytics are exactly what I needed to manage client portfolios.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Crypto Investor",
      content: "The leaderboard feature keeps me motivated, and comparing my performance with top traders has taught me so much about strategy.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Up to 3 wallets",
        "Basic analytics",
        "5 chains",
        "Weekly reports",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$19",
      period: "per month",
      features: [
        "Unlimited wallets",
        "Advanced analytics",
        "All 22+ chains",
        "Daily reports",
        "Priority support",
        "Custom alerts",
        "Export data"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month",
      features: [
        "Everything in Premium",
        "AI-powered insights",
        "Predictive analytics",
        "API access",
        "White-label reports",
        "Dedicated support",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const handleWalletConnect = (walletType) => {
    console.log(`Connecting to ${walletType}...`);
    alert(`Connecting to ${walletType}... This is a demo. In production, this would initiate the ${walletType} connection.`);
    setShowModal(false);
  };

  return (
    <div className="nexyl-container">
      {/* Header */}
      <header className="nexyl-header">
        <div className="header-content">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            <img src="/logo.png" alt="Nexyl Logo" className="logo-image" />
            <span className="logo-text">Nexyl Wallet</span>
          </div>
          <nav className="nav-menu">
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }}>Features</a>
            <a href="#analytics" onClick={(e) => { e.preventDefault(); document.getElementById('analytics').scrollIntoView({ behavior: 'smooth' }); }}>Analytics</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }}>Pricing</a>
            <a href="#leaderboard" onClick={(e) => { e.preventDefault(); document.getElementById('leaderboard').scrollIntoView({ behavior: 'smooth' }); }}>Leaderboard</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq').scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
            <button className="connect-btn" onClick={() => setShowModal(true)}>
              <Wallet size={18} />
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Track Your Crypto
            <span className="gradient-text"> Like a Pro</span>
          </h1>
          <p className="hero-subtitle">
            Advanced wallet analytics for serious traders. Monitor performance, 
            compare with top traders, and make data-driven decisions across 22+ blockchains.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowModal(true)}>
              Get Started Free
            </button>
            <button className="secondary-btn" onClick={() => setShowDemo(true)}>
              <Eye size={18} />
              View Demo
            </button>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <div className="stat-value">$2.4B+</div>
              <div className="stat-label">Volume Tracked</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">22+</div>
              <div className="stat-label">Chains Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="section-header">
          <h2>Portfolio Performance</h2>
          <p>Real-time tracking of your wallet's performance</p>
        </div>
        <div className="chart-container">
          <div className="chart-stats">
            <div className="chart-stat">
              <span className="stat-label">Total Value</span>
              <span className="stat-value">$89,234.50</span>
            </div>
            <div className="chart-stat positive">
              <span className="stat-label">24h Change</span>
              <span className="stat-value">+$4,234.12 (+4.98%)</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #22c55e',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#22c55e" 
                strokeWidth={3}
                dot={{ fill: '#22c55e', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section id="analytics" className="analytics-section">
        <div className="section-header">
          <h2>Advanced Analytics Dashboard</h2>
          <p>Comprehensive insights into your trading performance</p>
        </div>
        
        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Portfolio Allocation</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a1a', 
                      border: '1px solid #22c55e',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="allocation-legend">
                {allocationData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: item.color }}></span>
                    <span className="legend-label">{item.name}</span>
                    <span className="legend-value">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="analytics-card">
            <h3>Win/Loss Ratio</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tradingStatsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1a1a1a', 
                    border: '1px solid #22c55e',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="wins" fill="#22c55e" name="Winning Trades" />
                <Bar dataKey="losses" fill="#ef4444" name="Losing Trades" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="quick-stats">
          <div className="quick-stat-card">
            <div className="stat-icon">
              <Target size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Win Rate</div>
              <div className="stat-value">78.5%</div>
              <div className="stat-change positive">+2.3% this month</div>
            </div>
          </div>
          <div className="quick-stat-card">
            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Avg. Profit</div>
              <div className="stat-value">$1,245</div>
              <div className="stat-change positive">+$127 per trade</div>
            </div>
          </div>
          <div className="quick-stat-card">
            <div className="stat-icon">
              <Clock size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Avg. Hold Time</div>
              <div className="stat-value">4.2 days</div>
              <div className="stat-change">Optimal range</div>
            </div>
          </div>
          <div className="quick-stat-card">
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-info">
              <div className="stat-label">Best Trade</div>
              <div className="stat-value">+$12,450</div>
              <div className="stat-change positive">342% ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to master your crypto portfolio</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Advanced Analytics</h3>
            <p>Deep insights into your trading patterns, win rates, and performance metrics across all your wallets with AI-powered analysis.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Globe size={32} />
            </div>
            <h3>Multi-Chain Support</h3>
            <p>Track wallets across 22+ blockchains including Ethereum, BSC, Polygon, Arbitrum, Solana, and more.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Zap size={32} />
            </div>
            <h3>Real-Time Updates</h3>
            <p>Get instant notifications on trades, price movements, and portfolio changes as they happen with WebSocket connections.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={32} />
            </div>
            <h3>Bank-Level Security</h3>
            <p>Your data is protected with enterprise-grade encryption. We never access your private keys. SOC 2 Type II certified.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={32} />
            </div>
            <h3>Smart Insights</h3>
            <p>AI-powered recommendations to optimize your trading strategy and maximize returns based on historical performance.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <Wallet size={32} />
            </div>
            <h3>Portfolio Management</h3>
            <p>Organize and track unlimited wallets with custom tags, notes, and performance goals. Create groups and consolidate data.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Trusted by Thousands of Traders</h2>
          <p>See what our community has to say</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#22c55e" color="#22c55e" />
                ))}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name[0]}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Start free and upgrade as you grow</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="price-amount">{plan.price}</span>
                <span className="price-period">/{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Check size={18} color="#22c55e" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={plan.popular ? 'primary-btn' : 'secondary-btn'}
                onClick={() => {
                  setSelectedPlan(plan.name.toLowerCase());
                  setShowModal(true);
                }}
              >
                {plan.price === "$0" ? "Start Free" : "Get Started"}
                <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Leaderboard Section */}
      <section id="leaderboard" className="leaderboard-section">
        <div className="section-header">
          <h2>Top Traders</h2>
          <p>See how you rank against the best performers</p>
        </div>
        <div className="leaderboard-table">
          <div className="table-header">
            <div className="table-cell">Rank</div>
            <div className="table-cell">Trader</div>
            <div className="table-cell">PnL</div>
            <div className="table-cell">Win Rate</div>
            <div className="table-cell">Trades</div>
          </div>
          {leaderboardData.map((trader) => (
            <div key={trader.rank} className="table-row">
              <div className="table-cell rank-cell">#{trader.rank}</div>
              <div className="table-cell">{trader.name}</div>
              <div className="table-cell pnl-positive">{trader.pnl}</div>
              <div className="table-cell">{trader.winRate}</div>
              <div className="table-cell">{trader.trades}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about Nexyl Wallet</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${activeQuestion === index ? 'active' : ''}`}
                onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
              >
                {faq.question}
                <span className="faq-icon">{activeQuestion === index ? '−' : '+'}</span>
              </button>
              {activeQuestion === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Take Control?</h2>
        <p>Join thousands of traders using Nexyl Wallet to optimize their crypto portfolio</p>
        <button className="primary-btn" onClick={() => setShowModal(true)}>
          Start Tracking Now
          <ArrowUpRight size={18} />
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/logo.png" alt="Nexyl Logo" className="footer-logo" />
            <span className="footer-logo-text">Nexyl Wallet</span>
          </div>
          <div className="footer-links">
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features').scrollIntoView({ behavior: 'smooth' }); }}>Features</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' }); }}>Pricing</a>
            <a href="#leaderboard" onClick={(e) => { e.preventDefault(); document.getElementById('leaderboard').scrollIntoView({ behavior: 'smooth' }); }}>Leaderboard</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq').scrollIntoView({ behavior: 'smooth' }); }}>FAQ</a>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert('Privacy Policy - This would link to your privacy policy page.'); }}>Privacy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert('Terms of Service - This would link to your terms page.'); }}>Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Nexyl Wallet. All rights reserved.</p>
        </div>
      </footer>

      {/* Wallet Connection Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              <X size={24} />
            </button>
            <h2>Connect Your Wallet</h2>
            <p>Choose your preferred wallet to get started with {selectedPlan} plan</p>
            <div className="wallet-options">
              <button className="wallet-option" onClick={() => handleWalletConnect('MetaMask')}>
                <Wallet size={32} color="#22c55e" />
                MetaMask
              </button>
              <button className="wallet-option" onClick={() => handleWalletConnect('WalletConnect')}>
                <Globe size={32} color="#22c55e" />
                WalletConnect
              </button>
              <button className="wallet-option" onClick={() => handleWalletConnect('Coinbase Wallet')}>
                <Shield size={32} color="#22c55e" />
                Coinbase Wallet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {showDemo && (
        <div className="modal-overlay" onClick={() => setShowDemo(false)}>
          <div className="modal-content demo-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDemo(false)}>
              <X size={24} />
            </button>
            <h2>Interactive Demo</h2>
            <p>Experience Nexyl Wallet's features firsthand</p>
            <div className="demo-features">
              <div className="demo-feature">
                <Eye size={24} color="#22c55e" />
                <div>
                  <h4>Live Dashboard</h4>
                  <p>Explore our real-time analytics interface</p>
                </div>
              </div>
              <div className="demo-feature">
                <BarChart3 size={24} color="#22c55e" />
                <div>
                  <h4>Sample Data</h4>
                  <p>Test all features with demo portfolio data</p>
                </div>
              </div>
              <div className="demo-feature">
                <Zap size={24} color="#22c55e" />
                <div>
                  <h4>No Registration</h4>
                  <p>Try it instantly without signing up</p>
                </div>
              </div>
            </div>
            <button className="primary-btn" onClick={() => { setShowDemo(false); alert('Demo mode activated! In production, this would load a sandbox environment with sample data.'); }}>
              Launch Demo
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NexylWallet;