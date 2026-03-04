"use client";

import React, { useState } from 'react';
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
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  User
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: '#0d0d0d', minHeight: '100vh' }}>
      <style jsx global>{responsiveStyles}</style>
      <CursorGlow />
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0d0d0d', paddingTop: 80 }}>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '10%', left: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #7c3aed, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', bottom: '5%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #e91e8c, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="section-inner" style={{ width: '100%', paddingTop: 60, paddingBottom: 60, position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <Badge>CONTACT US</Badge>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
              style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff', display: 'block' }}>Let's Work</span>
              <GradientText>Together</GradientText>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
              style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Have a project in mind? We'd love to hear from you. Send us a message and let's create something amazing together.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-pad" style={{ background: '#111' }}>
        <div className="section-inner">
          <div className="two-col-grid">
            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Badge>GET IN TOUCH</Badge>
              <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Contact Information
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
                Reach out to us through any of the following channels. We're always ready to help bring your ideas to life.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <motion.div whileHover={{ scale: 1.02 }} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, borderRadius: 16, background: '#1a1a1a', border: '1px solid #2a2a2a', transition: 'all 0.3s' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(233,30,140,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={20} color="#e91e8c" />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 16, margin: '0 0 4px 0' }}>Email</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>info@bridgelogicsystems.com</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, borderRadius: 16, background: '#1a1a1a', border: '1px solid #2a2a2a', transition: 'all 0.3s' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(124,58,237,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={20} color="#7c3aed" />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 16, margin: '0 0 4px 0' }}>Phone</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>281-721-9469</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, borderRadius: 16, background: '#1a1a1a', border: '1px solid #2a2a2a', transition: 'all 0.3s' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(245,197,24,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={20} color="#f5c518" />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: 600, fontSize: 16, margin: '0 0 4px 0' }}>Address</h3>
                    <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>20309 Martin Ln Pflugerville, TX 78660</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
              <Badge>SEND MESSAGE</Badge>
              <h2 style={{ fontSize: 'clamp(24px,3vw,42px)', fontWeight: 800, color: '#fff', marginBottom: 20, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
                Drop Us a Line
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={{ color: '#9ca3af', fontSize: 13, fontWeight: 500, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <User size={16} />
                      Your Name
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02, borderColor: '#e91e8c' }}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: 14,
                        color: '#fff',
                        background: '#1a1a1a',
                        border: '1px solid #2a2a2a',
                        borderRadius: 12,
                        outline: 'none',
                        transition: 'all 0.3s'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ color: '#9ca3af', fontSize: 13, fontWeight: 500, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Mail size={16} />
                      Email Address
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02, borderColor: '#e91e8c' }}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontSize: 14,
                        color: '#fff',
                        background: '#1a1a1a',
                        border: '1px solid #2a2a2a',
                        borderRadius: 12,
                        outline: 'none',
                        transition: 'all 0.3s'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: '#9ca3af', fontSize: 13, fontWeight: 500, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <MessageSquare size={16} />
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02, borderColor: '#e91e8c' }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      color: '#fff',
                      background: '#1a1a1a',
                      border: '1px solid #2a2a2a',
                      borderRadius: 12,
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                </div>

                <div>
                  <label style={{ color: '#9ca3af', fontSize: 13, fontWeight: 500, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <MessageSquare size={16} />
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02, borderColor: '#e91e8c' }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontSize: 14,
                      color: '#fff',
                      background: '#1a1a1a',
                      border: '1px solid #2a2a2a',
                      borderRadius: 12,
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                      lineHeight: 1.5,
                      transition: 'all 0.3s'
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(233,30,140,0.55)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '14px 32px',
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    border: 'none',
                    borderRadius: 999,
                    background: 'linear-gradient(135deg,#e91e8c,#7c3aed)',
                    cursor: 'pointer',
                    letterSpacing: '0.01em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    alignSelf: 'flex-start',
                    transition: 'all 0.3s'
                  }}
                >
                  Send Message
                  <Send size={16} />
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
