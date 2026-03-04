import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';
import { Badge } from '../../ui/Badge';

export const AboutSection = () => (
  <section className="section-pad" style={{ background: '#111' }}>
    <div className="section-inner">
      <div className="two-col-grid">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}
            style={{ borderRadius: 20, overflow: 'hidden', position: 'relative' }}>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              style={{ position: 'absolute', inset: -3, borderRadius: 22, background: 'conic-gradient(from 0deg, #7c3aed, #e91e8c, #7c3aed)', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, borderRadius: 18, overflow: 'hidden', margin: 3 }}>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Team"
                style={{ width: '100%', height: 'clamp(260px, 40vw, 420px)', objectFit: 'cover', display: 'block' }} />
            </div>
          </motion.div>
          <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}
            style={{ position: 'absolute', bottom: -16, left: -16, width: 70, height: 70, borderRadius: 14, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
          <Badge>ABOUT US</Badge>
          <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Creative Design &amp; Development
          </h2>
          <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
            We are a passionate team of designers and developers creating exceptional digital experiences. Our work combines strategic thinking with beautiful execution.
          </p>
          <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>
            From concept to launch, we partner with businesses to build digital solutions that drive growth, engage users, and stand out in competitive markets.
          </p>
          <div className="two-col-grid">
            {[
              { Icon: CheckCircle, c: '#7c3aed', bg: 'rgba(124,58,237,0.15)', glow: 'rgba(124,58,237,0.3)', t: 'Easy to Integrate', s: 'Seamless API connections' },
              { Icon: Clock, c: '#e91e8c', bg: 'rgba(233,30,140,0.15)', glow: 'rgba(233,30,140,0.3)', t: 'Fast Processing', s: 'Optimized performance' },
            ].map(({ Icon, c, bg, glow, t, s }) => (
              <motion.div key={t} whileHover={{ scale: 1.04, boxShadow: `0 8px 30px ${glow}` }}
                style={{ padding: '18px', borderRadius: 14, background: '#1a1a1a', border: '1px solid #2a2a2a', cursor: 'default', transition: 'box-shadow 0.3s' }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon size={20} color={c} />
                </div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, margin: '0 0 4px 0' }}>{t}</p>
                <p style={{ color: '#4b5563', fontSize: 12, margin: 0 }}>{s}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
