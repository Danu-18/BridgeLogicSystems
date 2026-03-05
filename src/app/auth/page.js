"use client";

import React from 'react';
import { AuthPage } from '../../components';
import { responsiveStyles } from '../../styles/responsiveStyles';

export default function Auth() {
  return (
    <div style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <style jsx global>{responsiveStyles}</style>
      <AuthPage />
    </div>
  );
}
