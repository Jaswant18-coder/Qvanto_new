import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, Building2, Phone, Tag, MessageSquare, Clock, RefreshCw, Lock } from 'lucide-react';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Password can be set via environment variable or hardcoded
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'qvanto2024';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
      setPassword('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const fetchMessages = useCallback(async (silent = false) => {
    if (!silent) {
      setLoading(true);
    }

    try {
      const response = await fetch('/api/messages', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(Array.isArray(data) ? data : []);
        setErrorMessage('');
      } else {
        const errorPayload = await response.json().catch(() => null);
        setErrorMessage(errorPayload?.details || errorPayload?.error || 'Failed to fetch messages');
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      setErrorMessage('Failed to fetch messages');
    } finally {
      if (!silent) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;

    fetchMessages();

    const pollId = window.setInterval(() => {
      fetchMessages(true);
    }, 10000);

    const refreshOnFocus = () => {
      fetchMessages(true);
    };

    window.addEventListener('focus', refreshOnFocus);
    document.addEventListener('visibilitychange', refreshOnFocus);

    return () => {
      window.clearInterval(pollId);
      window.removeEventListener('focus', refreshOnFocus);
      document.removeEventListener('visibilitychange', refreshOnFocus);
    };
  }, [fetchMessages, isAuthenticated]);

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="bg-brand-dark min-h-screen pt-32 pb-20 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-6">
              <Lock className="text-brand-blue" size={28} />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
            <p className="text-white/40 text-sm">Enter password to view form inquiries</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAuthError('');
                }}
                placeholder="Enter admin password"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-blue transition-all"
                autoFocus
              />
              {authError && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-2 ml-2"
                >
                  {authError}
                </motion.p>
              )}
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold uppercase tracking-widest text-xs hover:bg-brand-blue/90 transition-all"
            >
              Access Dashboard
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

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
          <div className="flex gap-3">
            <button 
              onClick={fetchMessages}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-lg text-xs font-bold uppercase tracking-widest text-red-400 hover:text-red-300 hover:bg-red-500/20 transition-all"
            >
              <Lock size={14} />
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin"></div>
            <p className="text-white/40 font-medium">Loading inquiries...</p>
          </div>
        ) : errorMessage ? (
          <div className="glass-card p-20 text-center border border-red-500/30">
            <MessageSquare size={48} className="text-red-400/70 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Unable to load inquiries</h3>
            <p className="text-red-300/90">{errorMessage}</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="glass-card p-20 text-center">
            <MessageSquare size={48} className="text-white/10 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">No inquiries yet</h3>
            <p className="text-white/40">When users submit the contact form, they will appear here.</p>
          </div>
        ) : (
          <motion.div
            className="grid gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.06,
                  delayChildren: 0.02,
                },
              },
            }}
          >
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring',
                      stiffness: 130,
                      damping: 20,
                      mass: 0.7,
                    },
                  },
                }}
                layout
                className="glass-card p-8 group hover:border-brand-blue/30 transition-all duration-300 ease-out"
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
          </motion.div>
        )}
      </div>
    </div>
  );
}
