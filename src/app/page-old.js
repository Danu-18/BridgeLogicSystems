"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Menu, X, ChevronLeft, ChevronRight,
  Twitter, Facebook, Linkedin, Youtube,
  Mail, Phone, MapPin, ArrowRight, Play,
  Zap, Globe, TrendingUp, Users, CheckCircle, Clock, Star
} from 'lucide-react';

/* ─── Global Styles ─────────────────────────────────────────────────────────── */
const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .section-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .nav-desktop {
      display: flex;
    }
    .nav-mobile {
      display: none;
    }
    .section-pad {
      padding: 80px 0;
    }
    .two-col-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .four-col-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }
    @media (max-width: 768px) {
      .section-inner {
        padding: 0 20px;
      }
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .nav-desktop {
        display: none;
      }
      .nav-mobile {
        display: flex;
      }
      .two-col-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .four-col-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      .blog-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      .four-col-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }
      .blog-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }
  `}</style>
);

/* ─── Cursor Glow ─────────────────────────────────────────────────────────── */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const fn = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return (
    <div style={{
      position: 'fixed', pointerEvents: 'none', zIndex: 9999,
      left: pos.x - 200, top: pos.y - 200,
      width: 400, height: 400, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(233,30,140,0.06) 0%, transparent 70%)',
      transition: 'left 0.15s ease, top 0.15s ease',
    }} />
  );
};

/* ─── Floating Particles ──────────────────────────────────────────────────── */
const Particles = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} />;
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    color: i % 3 === 0 ? '#e91e8c' : i % 3 === 1 ? '#7c3aed' : '#f5c518',
  }));
  
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map(p => (
        <motion.div key={p.id}
          style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: '50%', background: p.color, opacity: 0.4 }}
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ─── Animated Gradient Text ──────────────────────────────────────────────── */
const GradientText = ({ children, style = {} }) => (
  <span style={{
    background: 'linear-gradient(135deg, #e91e8c, #c026d3, #7c3aed)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientShift 3s ease infinite',
    ...style,
  }}>{children}</span>
);

/* ─── Section Badge ───────────────────────────────────────────────────────── */
const Badge = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 16, background: 'rgba(233,30,140,0.15)', color: '#e91e8c', border: '1px solid rgba(233,30,140,0.35)', textTransform: 'uppercase' }}
  >{children}</motion.span>
);

/* ─── Navbar ──────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['Portfolio', 'Blog', 'Shop', 'More'];

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
            {links.map((l, i) => (
              <motion.a key={l} href="#" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
                style={{ color: '#9ca3af', fontSize: 14, fontWeight: 500, textDecoration: 'none', position: 'relative' }}
                whileHover={{ color: '#fff' }}>
                {l}
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
                {links.map(l => <a key={l} href="#" style={{ color: '#d1d5db', padding: '12px 16px', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 500, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>{l}</a>)}
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

/* ─── Hero ────────────────────────────────────────────────────────────────── */
const HeroSection = () => {
  const socials = [
    { Icon: Twitter, color: '#1da1f2', label: 'Twitter' },
    { Icon: Facebook, color: '#1877f2', label: 'Facebook' },
    { Icon: Linkedin, color: '#0a66c2', label: 'LinkedIn' },
    { Icon: Youtube, color: '#ff0000', label: 'YouTube' },
  ];

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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 28, background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse 2s infinite' }} />
                HELLO WORLD
              </span>
            </motion.div>

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
              {socials.map(({ Icon, color, label }, i) => (
/* ... */
                <motion.a key={i} href="#" aria-label={label}
                  whileHover={{ scale: 1.25, y: -3, boxShadow: `0 8px 20px ${color}40` }}
                  style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color, textDecoration: 'none' }}>
                  <Icon size={15} />
                </motion.a>
              ))}
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

/* ─── About ───────────────────────────────────────────────────────────────── */
const AboutSection = () => (
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
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

/* ─── Services ────────────────────────────────────────────────────────────── */
const ServicesSection = () => {
  const services = [
    { Icon: Zap, c: '#7c3aed', bg: 'rgba(124,58,237,0.15)', title: 'Product Design', desc: 'We craft intuitive and visually stunning product designs that captivate users and drive engagement.', hl: false },
    { Icon: Globe, c: '#f5c518', bg: 'rgba(245,197,24,0.15)', title: 'Web Development', desc: 'Building robust, scalable web applications with cutting-edge technologies and best practices.', hl: false },
    { Icon: TrendingUp, c: '#14b8a6', bg: 'rgba(20,184,166,0.15)', title: 'Business Development', desc: 'Strategic growth solutions that help your business expand its reach and maximize revenue.', hl: false },
    { Icon: Users, c: '#fff', bg: 'rgba(255,255,255,0.15)', title: 'Human Resources', desc: 'Comprehensive HR solutions to attract, retain, and develop top talent for your organization.', hl: true },
  ];

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
          {services.map((svc, i) => (
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
                <svc.Icon size={24} color={svc.c} />
              </div>
              <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: 0 }}>{svc.title}</h3>
              <p style={{ color: svc.hl ? 'rgba(255,255,255,0.8)' : '#6b7280', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Portfolio Slider ────────────────────────────────────────────────────── */
const PortfolioSection = () => {
  const projects = [
    { title: 'Multipurpose Web UI Kit', category: 'UI Design', gradient: 'linear-gradient(135deg,#7c3aed,#4f46e5)', count: '14', img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&q=80' },
    { title: 'App UI Kit', category: 'Mobile Design', gradient: 'linear-gradient(135deg,#0ea5e9,#6366f1)', count: '8', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80' },
    { title: 'Chat Screen App UI Kit', category: 'App Design', gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)', count: '12', img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80' },
    { title: 'Invoice App UI', category: 'Dashboard', gradient: 'linear-gradient(135deg,#10b981,#059669)', count: '6', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
    { title: 'E-Commerce UI Kit', category: 'Web Design', gradient: 'linear-gradient(135deg,#e91e8c,#7c3aed)', count: '20', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80' },
  ];

  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [cardW, setCardW] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const GAP = 20;

  // Measure container and compute card width
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.getBoundingClientRect().width;
    if (w === 0) return;
    const pv = w >= 900 ? 3 : w >= 560 ? 2 : 1;
    setPerView(pv);
    setCardW((w - GAP * (pv - 1)) / pv);
  }, []);

  useEffect(() => {
    // Measure immediately and after a short delay to handle layout shifts
    measure();
    const t = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, [measure]);

  const maxIdx = Math.max(0, projects.length - perView);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => p >= maxIdx ? 0 : p + 1), 3000);
  }, [maxIdx]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  // Clamp current index when perView changes
  useEffect(() => {
    setCurrent(p => Math.min(p, maxIdx));
  }, [maxIdx]);

  const offset = cardW > 0 ? current * (cardW + GAP) : 0;

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

          {/* Right: slider */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={() => clearInterval(timerRef.current)} onMouseLeave={startTimer}
            style={{ minWidth: 0 }}>

            {/* Track */}
            <div ref={trackRef} style={{ overflow: 'hidden', width: '100%' }}>
              {cardW > 0 && (
                <motion.div
                  style={{ display: 'flex', gap: GAP, width: 'max-content' }}
                  animate={{ x: -offset }}
                  transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {projects.map((proj, i) => (
                    <motion.div key={i}
                      whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                      style={{ flexShrink: 0, width: cardW, borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', border: '1px solid #2a2a2a', cursor: 'pointer', transition: 'box-shadow 0.3s' }}>
                      {/* Card image area */}
                      <div style={{ height: 180, background: proj.gradient, position: 'relative', overflow: 'hidden' }}>
                        <img src={proj.img} alt={proj.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35, display: 'block' }} />
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 56, fontWeight: 900, color: 'rgba(255,255,255,0.25)', lineHeight: 1 }}>{proj.count}</div>
                            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4, fontWeight: 600 }}>Screens</div>
                          </div>
                        </div>
                        <div style={{ position: 'absolute', bottom: 12, right: 12, width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Play size={13} color="#fff" style={{ marginLeft: 2 }} />
                        </div>
                      </div>
                      {/* Card body */}
                      <div style={{ padding: '14px 16px' }}>
                        <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, background: 'rgba(233,30,140,0.15)', color: '#e91e8c', display: 'inline-block', marginBottom: 8 }}>{proj.category}</span>
                        <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 13, margin: 0, lineHeight: 1.4 }}>{proj.title}</h3>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20 }}>
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <motion.button key={i}
                  onClick={() => { setCurrent(i); startTimer(); }}
                  animate={{ width: i === current ? 28 : 8, background: i === current ? '#e91e8c' : '#333' }}
                  style={{ height: 8, borderRadius: 999, border: 'none', cursor: 'pointer', padding: 0 }} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Stats ───────────────────────────────────────────────────────────────── */
const StatsSection = () => (
  <section className="section-pad" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#0d0d0d 0%,#161616 50%,#0d0d0d 100%)' }}>
    <motion.div animate={{ scaleY: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}
      className="stats-shape"
      style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', width: 70, height: 140, background: 'linear-gradient(180deg,#e91e8c,#7c3aed)', borderRadius: '0 100px 100px 0', opacity: 0.7, boxShadow: '4px 0 20px rgba(233,30,140,0.3)' }} />
    <motion.div animate={{ scaleY: [1.1, 1, 1.1] }} transition={{ duration: 3, repeat: Infinity }}
      className="stats-shape"
      style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 70, height: 140, background: 'linear-gradient(180deg,#7c3aed,#e91e8c)', borderRadius: '100px 0 0 100px', opacity: 0.7, boxShadow: '-4px 0 20px rgba(124,58,237,0.3)' }} />

    <div className="section-inner">
      <div className="four-col-grid" style={{ textAlign: 'center' }}>
        {[{ v: '2k+', l: 'Happy Customer' }, { v: '19', l: 'Number Team' }, { v: '40', l: 'Projects' }, { v: '+1', l: 'Years Experience' }].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
            <motion.div animate={{ textShadow: ['0 0 20px rgba(245,197,24,0.3)', '0 0 40px rgba(245,197,24,0.6)', '0 0 20px rgba(245,197,24,0.3)'] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, color: '#f5c518', lineHeight: 1, marginBottom: 8 }}>
              {s.v}
            </motion.div>
            <div style={{ color: '#6b7280', fontSize: 13, fontWeight: 500, letterSpacing: '0.03em' }}>{s.l}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Testimonials ────────────────────────────────────────────────────────── */
const TestimonialsSection = () => {
  const testimonials = [
    { text: "Working with Shadab Agency has been an absolute game-changer for our business. Their team delivered a stunning website that perfectly captures our brand identity and has significantly increased our conversion rates.", author: 'Kavita Lynch', role: 'CEO, TechStart Inc.', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80' },
    { text: "The team at Shadab Agency exceeded all our expectations. Their attention to detail, creative approach, and technical expertise made our project a huge success. Highly recommended!", author: 'Marcus Johnson', role: 'Founder, Digital Ventures', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
  ];
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
                  <img src={testimonials[cur].img} alt={testimonials[cur].author} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14 }} />
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
                <p style={{ color: '#d1d5db', fontSize: 'clamp(14px,1.5vw,17px)', lineHeight: 1.75, marginBottom: 28 }}>{testimonials[cur].text}</p>
                <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, margin: '0 0 4px 0' }}>{testimonials[cur].author}</p>
                <p style={{ color: '#4b5563', fontSize: 13, margin: 0 }}>{testimonials[cur].role}</p>
              </motion.div>
            </AnimatePresence>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              {[{ fn: () => setCur((cur - 1 + testimonials.length) % testimonials.length), Icon: ChevronLeft },
                { fn: () => setCur((cur + 1) % testimonials.length), Icon: ChevronRight }].map(({ fn, Icon }, i) => (
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

/* ─── Blog ────────────────────────────────────────────────────────────────── */
const BlogSection = () => {
  const [filter, setFilter] = useState('all');
  const posts = [
    { img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80', cat: 'Design', date: 'Feb 28, 2026', title: 'Rest During Working Hours' },
    { img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80', cat: 'Marketing', date: 'Feb 20, 2026', title: 'Do Digital Marketing In 2026' },
    { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80', cat: 'Tech', date: 'Feb 14, 2026', title: 'World of Tomorrow Tech' },
  ];

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
            {posts.map((p, i) => (
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

/* ─── CTA ─────────────────────────────────────────────────────────────────── */
const CTASection = () => (
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

/* ─── Footer ──────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', marginTop: 60 }}>
    <div className="section-inner" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 12px rgba(233,30,140,0.3)' }}><Zap size={16} color="#fff" /></div>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}><span style={{ color: '#e91e8c' }}>Shadab</span> Agency</span>
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

        {[{ title: 'Quick Links', items: ['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'] },
          { title: 'Product', items: ['Web Design', 'App Design', 'UI/UX Design', 'Branding', 'SEO Services', 'Digital Marketing'] }].map(col => (
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
            {[{ Icon: MapPin, text: '123 adress of this agency' }, { Icon: Phone, text: '+92 3452520619' }, { Icon: Mail, text: 'hello@Shadab.agency' }].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <Icon size={15} color="#e91e8c" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: '#4b5563', fontSize: 13, lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid #1a1a1a' }}>
      <div className="section-inner" style={{ paddingTop: 18, paddingBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10 }}>
        <p style={{ color: '#374151', fontSize: 13, margin: 0 }}>© 2026 Shadab Agency. All rights reserved.</p>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy Policy', 'Terms of Service'].map(t => (
            <a key={t} href="#" style={{ color: '#374151', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#9ca3af'} onMouseLeave={e => e.currentTarget.style.color = '#374151'}>{t}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

/* ─── Root ────────────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: '#0d0d0d', minHeight: '100vh' }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0d0d0d; overflow-x: hidden; }

        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 6px #22c55e} 50%{opacity:0.4;box-shadow:0 0 12px #22c55e} }
        @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

        /* ── Layout grids ── */
        .hero-grid        { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .two-col-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .four-col-grid    { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .three-col-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .portfolio-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; align-items: start; }
        .blog-layout      { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; align-items: start; }

        /* ── Nav visibility ── */
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none !important; }

        /* ── Section padding helper ── */
        .section-pad { padding: 100px 0; }
        .section-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

        /* ── Testimonial photo ── */
        .testi-photo { width: 280px; height: 350px; }

        /* ── CTA wrapper ── */
        .cta-wrapper { margin: 0 32px; border-radius: 24px; }
        .cta-inner   { padding: 0 64px; }

        /* ── Stats side shapes ── */
        .stats-shape { display: block; }

        /* ── Hero image ── */
        .hero-img { max-width: 460px; height: 380px; }

        /* ── Footer grid ── */
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }

        /* ─────────────────────────────────────────
           TABLET  ≤ 1024px
        ───────────────────────────────────────── */
        @media (max-width: 1024px) {
          .four-col-grid    { grid-template-columns: repeat(2, 1fr); }
          .portfolio-layout { grid-template-columns: 1fr; }
          .blog-layout      { grid-template-columns: 1fr; }
          .footer-grid      { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .hero-img         { max-width: 380px; height: 320px; }
        }

        /* ─────────────────────────────────────────
           MOBILE  ≤ 768px
        ───────────────────────────────────────── */
        @media (max-width: 768px) {
          .hero-grid        { grid-template-columns: 1fr; gap: 40px; }
          .two-col-grid     { grid-template-columns: 1fr; gap: 40px; }
          .three-col-grid   { grid-template-columns: 1fr 1fr; gap: 16px; }
          .portfolio-layout { grid-template-columns: 1fr; gap: 40px; }
          .blog-layout      { grid-template-columns: 1fr; gap: 40px; }
          .footer-grid      { grid-template-columns: 1fr 1fr; gap: 28px; }

          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }

          .section-pad  { padding: 64px 0; }
          .section-inner { padding: 0 20px; }

          .testi-photo  { width: 220px; height: 270px; }
          .hero-img     { max-width: 100%; height: 260px; }

          .cta-wrapper  { margin: 0 16px; border-radius: 18px; }
          .cta-inner    { padding: 0 28px; }

          .stats-shape  { display: none; }
        }

        /* ─────────────────────────────────────────
           SMALL MOBILE  ≤ 480px
        ───────────────────────────────────────── */
        @media (max-width: 480px) {
          .four-col-grid  { grid-template-columns: 1fr 1fr; gap: 14px; }
          .three-col-grid { grid-template-columns: 1fr; }
          .footer-grid    { grid-template-columns: 1fr; gap: 32px; }
          .testi-photo    { width: 180px; height: 220px; }
          .section-inner  { padding: 0 16px; }
          .cta-wrapper    { margin: 0 12px; border-radius: 14px; }
          .cta-inner      { padding: 0 20px; }
        }
      `}</style>
      <GlobalStyles />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}