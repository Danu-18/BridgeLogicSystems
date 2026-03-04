"use client";

import React from 'react';
import { 
  CursorGlow, 
  Navbar, 
  Footer, 
  HeroSection, 
  AboutSection, 
  ServicesSection, 
  PortfolioSection, 
  StatsSection, 
  TestimonialsSection, 
  BlogSection, 
  CTASection 
} from '../components';
import { responsiveStyles } from '../styles/responsiveStyles';

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: '#0d0d0d', minHeight: '100vh' }}>
      <style jsx global>{responsiveStyles}</style>
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
}
