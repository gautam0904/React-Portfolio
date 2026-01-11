import { useState, useEffect } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<Breakpoint, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
};

export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setMatches(mediaQuery.matches);

        const handler = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [query]);

    return matches;
};

export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
    return useMediaQuery(`(min-width: ${breakpoints[breakpoint]}px)`);
};

export const useIsMobile = (): boolean => {
    return !useBreakpoint('md');
};

export const useIsTablet = (): boolean => {
    const isMd = useBreakpoint('md');
    const isLg = useBreakpoint('lg');
    return isMd && !isLg;
};

export const useIsDesktop = (): boolean => {
    return useBreakpoint('lg');
};

export default useMediaQuery;
