import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, ChevronDown } from 'lucide-react';

export const UserMenu = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check for logged in user
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setUser(JSON.parse(currentUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    setMenuOpen(false);
    window.location.href = '/';
  };

  if (!user) return null;

  return (
    <div style={{ position: 'relative' }}>
      <motion.button
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          fontSize: 12,
          fontWeight: 600,
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.04)',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.borderColor = '#e91e8c';
          e.target.style.background = 'rgba(233,30,140,0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = 'rgba(255,255,255,0.25)';
          e.target.style.background = 'rgba(255,255,255,0.04)';
        }}
      >
        <div style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#e91e8c,#7c3aed)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <User size={12} color="#fff" />
        </div>
        <span style={{ fontSize: 13 }}>{user.name}</span>
        <ChevronDown size={12} style={{ 
          transform: menuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }} />
      </motion.button>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 100 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: 8,
                width: 200,
                background: 'rgba(10,10,10,0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                backdropFilter: 'blur(20px)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                zIndex: 101,
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '12px 0' }}>
                <div style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  marginBottom: 8
                }}>
                  <p style={{ 
                    color: '#fff', 
                    fontSize: 13, 
                    fontWeight: 600,
                    marginBottom: 2
                  }}>
                    {user.name}
                  </p>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: 11 
                  }}>
                    {user.email}
                  </p>
                </div>

           

                <button
                  onClick={handleLogout}
                  style={{
                    width: '100%',
                    padding: '10px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    color: '#9ca3af',
                    background: 'none',
                    border: 'none',
                    fontSize: 13,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                    e.currentTarget.style.color = '#ef4444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#9ca3af';
                  }}
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
