import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Eye, 
  ShieldCheck, 
  Globe, 
  Award,
  Linkedin,
  Rocket,
  Building2,
  Cpu,
  BarChart3,
  Briefcase,
  Code2,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden text-center">
        <div className="absolute inset-0 hero-gradient opacity-40"></div>
        <div className="max-content relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]"
          >
            We're Building the <br />
            <span className="italic font-serif text-brand-blue">Governance Layer</span> <br />
            the World's Data Needs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Qvanto AI transforms innovative governance technology into real, measurable business impact.
          </motion.p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
                ■ About Us
              </div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-tight">
                Who We Are
              </h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed font-medium">
                Qvanto is a company dedicated to transforming innovative governance technology into real business impact. We build advanced data governance, privacy, and compliance platforms that integrate seamlessly into enterprise ecosystems across diverse industries and cloud infrastructures.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed font-medium">
                We specialize in operationalizing governance through deep integration, customization, and hands-on implementation — embedding privacy controls, policy automation, and data governance frameworks directly into business processes to enable secure collaboration, regulatory compliance, and scalable data-driven innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-brand-blue" />, label: 'Privacy First' },
                { icon: <Globe className="text-brand-blue" />, label: 'Global Scale' },
                { icon: <Award className="text-brand-blue" />, label: 'Expert Led' },
                { icon: <Building2 className="text-brand-blue" />, label: 'Enterprise Grade' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center transition-all"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 transition-all"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-8"
              >
                <Eye className="text-brand-blue" size={24} />
              </motion.div>
              <h3 className="text-3xl font-bold mb-6">Vision</h3>
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                To be the leading metadata-driven governance platform that empowers enterprises to unlock data potential without compromising privacy and compliance — and to empower the next generation of engineers and creators by bridging academic insights with industry expertise.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-12 transition-all"
            >
              <motion.div 
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center mb-8"
              >
                <Target className="text-brand-blue" size={24} />
              </motion.div>
              <h3 className="text-3xl font-bold mb-6">Mission</h3>
              <div className="space-y-4">
                {[
                  "Simplify governance by integrating seamlessly with existing enterprise systems.",
                  "Accelerate decision-making by reducing data access delays from months to minutes.",
                  "Embed privacy-by-design into every workflow, ensuring compliance with global and Indian regulations.",
                  "Promote ESG efficiency by reducing data duplication and enabling sustainable cloud operations."
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="text-brand-blue" size={12} />
                    </div>
                    <p className="text-white/60 font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gray-50 text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-gray-100 border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              ■ Our Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">What We Bring to the Table</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <Building2 />, title: 'Financial Services', body: 'Experience across leading global banks with deep compliance and regulatory exposure.' },
              { icon: <Code2 />, title: 'Technology Development', body: 'Software engineering skills, emerging technology understanding, and hybrid data platform implementation.' },
              { icon: <ShieldCheck />, title: 'Data Governance', body: 'Familiarity with privacy laws, governance frameworks, and stakeholder collaboration.' },
              { icon: <Briefcase />, title: 'Digital Business', body: 'Online customer acquisition, lifecycle management, and digital product launches.' },
              { icon: <Cpu />, title: 'AI & Analytics', body: 'AI model governance, data visualization, Big Data processing, and Generative AI.' },
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                className="p-8 rounded-[40px] bg-white border border-gray-100 shadow-sm transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="text-brand-blue mb-6"
                >
                  {card.icon}
                </motion.div>
                <h4 className="font-bold text-sm mb-4">{card.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-6">
              ■ Founders
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Meet the Founders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mx-auto">
            {[
              { name: 'Pooja Palani', role: 'Founder', creds: 'B.Tech ECE | BS Data Science' },
              { name: 'Subashini Palani', role: 'Founder', creds: 'B.Sc B.Ed | Diploma in Computer Applications' },
              { name: 'Pradeep Ravichandran', role: 'CTO', creds: 'Torro AI Founder' },
            ].map((founder, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-12 text-center group transition-all"
              >
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="w-24 h-24 rounded-full bg-white/5 mx-auto mb-8 flex items-center justify-center transition-transform"
                >
                  <Users className="text-brand-blue" size={40} />
                </motion.div>
                <motion.h4 
                  className="text-2xl font-bold mb-2"
                  whileHover={{ color: '#3b82f6' }}
                >
                  {founder.name}
                </motion.h4>
                <div className="text-brand-blue text-[10px] font-bold uppercase tracking-widest mb-6">{founder.role}</div>
                <p className="text-white/40 text-sm font-medium mb-8">{founder.creds}</p>
                <motion.a 
                  whileHover={{ scale: 1.05, x: 5 }}
                  href="#" 
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                >
                  <Linkedin size={14} /> LinkedIn
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Section */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card bg-brand-dark p-16 text-center relative overflow-hidden"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-8"
              >
                ■ Support
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-12"
              >
                Backed with the Right Support
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  "Technical mentorship on scaling integrations",
                  "Industry introductions in BFSI, Healthcare & Telecom",
                  "Compliance and legal guidance for ESG and privacy",
                  "Office space, software, and hardware facilities"
                ].map((bullet, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
                    whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center transition-all"
                  >
                    <p className="text-sm text-white/60 font-medium">{bullet}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
