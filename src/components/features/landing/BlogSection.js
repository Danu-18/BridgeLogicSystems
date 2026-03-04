import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../../ui/Badge';
import { BLOG_POSTS } from '../../../constants';

export const BlogSection = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section-pad" style={{ background: '#111' }}>
      <div className="section-inner">
        <div className="blog-layout">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Badge>OUR BLOG</Badge>
            <h2 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.2, letterSpacing: '-0.02em' }}>Latest From Blog</h2>
            <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: 36, fontSize: 14 }}>Stay updated with the latest trends, insights, and best practices in digital design and development.</p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['all', 'filter'].map(f => (
                <motion.button key={f} onClick={() => setFilter(f)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{ padding: '9px 22px', fontSize: 13, fontWeight: 700, borderRadius: 999, border: 'none', cursor: 'pointer', transition: 'all 0.2s', background: filter === f ? 'linear-gradient(135deg,#e91e8c,#7c3aed)' : '#1a1a1a', color: filter === f ? '#fff' : '#6b7280', boxShadow: filter === f ? '0 0 20px rgba(233,30,140,0.3)' : 'none', outline: filter !== f ? '1px solid #2a2a2a' : 'none' }}>
                  {f === 'all' ? 'All Posts' : 'Add Filter'}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="three-col-grid">
            {BLOG_POSTS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', borderColor: '#3a3a3a' }}
                style={{ borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', border: '1px solid #2a2a2a', cursor: 'pointer', transition: 'box-shadow 0.3s, border-color 0.3s' }}>
                <div style={{ position: 'relative', height: 160, overflow: 'hidden' }}>
                  <motion.img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                  <span style={{ position: 'absolute', top: 12, left: 12, padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 700, background: 'rgba(233,30,140,0.9)', color: '#fff', backdropFilter: 'blur(4px)' }}>{p.cat}</span>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <p style={{ color: '#4b5563', fontSize: 11, margin: '0 0 8px 0', fontWeight: 500 }}>{p.date}</p>
                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 13, margin: 0, lineHeight: 1.45 }}>{p.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
