import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';

// Temporary auth functions
const mockAuth = {
  login: async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        loginTime: new Date().toISOString()
      }));
      return { success: true, user: { name: user.name, email: user.email } };
    } else {
      // Check for demo account
      if (email === 'demo@bridgelogic.com' && password === 'demo123') {
        const demoUser = {
          id: 'demo',
          name: 'Demo User',
          email: 'demo@bridgelogic.com',
          loginTime: new Date().toISOString()
        };
        localStorage.setItem('currentUser', JSON.stringify(demoUser));
        return { success: true, user: { name: 'Demo User', email: 'demo@bridgelogic.com' } };
      }
      return { success: false, error: 'Invalid email or password' };
    }
  },
  
  logout: () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  }
};

export const LoginForm = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    try {
      const result = await mockAuth.login(formData.email, formData.password);
      
      if (result.success) {
        setSuccess(`Welcome back, ${result.user.name}!`);
        setTimeout(() => {
          if (onLoginSuccess) {
            onLoginSuccess(result.user);
          } else {
            window.location.href = '/';
          }
        }, 1500);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%' }}
    >
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ 
          color: '#fff', 
          fontSize: 28, 
          fontWeight: 800, 
          marginBottom: 12,
          letterSpacing: '-0.02em'
        }}>
          Welcome Back
        </h2>
        <p style={{ 
          color: '#6b7280', 
          fontSize: 14, 
          lineHeight: 1.6 
        }}>
          Sign in to your BridgeLogic Systems account
        </p>
      </div>

      {/* Error/Success Messages */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '12px 16px',
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 8,
            color: '#ef4444',
            fontSize: 13,
            marginBottom: 16
          }}
        >
          {error}
        </motion.div>
      )}
      
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            padding: '12px 16px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: 8,
            color: '#22c55e',
            fontSize: 13,
            marginBottom: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          <CheckCircle size={16} />
          {success}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <Mail size={18} color="#6b7280" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            required
            style={{
              width: '100%',
              padding: '14px 16px 14px 48px',
              fontSize: 14,
              color: '#fff',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = '#e91e8c';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.04)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          />
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <Lock size={18} color="#6b7280" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            style={{
              width: '100%',
              padding: '14px 48px 14px 48px',
              fontSize: 14,
              color: '#fff',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.06)';
              e.target.style.borderColor = '#e91e8c';
            }}
            onBlur={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.04)';
              e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#6b7280',
              cursor: 'pointer',
              padding: 4
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          fontSize: 13
        }}>
          <label style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8, 
            color: '#6b7280',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              style={{
                width: 16,
                height: 16,
                accentColor: '#e91e8c',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 4
              }}
            />
            Remember me
          </label>
          <a 
            href="#" 
            style={{ 
              color: '#e91e8c', 
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#7c3aed'}
            onMouseLeave={(e) => e.target.style.color = '#e91e8c'}
          >
            Forgot password?
          </a>
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02, boxShadow: '0 0 30px rgba(233,30,140,0.4)' }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          style={{
            padding: '14px 24px',
            fontSize: 15,
            fontWeight: 700,
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            background: isLoading 
              ? '#374151' 
              : 'linear-gradient(135deg,#e91e8c,#7c3aed)',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 8
          }}
        >
          {isLoading ? (
            'Signing in...'
          ) : (
            <>
              Sign In
              <ArrowRight size={16} />
            </>
          )}
        </motion.button>
      </form>

        {/* <div style={{ 
          marginTop: 24, 
          textAlign: 'center',
          padding: '16px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: 8,
          fontSize: 11,
          color: '#6b7280'
        }}>
          <p style={{ marginBottom: 8, fontWeight: 600 }}>Demo Account:</p>
          <p>Email: demo@bridgelogic.com</p>
          <p>Password: demo123</p>
        </div> */}

        <div style={{ 
          marginTop: 24, 
          textAlign: 'center',
          padding: '20px 0',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ 
            color: '#6b7280', 
            fontSize: 14,
            marginBottom: 16
          }}>
            Don't have an account?
          </p>
          <motion.button
            onClick={onSwitchToSignup}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '10px 20px',
              fontSize: 14,
              fontWeight: 600,
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8,
              background: 'transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(233,30,140,0.1)';
              e.target.style.borderColor = '#e91e8c';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          >
            Create Account
          </motion.button>
        </div>
    </motion.div>
  );
};
