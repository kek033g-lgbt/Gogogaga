import { motion } from 'framer-motion';

export const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-8 relative group overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-purple-400 group-hover:text-pink-400 transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-200 transition-colors">
                    {title}
                </h3>

                <p className="text-dim leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};
