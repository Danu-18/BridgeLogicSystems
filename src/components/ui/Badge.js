import { motion } from 'framer-motion';

export const Badge = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 16, background: 'rgba(233,30,140,0.15)', color: '#e91e8c', border: '1px solid rgba(233,30,140,0.35)', textTransform: 'uppercase' }}
  >{children}</motion.span>
);
