"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CursorGlow, 
  Navbar, 
  Footer, 
  Badge, 
  GradientText 
} from '../../components';
import { responsiveStyles } from '../../styles/responsiveStyles';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

// Team data
const teamMembers = [
  {
    name: "Dave Johnson",
    role: "CEO & Founder",
    description: "Visionary leader with 10+ years in digital innovation and business strategy.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b920?w=300&q=80",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder", 
    description: "Full-stack architect specializing in scalable cloud solutions and AI integration.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    description: "Award-winning designer focused on user experience and brand identity.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    description: "Frontend specialist passionate about performance and accessibility.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    social: { linkedin: "#", twitter: "#" }
  }
];

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: '#0d0d0d', minHeight: '100vh' }}>
      <style jsx global>{responsiveStyles}</style>
      <CursorGlow />
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0d0d0d', paddingTop: 80 }}>
        {/* Background Effects - Same as Landing Hero */}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="section-inner" style={{ width: '100%', paddingTop: 60, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <Badge>ABOUT US</Badge>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>Building the Future with</span>
              <GradientText>Innovation</GradientText>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              We are a passionate team of creators, innovators, and problem-solvers dedicated to transforming ideas into extraordinary digital experiences that inspire and empower.
            </motion.p>

            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '12px 28px', fontSize: 14, fontWeight: 700, color: '#fff', border: 'none', borderRadius: 999, background: 'linear-gradient(135deg,#e91e8c,#7c3aed)', cursor: 'pointer', letterSpacing: '0.01em' }}>
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
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
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Our Story"
                    style={{ width: '100%', height: 'clamp(260px, 40vw, 420px)', objectFit: 'cover', display: 'block' }} />
                </div>
              </motion.div>
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}
                style={{ position: 'absolute', bottom: -16, left: -16, width: 70, height: 70, borderRadius: 14, background: 'linear-gradient(135deg,#7c3aed,#e91e8c)', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
              <Badge>OUR STORY</Badge>
              <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                From Vision to Reality
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                Founded in 2019, Shadab Agency began as a small team with a big dream: to bridge the gap between innovative technology and human-centered design. Our journey started in a modest workspace with just three passionate individuals who believed that digital experiences could be more intuitive, more beautiful, and more impactful.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>
                Today, we've grown into a full-service digital agency serving clients worldwide, but our core values remain unchanged. We still approach every project with the same curiosity, creativity, and commitment to excellence that defined our first days.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: 15 }}>
                Our story is one of continuous growth, learning, and adaptation. We've embraced emerging technologies, mastered new platforms, and expanded our capabilities to meet the evolving needs of the digital landscape. Through it all, our focus has remained constant: creating solutions that not only meet expectations but exceed them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-pad" style={{ background: '#0d0d0d' }}>
        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <Badge>OUR CORE VALUES</Badge>
            <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="three-col-grid">
            {[
              { 
                Icon: Target, 
                c: '#7c3aed', 
                bg: 'rgba(124,58,237,0.15)', 
                glow: 'rgba(124,58,237,0.3)', 
                title: 'Our Mission', 
                description: 'To create innovative digital solutions that empower businesses and delight users through exceptional design and cutting-edge technology.' 
              },
              { 
                Icon: Eye, 
                c: '#e91e8c', 
                bg: 'rgba(233,30,140,0.15)', 
                glow: 'rgba(233,30,140,0.3)', 
                title: 'Our Vision', 
                description: 'To be the leading digital agency that transforms how businesses connect with their audiences in the digital age.' 
              },
              { 
                Icon: Heart, 
                c: '#f5c518', 
                bg: 'rgba(245,197,24,0.15)', 
                glow: 'rgba(245,197,24,0.3)', 
                title: 'Our Values', 
                description: 'Innovation, integrity, and excellence guide everything we do. We believe in creating value through creativity and technical mastery.' 
              }
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: `0 8px 30px ${item.glow}` }}
                style={{ 
                  padding: '28px 24px', borderRadius: 18, display: 'flex', flexDirection: 'column', gap: 16, cursor: 'default', transition: 'box-shadow 0.3s',
                  background: '#1a1a1a', border: '1px solid #2a2a2a'
                }}>
                <div style={{ width: 50, height: 50, borderRadius: 14, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <item.Icon size={24} color={item.c} />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 17, margin: 0 }}>{item.title}</h3>
                <p style={{ color: '#6b7280', fontSize: 14, lineHeight: 1.65, margin: 0 }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad" style={{ background: '#111' }}>
        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <Badge>OUR TEAM</Badge>
            <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Meet Our Amazing Team
            </h2>
          </motion.div>

          <div className="four-col-grid">
            {teamMembers.map((member, i) => (
              <motion.div key={member.name}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(0,0,0,0.5)', borderColor: '#3a3a3a' }}
                style={{ 
                  borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', border: '1px solid #2a2a2a', 
                  cursor: 'pointer', transition: 'box-shadow 0.3s, border-color 0.3s'
                }}>
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <motion.img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 16, margin: '0 0 4px 0' }}>{member.name}</h3>
                  <p style={{ color: '#e91e8c', fontSize: 13, fontWeight: 500, margin: '0 0 12px 0' }}>{member.role}</p>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.5, margin: '0 0 16px 0' }}>{member.description}</p>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <motion.a href={member.social.linkedin} whileHover={{ scale: 1.2, color: '#fff' }}
                      style={{ width: 32, height: 32, borderRadius: '50%', background: '#2a2a2a', border: '1px solid #3a3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}>
                      <Linkedin size={14} />
                    </motion.a>
                    <motion.a href={member.social.twitter} whileHover={{ scale: 1.2, color: '#fff' }}
                      style={{ width: 32, height: 32, borderRadius: '50%', background: '#2a2a2a', border: '1px solid #3a3a3a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}>
                      <Twitter size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-pad" style={{ background: '#0d0d0d', position: 'relative', overflow: 'hidden' }}>
        <motion.div animate={{ scaleY: [1.1, 1, 1.1] }} transition={{ duration: 3, repeat: Infinity }}
          className="stats-shape"
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: 70, height: 140, background: 'linear-gradient(180deg,#7c3aed,#e91e8c)', borderRadius: '100px 0 0 100px', opacity: 0.7, boxShadow: '-4px 0 20px rgba(124,58,237,0.3)' }} />

        <div className="section-inner">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}>
            <Badge>OUR ACHIEVEMENTS</Badge>
            <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Numbers That Matter
            </h2>
          </motion.div>

          <div className="four-col-grid" style={{ textAlign: 'center' }}>
            {[
              { value: '100+', label: 'Happy Clients', color: '#e91e8c' },
              { value: '50+', label: 'Projects Delivered', color: '#7c3aed' },
              { value: '5+', label: 'Years Experience', color: '#f5c518' },
              { value: '15+', label: 'Team Members', color: '#22c55e' }
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <motion.div animate={{ textShadow: [`0 0 20px ${stat.color}40`, `0 0 40px ${stat.color}60`, `0 0 20px ${stat.color}40`] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  style={{ fontSize: 'clamp(40px,5vw,68px)', fontWeight: 900, color: stat.color, lineHeight: 1, marginBottom: 8 }}>
                  {stat.value}
                </motion.div>
                <div style={{ color: '#6b7280', fontSize: 13, fontWeight: 500, letterSpacing: '0.03em' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Same as Landing */}
      <section className="section-pad cta-wrapper" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#e91e8c 0%,#7c3aed 100%)' }}>
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity }}
          style={{ position: 'absolute', top: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 6, repeat: Infinity }}
          style={{ position: 'absolute', bottom: -80, right: -80, width: 350, height: 350, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        <div className="cta-inner" style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: 640 }}>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 700, marginBottom: 14, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ready to collaborate?</p>
            <h2 style={{ fontSize: 'clamp(28px,4.5vw,58px)', fontWeight: 900, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>LET'S BUILD</h2>
            <h2 style={{ fontSize: 'clamp(28px,4.5vw,58px)', fontWeight: 900, color: '#fff', margin: '0 0 40px 0', lineHeight: 1.05, letterSpacing: '-0.02em' }}>SOMETHING AMAZING</h2>
            <motion.button whileHover={{ scale: 1.06, background: '#fff', color: '#7c3aed', boxShadow: '0 0 30px rgba(255,255,255,0.3)' }} whileTap={{ scale: 0.97 }}
              style={{ padding: '13px 32px', fontSize: 14, fontWeight: 700, color: '#fff', borderRadius: 999, border: '2px solid rgba(255,255,255,0.8)', background: 'transparent', cursor: 'pointer', transition: 'all 0.25s' }}>
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
