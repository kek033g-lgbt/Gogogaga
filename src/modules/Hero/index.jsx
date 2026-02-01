import { useState, useEffect } from 'react';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';

export const Hero = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileView {...props} /> : <DesktopView {...props} />;
};
