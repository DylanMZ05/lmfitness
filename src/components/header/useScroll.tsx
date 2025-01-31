import { useState, useEffect } from 'react';

const useScroll = (threshold: number = 50): boolean => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return isScrolled;
};

export default useScroll;