import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, ArrowLeft } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0d0d0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #7c3aed, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '-5%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #e91e8c, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }}
      />

      {/* Back to Home Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          position: 'absolute',
          top: 30,
          left: 30,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 16px',
          color: '#9ca3af',
          textDecoration: 'none',
          fontSize: 14,
          fontWeight: 500,
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 8,
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#9ca3af';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
        }}
      >
        <ArrowLeft size={16} />
        Back to Home
      </motion.a>

      {/* Main Auth Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: 480,
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 24px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: 'linear-gradient(135deg,#7c3aed,#e91e8c)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(233,30,140,0.4)'
            }}>
              <Zap size={20} color="#fff" />
            </div>
            <div>
              <span style={{
                color: '#fff',
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: '-0.02em',
                display: 'block'
              }}>
                <span style={{ color: '#e91e8c' }}>BridgeLogic</span> Systems
              </span>
              <span style={{
                color: '#6b7280',
                fontSize: 12,
                fontWeight: 500
              }}>
                Digital Innovation Platform
              </span>
            </div>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 20,
            backdropFilter: 'blur(20px)',
            padding: 40,
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          {/* Tab Switcher */}
          <div style={{
            display: 'flex',
            marginBottom: 32,
            background: 'rgba(255,255,255,0.04)',
            borderRadius: 12,
            padding: 4,
            position: 'relative'
          }}>
            <motion.div
              layout
              style={{
                position: 'absolute',
                top: 4,
                left: isLogin ? 4 : '50%',
                right: isLogin ? '50%' : 4,
                bottom: 4,
                background: 'linear-gradient(135deg,#e91e8c,#7c3aed)',
                borderRadius: 8,
                transition: 'all 0.3s ease'
              }}
            />
            <button
              onClick={switchToLogin}
              style={{
                flex: 1,
                padding: '12px 24px',
                fontSize: 14,
                fontWeight: 600,
                color: isLogin ? '#fff' : '#6b7280',
                border: 'none',
                background: 'transparent',
                borderRadius: 8,
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s ease'
              }}
            >
              Sign In
            </button>
            <button
              onClick={switchToSignup}
              style={{
                flex: 1,
                padding: '12px 24px',
                fontSize: 14,
                fontWeight: 600,
                color: !isLogin ? '#fff' : '#6b7280',
                border: 'none',
                background: 'transparent',
                borderRadius: 8,
                cursor: 'pointer',
                position: 'relative',
                zIndex: 1,
                transition: 'color 0.3s ease'
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {isLogin ? (
                <LoginForm onSwitchToSignup={switchToSignup} />
              ) : (
                <SignupForm onSwitchToLogin={switchToLogin} />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: 32,
            color: '#4b5563',
            fontSize: 12
          }}
        >
          <p style={{ marginBottom: 8 }}>
            © 2026 BridgeLogic Systems. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#" 
              style={{ 
                color: '#6b7280', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              style={{ 
                color: '#6b7280', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              style={{ 
                color: '#6b7280', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = '#9ca3af'}
              onMouseLeave={(e) => e.target.style.color = '#6b7280'}
            >
              Support
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
