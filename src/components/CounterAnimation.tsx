"use client"

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterAnimationProps {
  end: string;
  duration?: number;
  suffix?: string;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ 
  end, 
  duration = 1500, 
  suffix = "" 
}) => {
  const [count, setCount] = useState<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  const countRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const startTime: number = performance.now();
    const endValue: number = parseInt(end.replace(/,|\+/g, ''));
    
    const updateCount = (currentTime: number): void => {
      const elapsedTime: number = currentTime - startTime;
      const progress: number = Math.min(elapsedTime / duration, 1);
      
      // Easing function untuk animasi yang lebih natural
      const easeOutQuad: number = progress * (2 - progress);
      const currentValue: number = Math.floor(easeOutQuad * endValue);
      
      if (countRef.current !== currentValue) {
        countRef.current = currentValue;
        setCount(currentValue);
      }
      
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(updateCount);
      }
    };
    
    rafRef.current = requestAnimationFrame(updateCount);
    
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [inView, end, duration]);
  
  // Format angka dengan pemisah ribuan
  const formattedCount: string = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <div ref={ref} className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
      {formattedCount}{suffix}
    </div>
  );
};

export default CounterAnimation; 