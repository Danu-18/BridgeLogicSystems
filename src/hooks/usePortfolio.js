import { useState, useRef, useCallback, useEffect } from 'react';

export const usePortfolio = (projects) => {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const [cardW, setCardW] = useState(0);
  const timerRef = useRef(null);
  const trackRef = useRef(null);
  const GAP = 20;

  // Measure container and compute card width
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.getBoundingClientRect().width;
    if (w === 0) return;
    const pv = w >= 900 ? 3 : w >= 560 ? 2 : 1;
    setPerView(pv);
    setCardW((w - GAP * (pv - 1)) / pv);
  }, []);

  useEffect(() => {
    // Measure immediately and after a short delay to handle layout shifts
    measure();
    const t = setTimeout(measure, 100);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, [measure]);

  const maxIdx = Math.max(0, projects.length - perView);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent(p => p >= maxIdx ? 0 : p + 1), 3000);
  }, [maxIdx]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  // Clamp current index when perView changes
  useEffect(() => {
    setCurrent(p => Math.min(p, maxIdx));
  }, [maxIdx]);

  const offset = cardW > 0 ? current * (cardW + GAP) : 0;

  const goToPrevious = () => setCurrent(p => p <= 0 ? maxIdx : p - 1);
  const goToNext = () => setCurrent(p => p >= maxIdx ? 0 : p + 1);

  return {
    current,
    perView,
    cardW,
    offset,
    trackRef,
    goToPrevious,
    goToNext,
    maxIdx
  };
};
