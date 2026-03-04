"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CursorGlow, 
  Navbar, 
  Footer, 
  Badge, 
  GradientText 
} from '../../components';
import { responsiveStyles } from '../../styles/responsiveStyles';
import { SERVICES } from '../../constants';

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: '#0d0d0d', minHeight: '100vh' }}>
      <style jsx global>{responsiveStyles}</style>
      <CursorGlow />
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0d0d0d', paddingTop: 80 }}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="section-inner" style={{ width: '100%', paddingTop: 60, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 28, background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse 2s infinite' }} />
                OUR SERVICES
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>Complete Digital</span>
              <GradientText>Solutions</GradientText>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              We offer comprehensive digital services designed to transform your business and elevate your brand in the digital landscape.
            </motion.p>

            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '12px 28px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer', letterSpacing: '0.01em' }}>
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad" style={{ background: '#0d0d0d' }}>
        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              What We Do Best
            </h2>
          </motion.div>

          <div className="four-col-grid">
            {SERVICES.map((svc, i) => {
              const iconMap = { Zap: 'Zap', Globe: 'Globe', TrendingUp: 'TrendingUp', Users: 'Users' };
              const IconName = iconMap[svc.Icon];
              const Icon = require('lucide-react')[IconName];
              
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={svc.hl ? { scale: 1.04, boxShadow: '0 20px 50px rgba(233,30,140,0.4)' } : { scale: 1.04, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: '#3a3a3a' }}
                  style={{
                    padding: '28px 24px', borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 16, cursor: 'default', transition: 'box-shadow 0.3s, border-color 0.3s',
                    background: svc.hl ? 'linear-gradient(135deg,#e91e8c,#7c3aed)' : '#1a1a1a',
                    border: svc.hl ? 'none' : '1px solid #2a2a2a',
                    boxShadow: svc.hl ? '0 10px 40px rgba(233,30,140,0.25)' : 'none',
                  }}>
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: svc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} color={svc.c} />
                  </div>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: 0 }}>{svc.title}</h3>
                  <p style={{ color: svc.hl ? 'rgba(255,255,255,0.8)' : '#6b7280', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{svc.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
