import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.05), 0 4px 30px rgba(0,0,0,0.6)' : 'none',
          padding: scrolled ? '10px 0' : '20px 0',
          transition: 'all 0.4s ease',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.div whileHover={{ scale: 1.05 }} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(233,30,140,0.4)' }}>
              <Zap size={16} color="#fff" />
            </div>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 'clamp(16px, 4vw, 18px)', letterSpacing: '-0.02em' }}>
              <span style={{ color: '#e91e8c' }}>Shadab</span> Agency
            </span>
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="nav-desktop">
            {NAVIGATION_LINKS.map((link, i) => (
              <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, textDecoration: 'none', position: 'relative' }}
                whileHover={{ color: '#fff' }}>
                {link.name}
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-desktop">
            <motion.button whileHover={{ scale: 1.03, borderColor: '#fff' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '6px 16px', fontSize: 12, fontWeight: 600, color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 999, background: 'transparent', cursor: 'pointer', transition: 'border-color 0.2s' }}>
              Login
            </motion.button>
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(233,30,140,0.6)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '6px 16px', fontSize: 12, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer' }}>
              Sign Up
            </motion.button>
          </div>

          <button onClick={() => setMenuOpen(true)} className="nav-mobile" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}>
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 101, width: 280, background: '#111', borderLeft: '1px solid #222', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid #222' }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}><span style={{ color: '#e91e8c' }}>Shadab</span></span>
                <button onClick={() => setMenuOpen(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}><X size={20} /></button>
              </div>
              <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {NAVIGATION_LINKS.map(link => (
                  <a key={link.name} href={link.href} style={{ color: '#d1d5db', padding: '12px 16px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>{link.name}</a>
                ))}
              </div>
              <div style={{ padding: '16px 24px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button style={{ padding: '12px', fontSize: 14, color: '#fff', border: '1px solid #333', borderRadius: 999, background: 'transparent', cursor: 'pointer' }}>Login</button>
                <button style={{ padding: '12px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer' }}>Sign Up</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
