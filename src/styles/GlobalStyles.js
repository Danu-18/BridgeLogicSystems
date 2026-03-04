export const GlobalStyles = () => (
  <style jsx global>{`
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .section-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .nav-desktop {
      display: flex;
    }
    .nav-mobile {
      display: none;
    }
    .section-pad {
      padding: 80px 0;
    }
    .two-col-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .four-col-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
    }
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 40px;
    }
    @media (max-width: 768px) {
      .section-inner {
        padding: 0 20px;
      }
      .hero-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .nav-desktop {
        display: none;
      }
      .nav-mobile {
        display: flex;
      }
      .two-col-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .four-col-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .portfolio-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }
      .blog-grid {
        grid-template-columns: 1fr;
        gap: 20px;
      }
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      .four-col-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .portfolio-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .stats-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;
      }
      .blog-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
      }
      .footer-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
      }
    }
  `}</style>
);
