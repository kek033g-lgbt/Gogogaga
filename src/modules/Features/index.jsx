import { useState, useEffect } from 'react';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

export const Features = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const featuresList = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Powered by Vite and optimized for maximum performance. Zero-latency interactions."
        },
        {
            icon: Shield,
            title: "Secure by Default",
            description: "Enterprise-grade security protections baked into the core architecture."
        },
        {
            icon: Globe,
            title: "Global Scale",
            description: "Edge-ready deployment ensuring low latency for users anywhere in the world."
        },
        {
            icon: Cpu,
            title: "AI Integrated",
            description: "Native support for modern AI capabilities and real-time processing."
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? <MobileView features={featuresList} /> : <DesktopView features={featuresList} />;
};
