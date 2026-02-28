import React from 'react';
import { Linkedin, Mail as MailIcon, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-content">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
              >
                <span className="text-brand-blue font-black -rotate-12">Q</span>
              </motion.div>
              <span className="text-xl font-bold tracking-tight uppercase">Qvanto AI</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Driven by data. Defined by Innovation. Powered by Purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {[
                { label: 'Home', action: () => setCurrentPage('home') },
                { label: 'Product', action: () => setCurrentPage('product') },
                { label: 'About', action: () => setCurrentPage('about') },
                { label: 'Contact', action: () => setCurrentPage('contact') },
                { label: 'Admin', action: () => setCurrentPage('admin'), opacity: 'opacity-20 hover:opacity-100' }
              ].map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <button 
                    onClick={link.action}
                    className={`hover:text-white transition-colors text-hover ${link.opacity || ''}`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {[
                { icon: MailIcon, text: 'qvanto.ai.ltd@gmail.com' },
                { icon: Phone, text: '+91 9500006530' },
                { icon: Linkedin, text: 'linkedin.com/company/qvanto-ai' }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2"
                >
                  <item.icon size={14} className="text-brand-blue" /> 
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/40 mb-8">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {[
                { label: 'Terms & Conditions' },
                { label: 'Privacy Policy' }
              ].map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <button className="hover:text-white transition-colors text-hover">
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 Qvanto AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
