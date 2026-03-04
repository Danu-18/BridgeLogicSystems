import { motion } from 'framer-motion';
import { Zap, ArrowRight, MapPin, Phone, Mail, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import { FOOTER_LINKS, CONTACT_INFO, FOOTER_BOTTOM_LINKS } from '../../constants';

export const Footer = () => {
  const iconMap = { MapPin, Phone, Mail };

  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', marginTop: 60 }}>
      <div className="section-inner" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(233,30,140,0.3)' }}><Zap size={16} color="#fff" /></div>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}><span style={{ color: '#e91e8c' }}>BridgeLogic</span> Systems</span>
            </div>
            <p style={{ color: '#4b5563', fontSize: 13, lineHeight: 1.75, marginBottom: 24 }}>We are a creative digital agency specializing in design, development, and digital marketing solutions.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[Twitter, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.2, y: -2 }}
                  style={{ width: 36, height: 36, borderRadius: '50%', background: '#1a1a1a', border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                <Icon size={14} />
              </motion.a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map(col => (
            <div key={col.title}>
              <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 15 }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.items.map(item => (
                  <li key={item}><a href="#" style={{ color: '#4b5563', fontSize: 13, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#4b5563'}>
                    <ArrowRight size={11} color="#e91e8c" />{item}
                  </a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: 20, fontSize: 15 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {CONTACT_INFO.map(({ Icon, text }) => {
                const IconComponent = iconMap[Icon];
                return (
                  <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <IconComponent size={15} color="#e91e8c" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: '#4b5563', fontSize: 13, lineHeight: 1.5 }}>{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #1a1a1a' }}>
        <div className="section-inner" style={{ paddingTop: 18, paddingBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ color: '#374151', fontSize: 13, margin: 0 }}>© 2026 BridgeLogic Systems. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20 }}>
            {FOOTER_BOTTOM_LINKS.map(t => (
              <a key={t} href="#" style={{ color: '#374151', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#9ca3af'} onMouseLeave={e => e.currentTarget.style.color = '#374151'}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
