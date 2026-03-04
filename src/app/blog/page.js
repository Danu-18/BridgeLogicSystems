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
import { BLOG_POSTS } from '../../constants';

export default function BlogPage() {
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
                OUR BLOG
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>Latest Insights &</span>
              <GradientText>Trends</GradientText>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Stay updated with the latest trends, insights, and best practices in digital design and development.
            </motion.p>

            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '12px 28px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer', letterSpacing: '0.01em' }}>
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-pad" style={{ background: '#111' }}>
        <div className="section-inner">
          <div className="three-col-grid">
            {BLOG_POSTS.map((post, index) => (
              <motion.article key={index}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', borderColor: '#3a3a3a' }}
                style={{ 
                  borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', border: '1px solid #2a2a2a', cursor: 'pointer', transition: 'box-shadow 0.3s, border-color 0.3s' 
                }}>
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <motion.img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700, background: 'rgba(233,30,140,0.9)', color: '#fff', backdropFilter: 'blur(4px)' }}>
                    {post.cat}
                  </span>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p style={{ color: '#4b5563', fontSize: 11, margin: '0 0 8px 0', fontWeight: 500 }}>{post.date}</p>
                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 13, margin: 0, lineHeight: 1.45 }}>{post.title}</h3>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, margin: '0 0 12px 0' }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </motion.p>
                  <motion.a 
                    href="#" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    style={{ 
                      color: '#e91e8c', 
                      fontSize: 12, 
                      fontWeight: 600, 
                      textDecoration: 'none', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 6,
                      transition: 'all 0.2s' 
                    }}
                  >
                    Read More
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
