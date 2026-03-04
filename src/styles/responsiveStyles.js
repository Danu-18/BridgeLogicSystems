export const responsiveStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: #0d0d0d; overflow-x: hidden; }

  @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 6px #22c55e} 50%{opacity:0.4;box-shadow:0 0 12px #22c55e} }
  @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

  /* ── Layout grids ── */
  .hero-grid        { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .two-col-grid     { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .four-col-grid    { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .three-col-grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .portfolio-layout { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; align-items: start; }
  .blog-layout      { display: grid; grid-template-columns: 1fr 2fr; gap: 60px; align-items: start; }
  .portfolio-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .footer-grid      { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }

  /* ── Nav visibility ── */
  .nav-desktop { display: flex !important; }
  .nav-mobile  { display: none !important; }

  /* ── Section padding helper ── */
  .section-pad { padding: 100px 0; }
  .section-inner { max-width: 1280px; margin: 0 auto; padding: 0 32px; }

  /* ── Testimonial photo ── */
  .testi-photo { width: 280px; height: 350px; }

  /* ── CTA wrapper ── */
  .cta-wrapper { margin: 0 32px; border-radius: 24px; }
  .cta-inner   { padding: 0 64px; }

  /* ── Stats side shapes ── */
  .stats-shape { display: block; }

  /* ── Hero image ── */
  .hero-img { max-width: 460px; height: 380px; }

  /* ─────────────────────────────────────────
     TABLET  ≤ 1024px
  ───────────────────────────────────────── */
  @media (max-width: 1024px) {
    .four-col-grid    { grid-template-columns: repeat(2, 1fr); }
    .portfolio-layout { grid-template-columns: 1fr; }
    .blog-layout      { grid-template-columns: 1fr; }
    .portfolio-cards { grid-template-columns: 1fr; }
    .footer-grid      { grid-template-columns: repeat(2, 1fr); gap: 32px; }
    .section-inner { padding: 0 24px; }
    .hero-img     { max-width: 380px; height: 320px; }
    .cta-wrapper  { margin: 0 24px; border-radius: 20px; }
    .cta-inner    { padding: 0 48px; }
  }

  /* ─────────────────────────────────────────
     MOBILE  ≤ 768px
  ───────────────────────────────────────── */
  @media (max-width: 768px) {
    .hero-grid        { grid-template-columns: 1fr; gap: 40px; }
    .two-col-grid     { grid-template-columns: 1fr; gap: 40px; }
    .three-col-grid   { grid-template-columns: 1fr 1fr; gap: 16px; }
    .portfolio-layout { grid-template-columns: 1fr; gap: 40px; }
    .blog-layout      { grid-template-columns: 1fr; gap: 40px; }
    .portfolio-cards { grid-template-columns: 1fr; gap: 20px; }
    .four-col-grid    { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .footer-grid      { grid-template-columns: 1fr 1fr; gap: 28px; }

    .nav-desktop { display: none !important; }
    .nav-mobile  { display: flex !important; }

    .section-pad  { padding: 64px 0; }
    .section-inner { padding: 0 20px; }

    .testi-photo  { width: 220px; height: 270px; }
    .hero-img     { max-width: 100%; height: 260px; }

    .cta-wrapper  { margin: 0 16px; border-radius: 18px; }
    .cta-inner    { padding: 0 28px; }

    .stats-shape  { display: none; }
  }

  /* ─────────────────────────────────────────
     SMALL MOBILE  ≤ 480px
  ───────────────────────────────────────── */
  @media (max-width: 480px) {
    .section-pad  { padding: 48px 0; }
    .section-inner { padding: 0 16px; }

    .four-col-grid  { grid-template-columns: 1fr; gap: 14px; }
    .three-col-grid { grid-template-columns: 1fr; }
    .portfolio-cards { grid-template-columns: 1fr; gap: 16px; }
    .footer-grid    { grid-template-columns: 1fr; gap: 32px; }
    .testi-photo    { width: 180px; height: 220px; }
    .cta-wrapper    { margin: 0 12px; border-radius: 14px; }
    .cta-inner      { padding: 0 20px; }
  }
`;
