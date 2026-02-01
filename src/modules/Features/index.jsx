import { useState, useEffect } from 'react';
import { DesktopView } from './DesktopView';
import { MobileView } from './MobileView';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

export const Features = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [selectedFeature, setSelectedFeature] = useState(null);

    const featuresList = [
        {
            id: 'fast',
            icon: Zap,
            title: "Lightning Fast",
            shortDescription: "Zero-latency interactions.",
            description: "Powered by Vite and optimized for maximum performance. Every interaction is immediate, animations are 60fps, and load times are non-existent.",
            color: "from-purple-500 to-indigo-500"
        },
        {
            id: 'secure',
            icon: Shield,
            title: "Secure by Default",
            shortDescription: "Enterprise-grade protection.",
            description: "Security isn't an afterthought. With built-in headers, sanitized inputs, and best-in-class authentication patterns, your data stays safe.",
            color: "from-emerald-500 to-teal-500"
        },
        {
            id: 'global',
            icon: Globe,
            title: "Global Scale",
            shortDescription: "Edge-ready deployment.",
            description: "Deploy once, run everywhere. our edge network ensures that your application is served from the location nearest to your users.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 'ai',
            icon: Cpu,
            title: "AI Integrated",
            shortDescription: "Native modern support.",
            description: "Ready for the next generation of computing. Native bindings for LLMs, vector search, and automated reasoning pipelines.",
            color: "from-amber-500 to-orange-500"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const viewProps = {
        features: featuresList,
        selectedFeature,
        setSelectedFeature
    };

    return isMobile ? <MobileView {...viewProps} /> : <DesktopView {...viewProps} />;
};
