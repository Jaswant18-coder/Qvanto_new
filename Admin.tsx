import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, Building2, Phone, Tag, MessageSquare, Clock, Trash2, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  fullName: string;
  companyName: string;
  workEmail: string;
  phoneNumber: string;
  industry: string;
  lookingFor: string;
  message: string;
  createdAt: string;
}

export default function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/messages');
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="bg-brand-dark min-h-screen pt-32 pb-20">
      <div className="max-content">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-4">
              ■ Admin Dashboard
            </div>
            <h1 className="text-4xl md:text-6xl font-medium text-white">Form Inquiries</h1>
          </div>
          <button 
            onClick={fetchMessages}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin"></div>
            <p className="text-white/40 font-medium">Loading inquiries...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="glass-card p-20 text-center">
            <MessageSquare size={48} className="text-white/10 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">No inquiries yet</h3>
            <p className="text-white/40">When users submit the contact form, they will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 group hover:border-brand-blue/30 transition-all"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                        <User className="text-brand-blue" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Sender</p>
                        <p className="text-white font-bold">{msg.fullName}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Building2 className="text-white/40" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Company</p>
                        <p className="text-white/80">{msg.companyName}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Mail className="text-white/40" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</p>
                        <p className="text-white/80">{msg.workEmail}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Phone className="text-white/40" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone</p>
                        <p className="text-white/80">{msg.phoneNumber || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Tag className="text-white/40" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Industry / Interest</p>
                        <p className="text-white/80">{msg.industry} • {msg.lookingFor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <Clock className="text-white/40" size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Submitted At</p>
                        <p className="text-white/80">{new Date(msg.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                      <MessageSquare className="text-white/40" size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">Message</p>
                      <p className="text-white/60 leading-relaxed italic">"{msg.message}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
