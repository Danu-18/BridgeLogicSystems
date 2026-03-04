import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../../constants';

export const TestimonialsSection = () => {
  const [cur, setCur] = useState(0);

  return (
    <section className="section-pad" style={{ background: '#0d0d0d' }}>
      <div className="section-inner">
        <div className="two-col-grid">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <AnimatePresence mode="wait">
              <motion.div key={cur} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}
                style={{ position: 'relative' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  style={{ position: 'absolute', inset: -4, borderRadius: 20, background: 'conic-gradient(from 0deg, #7c3aed, #e91e8c, #f5c518, #7c3aed)', opacity: 0.6, filter: 'blur(1px)' }} />
                <div className="testi-photo" style={{ borderRadius: 18, overflow: 'hidden', background: '#111', padding: 4, position: 'relative' }}>
                  <img src={TESTIMONIALS[cur].img} alt={TESTIMONIALS[cur].author} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14 }} />
                </div>
              </motion.div>
            </AnimatePresence>
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 80, height: 80, borderRadius: 16, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', opacity: 0.4, filter: 'blur(2px)' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            <motion.div animate={{ color: ['#e91e8c', '#c026d3', '#e91e8c'] }} transition={{ duration: 3, repeat: Infinity }}
              style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.8, marginBottom: 24 }}>"</motion.div>
            <AnimatePresence mode="wait">
              <motion.div key={cur} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.45 }}>
                <p style={{ color: '#d1d5db', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.75, marginBottom: 28 }}>{TESTIMONIALS[cur].text}</p>
                <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: '0 0 4px 0' }}>{TESTIMONIALS[cur].author}</p>
                <p style={{ color: '#4b5563', fontSize: 13, margin: 0 }}>{TESTIMONIALS[cur].role}</p>
              </motion.div>
            </AnimatePresence>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              {[{ fn: () => setCur((cur - 1 + TESTIMONIALS.length) % TESTIMONIALS.length), Icon: ChevronLeft },
                { fn: () => setCur((cur + 1) % TESTIMONIALS.length), Icon: ChevronRight }].map(({ fn, Icon }, i) => (
                <motion.button key={i} onClick={fn} whileHover={{ scale: 1.1, borderColor: '#e91e8c', color: '#e91e8c', boxShadow: '0 0 15px rgba(233,30,140,0.3)' }} whileTap={{ scale: 0.95 }}
                  style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid #2a2a2a', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
