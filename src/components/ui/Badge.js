import { motion } from 'framer-motion';

export const Badge = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 999, fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 24, background: 'linear-gradient(135deg, rgba(233,30,140,0.2), rgba(124,58,237,0.15))', color: '#e91e8c', border: '2px solid rgba(233,30,140,0.4)', textTransform: 'uppercase', boxShadow: '0 4px 15px rgba(233,30,140,0.2)' }}
  >{children}</motion.span>
);
