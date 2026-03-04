export const GradientText = ({ children, style = {} }) => (
  <span style={{
    background: 'linear-gradient(135deg, #e91e8c, #c026d3, #7c3aed)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientShift 3s ease infinite',
    ...style,
  }}>{children}</span>
);
