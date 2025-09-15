'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
    const elementRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return { elementRef, isVisible };
};

export const useCountingNumber = (
    endValue: number,
    duration: number = 1200,
    startCounting: boolean = false
) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth counting
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * endValue);
            
            setCurrentValue(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCurrentValue(endValue);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [endValue, duration, startCounting]);

    return currentValue;
};

export const useStaggeredScrollAnimation = (itemCount: number, threshold = 0.1) => {
    const containerRef = useRef<HTMLElement>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the animations
                    visibleItems.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * 100);
                    });
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentContainer = containerRef.current;
        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, [threshold, itemCount, visibleItems]);

    return { containerRef, visibleItems };
};
