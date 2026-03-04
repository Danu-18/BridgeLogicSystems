export const getResponsiveStyles = () => ({
  sectionPad: '100px 0',
  sectionInner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 32px'
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center'
  },
  twoColGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center'
  },
  fourColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  threeColGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px'
  },
  portfolioLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '60px',
    alignItems: 'start'
  },
  blogLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '60px',
    alignItems: 'start'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px'
  },
  navDesktop: {
    display: 'flex'
  },
  navMobile: {
    display: 'none'
  }
});

export const getMediaQueries = () => ({
  tablet: '@media (max-width: 1024px)',
  mobile: '@media (max-width: 768px)',
  smallMobile: '@media (max-width: 480px)'
});

export const getResponsiveBreakpoints = () => ({
  tablet: 1024,
  mobile: 768,
  smallMobile: 480
});
