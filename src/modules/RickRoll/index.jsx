import { useState, useEffect } from 'react';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';

export const RickRoll = ({ isOpen, onClose }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isOpen) return null;

    return isMobile ? <MobileView onClose={onClose} /> : <DesktopView onClose={onClose} />;
};
