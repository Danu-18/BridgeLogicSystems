import { motion } from 'framer-motion';
import { Zap, Globe, TrendingUp, Users } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { SERVICES } from '../../../constants';

export const ServicesSection = () => {
  const iconMap = { Zap, Globe, TrendingUp, Users };

  return (
    <section className="section-pad" style={{ background: '#0d0d0d' }}>
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <Badge>OUR SERVICES</Badge>
          <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Demand First-Rate Best Services
          </h2>
        </motion.div>

        <div className="four-col-grid">
          {SERVICES.map((svc, i) => {
            const Icon = iconMap[svc.Icon];
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
  );
};
