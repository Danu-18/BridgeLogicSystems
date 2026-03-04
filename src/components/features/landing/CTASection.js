import { motion } from 'framer-motion';
import { Particles } from '../../ui/Particles';

export const CTASection = () => (
  <section className="section-pad cta-wrapper" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#e91e8c 0%,#7c3aed 100%)' }}>
    <Particles />
    <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity }}
      style={{ position: 'absolute', top: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', filter: 'blur(40px)', pointerEvents: 'none' }} />
    <motion.div animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 6, repeat: Infinity }}
      style={{ position: 'absolute', bottom: -80, right: -80, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', filter: 'blur(50px)', pointerEvents: 'none' }} />

    <div className="cta-inner" style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: 640 }}>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 700, marginBottom: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ready to begin?</p>
        <h2 style={{ fontSize: 'clamp(28px,4.5vw,58px)', fontWeight: 900, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>LET'S GET STARTED</h2>
        <h2 style={{ fontSize: 'clamp(28px,4.5vw,58px)', fontWeight: 900, color: '#fff', margin: '0 0 40px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>YOUR PROJECT</h2>
        <motion.button whileHover={{ scale: 1.06, background: '#fff', color: '#7c3aed', boxShadow: '0 0 30px rgba(255,255,255,0.3)' }} whileTap={{ scale: 0.97 }}
          style={{ padding: '13px 32px', fontSize: 14, fontWeight: 700, color: '#fff', borderRadius: 999, border: '2px solid rgba(255,255,255,0.8)', background: 'transparent', cursor: 'pointer', transition: 'all 0.25s' }}>
          Get Started
        </motion.button>
      </motion.div>
    </div>
  </section>
);
