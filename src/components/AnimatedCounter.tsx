'use client';

import { useCountingNumber, useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedCounterProps {
    endValue: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    className?: string;
}

const AnimatedCounter = ({ 
    endValue, 
    duration = 1200, 
    suffix = '', 
    prefix = '', 
    className = '' 
}: AnimatedCounterProps) => {
    const { elementRef, isVisible } = useScrollAnimation(0.3);
    const currentValue = useCountingNumber(endValue, duration, isVisible);

    return (
        <span 
            ref={elementRef as React.RefObject<HTMLSpanElement>} 
            className={`counting-number ${className}`}
        >
            {prefix}{currentValue.toLocaleString('vi-VN')}{suffix}
        </span>
    );
};

export default AnimatedCounter;
