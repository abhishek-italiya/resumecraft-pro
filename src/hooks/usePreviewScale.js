import { useState, useEffect, useRef } from 'react';

const A4_WIDTH = 595;

export const usePreviewScale = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.getBoundingClientRect().width;
      setScale(Math.min(1, Math.max(0.35, width / A4_WIDTH)));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return { containerRef, scale, a4Width: A4_WIDTH };
};
