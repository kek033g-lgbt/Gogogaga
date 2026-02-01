import { motion } from 'framer-motion';

const MobileFeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            className="glass-panel p-6 relative overflow-hidden"
        >
            <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 ring-1 ring-white/10">
                    <Icon className="text-purple-400" size={20} />
                </div>

                <h3 className="text-lg font-bold mb-2 text-white">
                    {title}
                </h3>

                <p className="text-dim text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export const MobileView = ({ features }) => {
    return (
        <section className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '1rem' }}>
                    {features.map((feature, index) => (
                        <MobileFeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.05}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
