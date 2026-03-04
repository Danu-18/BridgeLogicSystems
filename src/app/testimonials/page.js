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
import { TESTIMONIALS } from '../../constants';

export default function TestimonialsPage() {
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
                TESTIMONIALS
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>What Our Clients</span>
              <GradientText>Are Saying</GradientText>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Don't just take our word for it. Hear directly from our valued clients about their experience working with us.
            </motion.p>

            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '12px 28px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer', letterSpacing: '0.01em' }}>
              View All
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-pad" style={{ background: '#111' }}>
        <div className="section-inner">
          <div className="two-col-grid">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 40, marginBottom: 60 }}>
                
                {/* Testimonial Image */}
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  style={{ position: 'relative', flexShrink: 0 }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                    style={{ position: 'absolute', inset: -4, borderRadius: 20, background: 'conic-gradient(from 0deg, #7c3aed, #e91e8c, #7c3aed)', opacity: 0.6, filter: 'blur(1px)' }} />
                  <div className="testi-photo" style={{ borderRadius: 18, overflow: 'hidden', background: '#111', padding: 4, position: 'relative' }}>
                    <img src={testimonial.img} alt={testimonial.author} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14 }} />
                  </div>
                </motion.div>

                {/* Testimonial Content */}
                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  style={{ flex: 1 }}>
                  <motion.div animate={{ color: ['#e91e8c', '#c026d3', '#e91e8c'] }} transition={{ duration: 3, repeat: Infinity }}
                    style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.8, marginBottom: 24 }}>"</motion.div>
                  
                  <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 + 0.4 }}
                    style={{ color: '#d1d5db', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.75, marginBottom: 28 }}>
                    {testimonial.text}
                  </motion.p>
                  
                  <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.1 + 0.5 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: 0 }}>{testimonial.author}</p>
                    <p style={{ color: '#4b5563', fontSize: 13, margin: 0 }}>{testimonial.role}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
