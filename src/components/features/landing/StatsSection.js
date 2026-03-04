import { motion } from 'framer-motion';
import { STATS_DATA } from '../../../constants';

export const StatsSection = () => (
  <section className="section-pad" style={{ background: '#111', position: 'relative', overflow: 'hidden' }}>
    <motion.div animate={{ scaleY: [1.1, 1, 1.1] }} transition={{ duration: 3, repeat: Infinity }}
      className="stats-shape"
      style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 70, height: 140, background: 'linear-gradient(180deg,#7c3aed,#e91e8c)', borderRadius: '100px 0 0 100px', opacity: 0.7, boxShadow: '-4px 0 20px rgba(124,58,237,0.3)' }} />

    <div className="section-inner">
      <div className="four-col-grid" style={{ textAlign: 'center' }}>
        {STATS_DATA.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <motion.div animate={{ textShadow: ['0 0 20px rgba(245,197,24,0.3)', '0 0 40px rgba(245,197,24,0.6)', '0 0 20px rgba(245,197,24,0.3)'] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, color: '#f5c518', lineHeight: 1, marginBottom: 8 }}>
              {s.value}
            </motion.div>
            <div style={{ color: '#6b7280', fontSize: 13, fontWeight: 500, letterSpacing: '0.03em' }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
