import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, 
  ShieldCheck, 
  Layers, 
  CheckCircle2,
  Search,
  Workflow,
  Tag,
  FileText,
  Activity,
  Globe,
  Settings,
  Lock,
  Zap,
  Shield,
  Cpu,
  BarChart3,
  AlertTriangle,
  RefreshCw,
  ShieldAlert
} from 'lucide-react';

interface ProductProps {
  setCurrentPage: (page: string) => void;
}

export default function Product({ setCurrentPage }: ProductProps) {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        <div className="max-content relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
              One Platform. <br />
              <span className="italic font-serif text-brand-blue">Complete</span> Governance.
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              The Qvanto Governance & Compliance Platform administers your data assets, manages customer privacy, and automates IT processes — on cloud and on-prem.
            </p>
            <button className="btn-primary">
              See All Features
            </button>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              ■ What the Platform Does
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Built for the Modern Enterprise</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'High-Compliance Data Organization', body: 'Meet regulatory requirements out-of-the-box from day one.' },
              { title: 'Centralized Data Asset Administration', body: 'Manage ownership, access, and privacy on cloud and on-prem from one place.' },
              { title: 'Instant Analytics Ecosystems', body: 'Spin up compliant data workbenches on any cloud platform instantly.' },
              { title: 'Democratized Data Access', body: 'Securely share data across all business teams without silos.' },
              { title: 'Full IT Process Automation', body: 'Replace manual approvals and repetitive tasks with intelligent automation.' },
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-all group cursor-pointer"
              >
                <h4 className="font-bold text-sm mb-4 group-hover:text-brand-blue transition-colors">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
              ■ Features
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Everything You Need to Govern Data — In One Place</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { icon: <Database />, title: 'Data Assets Marketplace', body: 'A centralized repository where all data assets are listed, viewed, and requested for consumption.' },
              { icon: <ShieldCheck />, title: 'Third-Party Data & License Management', body: 'Link ownership of all data assets for review and approval before allowing consumption.' },
              { icon: <Layers />, title: 'Metadata Management', body: 'Steward information assets, data definitions, and manage changes to data over time.' },
              { icon: <Lock />, title: 'Data Privacy & Secure Analytics Container', body: 'Keep consuming teams in secure containers to clearly identify and protect private data usage.' },
              { icon: <Workflow />, title: 'Data Lineage', body: 'Track data from source to dashboards and analytical use cases with complete visibility.' },
              { icon: <RefreshCw />, title: 'Flexible Workflows', body: 'Define business processes and approvals, linked directly to automated IT execution of data entitlements.' },
              { icon: <Tag />, title: 'Data Tagging', body: 'Tag attributes as PII or ESG and link them to defined projects and permitted purposes.' },
              { icon: <Shield />, title: 'Regulatory Compliance', body: 'Banking-grade compliance controls out of the box — GDPR, CCPA, HIPAA, and DPDP compliant.' },
              { icon: <Settings />, title: 'Data Policy Controls', body: 'Enforce custom-defined policies to control how data assets are accessed and used.' },
              { icon: <FileText />, title: 'Audit', body: 'Audit all data requests, usage, privacy, teams, people, and project costs in one place.' },
              { icon: <Activity />, title: 'Data Quality Integration', body: 'Monitor quality via dashboards and customizable rules deployed across data pipelines.' },
              { icon: <Globe />, title: 'Multi-Entity & Cross-Border', body: 'Enable cross-border teams with clear approvals and data segregation across entities and lines of business.' },
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-10 hover:bg-white/5 transition-all group"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-brand-blue mb-6"
                >
                  {feat.icon}
                </motion.div>
                <h4 className="font-bold text-sm mb-4">{feat.title}</h4>
                <p className="text-xs text-white/40 leading-relaxed font-medium">{feat.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              ■ Why Qvanto
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Why Enterprises Choose Qvanto Over the Rest</h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-gray-400">Feature</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-gray-400">Competitors</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-brand-blue">Qvanto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { f: 'Metadata-Driven', c: 'Few', q: '✅' },
                  { f: 'Multi-Cloud / On-Prem Neutral', c: 'Rare', q: '✅' },
                  { f: 'No Raw Data Moved', c: 'Some', q: '✅' },
                  { f: 'Privacy Automation', c: 'Add-On', q: '✅ Core' },
                  { f: 'ESG-Friendly', c: 'Rare', q: '✅ Core' },
                  { f: 'Deployment Speed', c: 'Months–Years', q: '✅ Weeks' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 text-sm font-bold text-gray-600">{row.f}</td>
                    <td className="p-6 text-sm font-medium text-gray-400">{row.c}</td>
                    <td className="p-6 text-sm font-black text-brand-blue">{row.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ESG Use Case Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
                ■ Use Case
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">Data Governance for ESG — WESGaaS</h2>
              <h3 className="text-xl text-brand-blue font-bold mb-8 uppercase tracking-widest">Wholesale Environmental, Social & Governance as a Service</h3>
              <p className="text-lg text-white/40 mb-12 leading-relaxed font-medium">
                Qvanto's WESGaaS pod supports end-to-end ESG data governance for regulated enterprises, banks, and ESG reporting bodies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Step 1: External & Internal ESG Data Collection',
                  'Step 2: ESG Data Asset Curation',
                  'Step 3: ESG Data Asset Distribution',
                  'Step 4: ESG Model Build',
                  'Step 5: ESG Application Hosting',
                  'Step 6: ESG Dashboards (Power BI)',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue shrink-0">{i+1}</div>
                    <span className="text-xs font-bold text-white/60">{step.split(': ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-12 text-center">
              <div className="text-6xl font-black text-brand-blue mb-6">93%</div>
              <div className="text-xl font-bold mb-4">Efficiency Gain</div>
              <p className="text-white/40 font-medium leading-relaxed">
                "Compliance approval time cut from 45 days to 3 days."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Scenarios Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              ■ Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Every Critical Data Scenario. One Platform.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <ShieldAlert />, title: 'Incident Response', body: 'Real-time data visibility allows rapid response to breaches before they escalate.' },
              { icon: <CheckCircle2 />, title: 'Data Compliance', body: 'Stay compliant with GDPR, CCPA, DPDB, and HIPAA automatically.' },
              { icon: <Lock />, title: 'Data Loss Prevention', body: 'Enforce DLP strategies to protect sensitive data at every layer.' },
              { icon: <AlertTriangle />, title: 'Ransomware Defense', body: 'Full data visibility enables early detection and mitigation of ransomware attacks.' },
              { icon: <Shield />, title: 'Cyber Insurance', body: 'Demonstrate robust monitoring and protection to qualify for comprehensive cyber coverage.' },
              { icon: <RefreshCw />, title: 'Business Continuity', body: 'Understand data flows to maintain operations seamlessly during disasters.' },
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                className="p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className="text-brand-blue mb-6"
                >
                  {card.icon}
                </motion.div>
                <h4 className="font-bold text-lg mb-4">{card.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
