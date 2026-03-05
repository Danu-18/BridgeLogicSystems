import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, CheckCircle } from 'lucide-react';

// Temporary auth functions
const mockAuth = {
  signup: async (name, email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    
    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    
    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after signup
    localStorage.setItem('currentUser', JSON.stringify({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      loginTime: new Date().toISOString()
    }));
    
    return { success: true, user: { name: newUser.name, email: newUser.email } };
  }
};

export const SignupForm = ({ onSwitchToLogin, onSignupSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const result = await mockAuth.signup(
        formData.name,
        formData.email,
        formData.password
      );
      
      if (result.success) {
        setSuccess(`Account created successfully! Welcome, ${result.user.name}!`);
        setTimeout(() => {
          if (onSignupSuccess) {
            onSignupSuccess(result.user);
          } else {
            window.location.href = '/';
          }
        }, 2000);
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
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const getPasswordStrength = (password) => {
    if (password.length < 6) return { strength: 0, color: '#ef4444', text: 'Weak' };
    if (password.length < 10) return { strength: 1, color: '#f59e0b', text: 'Fair' };
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      return { strength: 2, color: '#22c55e', text: 'Strong' };
    }
    return { strength: 1, color: '#f59e0b', text: 'Fair' };
  };

  const passwordStrength = getPasswordStrength(formData.password);

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
          Create Account
        </h2>
        <p style={{ 
          color: '#6b7280', 
          fontSize: 14, 
          lineHeight: 1.6 
        }}>
          Join BridgeLogic Systems and start your journey
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

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: 16, 
            top: '50%', 
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <User size={18} color="#6b7280" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
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

        {formData.password && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: -8 }}>
            <div style={{ 
              display: 'flex', 
              gap: 4, 
              flex: 1
            }}>
              {[0, 1, 2].map((level) => (
                <div
                  key={level}
                  style={{
                    height: 3,
                    flex: 1,
                    background: level <= passwordStrength.strength 
                      ? passwordStrength.color 
                      : 'rgba(255,255,255,0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
            <span style={{ 
              fontSize: 12, 
              color: passwordStrength.color,
              fontWeight: 500
            }}>
              {passwordStrength.text}
            </span>
          </div>
        )}

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
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
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
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <label style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: 12, 
          color: '#6b7280',
          fontSize: 13,
          cursor: 'pointer',
          marginTop: 4
        }}>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            style={{
              width: 16,
              height: 16,
              accentColor: '#e91e8c',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 4,
              marginTop: 2,
              flexShrink: 0
            }}
          />
          <span style={{ lineHeight: 1.5 }}>
            I agree to the{' '}
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
              Terms of Service
            </a>
            {' '}and{' '}
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
              Privacy Policy
            </a>
          </span>
        </label>

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
            'Creating account...'
          ) : (
            <>
              Create Account
              <ArrowRight size={16} />
            </>
          )}
        </motion.button>
      </form>

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
            Already have an account?
          </p>
          <motion.button
            onClick={onSwitchToLogin}
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
            Sign In
          </motion.button>
        </div>
    </motion.div>
  );
};
