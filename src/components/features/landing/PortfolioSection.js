import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { PORTFOLIO_PROJECTS } from '../../../constants';

export const PortfolioSection = () => {
  const [current, setCurrent] = useState(0);
  const maxIdx = PORTFOLIO_PROJECTS.length - 1;

  const goToPrevious = () => setCurrent(p => p <= 0 ? maxIdx : p - 1);
  const goToNext = () => setCurrent(p => p >= maxIdx ? 0 : p + 1);

  return (
    <section className="section-pad" style={{ overflow: 'hidden', background: '#111' }}>
      <div className="section-inner">
        <div className="portfolio-layout">
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Badge>OUR WORK</Badge>
            <h2 style={{ fontSize: 'clamp(22px,2.8vw,38px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Our Recent Web Design &amp; Some Past Projects
            </h2>
            <p style={{ color: '#6b7280', lineHeight: 1.75, marginBottom: 36, fontSize: 14 }}>
              Explore our portfolio of successful digital projects. Each one represents our commitment to quality, innovation, and results-driven design.
            </p>
            <motion.button whileHover={{ scale: 1.06, boxShadow: '0 0 24px rgba(233,30,140,0.5)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '12px 28px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer' }}>
              Contact
            </motion.button>
          </motion.div>

          {/* Right: portfolio cards */}
          <div style={{ position: 'relative' }}>
            <div className="portfolio-cards">
              {PORTFOLIO_PROJECTS.slice(current, current + 2).map((proj, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03, y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                  style={{ 
                    height: 320, borderRadius: 20, overflow: 'hidden', 
                    position: 'relative', cursor: 'pointer', background: '#1a1a1a', border: '1px solid #2a2a2a'
                  }}>
                  <div style={{ position: 'absolute', inset: 0, background: proj.gradient, opacity: 0.9 }} />
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'multiply' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: 600, margin: '0 0 4px 0' }}>{proj.category}</p>
                    <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, margin: 0 }}>{proj.title}</h3>
                  </div>
                  <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                    {proj.count} shots
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'center' }}>
              {[{ fn: goToPrevious, Icon: ChevronLeft },
                { fn: goToNext, Icon: ChevronRight }].map(({ fn, Icon }, i) => (
                <motion.button key={i} onClick={fn} whileHover={{ scale: 1.1, borderColor: '#e91e8c', color: '#e91e8c', boxShadow: '0 0 15px rgba(233,30,140,0.3)' }} whileTap={{ scale: 0.95 }}
                  style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid #2a2a2a', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <Icon size={18} />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
