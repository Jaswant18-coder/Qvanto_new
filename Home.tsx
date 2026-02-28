import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { 
  Zap, 
  Database, 
  ShieldCheck, 
  Globe, 
  Layers, 
  CheckCircle2,
  Clock,
  AlertCircle,
  Cloud,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

const marketData = [
  { name: 'BFSI', value: 85, color: '#007AFF' },
  { name: 'Healthcare', value: 65, color: '#007AFF' },
  { name: 'Telecom', value: 45, color: '#007AFF' },
];

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=2560" 
            alt="Abstract AI Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/40 to-brand-dark"></div>
        </div>

        <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
        
        <div className="max-content relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-12"
          >
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
              Driven by data. Defined by Innovation. Powered by Purpose.
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 max-w-5xl mx-auto leading-[1.1]"
          >
            Enterprises Have the Data. They Lack the <span className="italic font-serif text-brand-blue">Governance Speed.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-white/60 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Qvanto AI gives the right person the right access — in minutes — while keeping privacy and compliance fully automated.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-10 py-4 bg-white text-brand-dark rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-2xl shadow-white/10"
            >
              Request a Demo
            </button>
            <button 
              onClick={() => setCurrentPage('product')}
              className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all"
            >
              Explore the Platform
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Clock className="text-brand-blue" />, heading: "35%", subtext: "of analyst time is lost waiting for data approvals" },
                  { icon: <AlertCircle className="text-red-500" />, heading: "Millions in Fines", subtext: "One privacy breach can cost an enterprise everything" },
                  { icon: <Cloud className="text-blue-500" />, heading: "Multi-Cloud Chaos", subtext: "Siloed environments slow collaboration and ESG reporting" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.heading}</h4>
                      <p className="text-sm text-gray-500 font-medium">{item.subtext}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                ■ The Problem
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
                Why Enterprise Governance is Broken
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                Modern enterprises manage massive amounts of classified data — public, confidential, and highly sensitive — shared across IT, data science, audit, compliance, and external partners on multiple cloud platforms. Managing who gets access, under which privacy rule, and when is painfully slow, risky, and complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
              ■ The Solution
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8">Qvanto Fixes This — In Weeks, Not Years</h2>
            <p className="text-xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed">
              Qvanto plugs directly into your existing cloud and on-prem systems to automate governance from day one, without ever moving your raw data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Seamless Integration', body: 'Plugs into AWS, Azure, GCP, Snowflake, and hybrid systems with zero disruption to existing workflows.' },
              { title: 'Access in Minutes', body: 'Reduce data access delays from months to minutes through automated approvals and entitlements.' },
              { title: 'Privacy by Design', body: 'GDPR, HIPAA, CCPA, and India\'s DPDP Act compliance built into every workflow — not added on later.' },
              { title: 'ESG Ready', body: 'Reduce data duplication and enable sustainable, compliant cloud operations aligned to ESG goals.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, type: 'spring', bounce: 0.3 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }}
                className="glass-card p-10 group hover:bg-white/5 transition-all"
              >
                <motion.h3 
                  className="text-xl font-bold mb-4"
                  whileHover={{ color: '#3b82f6' }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-brand-blue text-white overflow-hidden relative">
        <div className="max-content relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Results That Speak for Themselves</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { num: '93%', label: 'Efficiency Gain', sub: 'Approval time reduced from 45 days to just 3 days' },
              { num: '$11.5B', label: 'Market Size by 2030', sub: 'Global Data Governance Market (20%+ CAGR)' },
              { num: '25%+', label: 'CAGR', sub: "India's digital governance market growth" },
              { num: '40% YoY', label: 'Multi-Cloud Adoption', sub: 'Across BFSI, Healthcare & Telecom' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-6xl font-black mb-4 tracking-tighter">{stat.num}</div>
                <div className="text-sm font-bold uppercase tracking-widest mb-2">{stat.label}</div>
                <div className="text-xs text-white/60 font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                ■ Market Opportunity
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
                A Market That Cannot Wait
              </h2>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                India's regulatory landscape is shifting fast. SEBI BRSR is mandatory for the top 1,000 listed companies. The DPDP Act 2023, RBI, and IRDAI guidelines are driving urgent compliance action across every regulated sector.
              </p>
              <div className="space-y-4">
                {[
                  "Multi-cloud adoption up 40% YoY in BFSI, Healthcare & Telecom",
                  "ESG net-zero goals adopted by Tata, Reliance, Infosys, Wipro, HCL",
                  "Compliance teams are 10–15% of total workforce — and growing",
                  "ESG penalties, compliance fines, and investor pressure rising sharply"
                ].map((bullet, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0"
                      whileHover={{ scale: 1.2, backgroundColor: '#3b82f6' }}
                    >
                      <CheckCircle2 className="text-brand-blue" size={14} />
                    </motion.div>
                    <p className="text-gray-600 font-medium">{bullet}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-[40px] bg-gray-50 border border-gray-100 relative overflow-hidden h-[400px]"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <TrendingUp className="text-brand-blue" size={32} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Market Adoption %</span>
                  </div>
                  <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={marketData}
                        margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                        <XAxis 
                          type="number" 
                          domain={[0, 100]} 
                          hide 
                        />
                        <YAxis 
                          dataKey="name" 
                          type="category" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fontWeight: 600, fill: '#6b7280' }}
                          width={80}
                        />
                        <Tooltip 
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        />
                        <Bar 
                          dataKey="value" 
                          radius={[0, 4, 4, 0]} 
                          barSize={24}
                        >
                          {marketData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    <span>Industry Sector</span>
                    <span>Adoption Rate</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-32 bg-brand-dark">
        <div className="max-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center py-24 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-7xl font-medium tracking-tight mb-8 leading-tight"
              >
                Ready to Transform Your <br />
                <motion.span 
                  className="italic font-serif text-brand-blue"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Data Governance?
                </motion.span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/60 mb-12 max-w-2xl mx-auto font-medium text-lg"
              >
                Join enterprises that trust Qvanto to automate compliance, secure data access, and accelerate decision-making.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('contact')} 
                  className="btn-primary"
                >
                  Book a Demo
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentPage('contact')} 
                  className="btn-secondary"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            >
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-cyan rounded-full blur-3xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
