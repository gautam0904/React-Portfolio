import { useState, useEffect, useCallback, type RefObject } from 'react';

interface UseScrollOptions {
    threshold?: number;
    root?: Element | null;
}

interface UseScrollReturn {
    scrollY: number;
    isScrolled: boolean;
    scrollDirection: 'up' | 'down' | null;
    scrollTo: (elementId: string) => void;
    scrollToTop: () => void;
}

export const useScroll = ({ threshold = 50 }: UseScrollOptions = {}): UseScrollReturn => {
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            }

            setLastScrollY(currentScrollY);
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollTo = useCallback((elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return {
        scrollY,
        isScrolled: scrollY > threshold,
        scrollDirection,
        scrollTo,
        scrollToTop
    };
};

// Hook to detect if element is in view
export const useInViewport = (
    ref: RefObject<Element>,
    options: IntersectionObserverInit = {}
): boolean => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, {
            threshold: 0.1,
            ...options
        });

        observer.observe(element);
        return () => observer.disconnect();
    }, [ref, options]);

    return isInView;
};

export default useScroll;
