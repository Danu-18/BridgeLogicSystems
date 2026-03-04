import { motion } from 'framer-motion';
import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../constants';
import { Particles } from '../../ui/Particles';
import { GradientText } from '../../ui/GradientText';

export const HeroSection = () => {
  const iconMap = { Twitter, Facebook, Linkedin, Youtube };

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0d0d0d', paddingTop: 80 }}>
      <Particles />

      <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="section-inner" style={{ width: '100%', paddingTop: 60, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ display: 'flex', flexDirection: 'column' }}>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>Business Value</span>
              <span style={{ color: '#fff' }}>Through </span>
              <GradientText>Digital</GradientText>
              <br />
              <span style={{ color: '#e91e8c', textShadow: '0 0 30px rgba(233,30,140,0.4)' }}>Products</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 400 }}>
              We help businesses grow through innovative digital solutions, creative design, and cutting-edge technology that drives real results.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
              style={{ display: 'flex', gap: 14, marginBottom: 40, flexWrap: 'wrap' }}>
              <motion.button whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }} whileTap={{ scale: 0.97 }}
                style={{ padding: '12px 24px', fontSize: 'clamp(13px, 2.5vw, 14px)', fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer', letterSpacing: '0.01em' }}>
                Get Started
              </motion.button>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ padding: '12px 24px', fontSize: 'clamp(13px, 2.5vw, 14px)', fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, background: 'rgba(255,255,255,0.04)', cursor: 'pointer' }}>
                Learn More
              </motion.button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}
              style={{ display: 'flex', gap: 10 }}>
              {SOCIAL_LINKS.map(({ Icon, color, label }, i) => {
                const IconComponent = iconMap[Icon];
                return (
                  <motion.a key={i} href="#" aria-label={label}
                    whileHover={{ scale: 1.25, y: -3, boxShadow: `0 8px 20px ${color}40` }}
                    style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none' }}>
                    <IconComponent size={15} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Hero image */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <motion.div animate={{ y: [-12, 12, -12] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                style={{ position: 'absolute', inset: -6, borderRadius: 22, background: 'conic-gradient(from 0deg, #7c3aed, #e91e8c, #f5c518, #7c3aed)', opacity: 0.7, filter: 'blur(2px)', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, borderRadius: 18, overflow: 'hidden', background: '#0d0d0d', padding: 4 }}>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Team working"
                  className="hero-img"
                  style={{ width: '100%', objectFit: 'cover', borderRadius: 14, display: 'block' }} />
              </div>
            </motion.div>

            <div style={{ position: 'absolute', bottom: -10, right: -10, opacity: 0.25, pointerEvents: 'none' }}>
              {Array.from({ length: 5 }).map((_, row) => (
                <div key={row} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                  {Array.from({ length: 5 }).map((_, col) => (
                    <motion.span key={col} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, delay: (row + col) * 0.15, repeat: Infinity }}
                      style={{ width: 4, height: 4, borderRadius: '50%', background: '#f5c518', display: 'block' }} />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
