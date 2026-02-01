import { motion, AnimatePresence } from 'framer-motion';

export const DesktopView = ({ features, selectedFeature, setSelectedFeature }) => {
    return (
        <section className="section-padding" style={{ position: 'relative', minHeight: '600px' }}>
            <div className="container">
                {/* Helper Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-dim mb-12 uppercase tracking-widest text-sm"
                >
                    Explore the Core
                </motion.p>

                {/* Circular Triggers Grid */}
                <div className="flex justify-center gap-12 items-center flex-wrap">
                    {features.map((feature) => (
                        <motion.div
                            layoutId={`container-${feature.id}`}
                            key={feature.id}
                            onClick={() => setSelectedFeature(feature)}
                            className="group cursor-pointer flex flex-col items-center gap-4 relative"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Circular Gradient Background / Image placeholder */}
                            <motion.div
                                layoutId={`image-${feature.id}`}
                                className={`w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden`}
                            >
                                <feature.icon size={48} className="text-white drop-shadow-md z-10" />
                                {/* Decorative glassy overlay */}
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            <motion.div layoutId={`text-content-${feature.id}`} className="text-center">
                                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                                <p className="text-xs text-dim">{feature.shortDescription}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        />

                        {/* Modal Content */}
                        <motion.div
                            layoutId={`container-${selectedFeature.id}`}
                            className="relative w-full max-w-4xl bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 border border-white/10"
                        >
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                ✕
                            </button>

                            {/* Left Side: Visuals */}
                            <motion.div
                                layoutId={`image-${selectedFeature.id}`}
                                className={`w-full md:w-1/2 min-h-[300px] bg-gradient-to-br ${selectedFeature.color} flex flex-col items-center justify-center p-8 relative`}
                            >
                                <selectedFeature.icon size={96} className="text-white drop-shadow-2xl mb-6" />
                                <h2 className="text-3xl font-bold text-white text-center">{selectedFeature.title}</h2>
                            </motion.div>

                            {/* Right Side: Details */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                <motion.div layoutId={`text-content-${selectedFeature.id}`}>
                                    <h3 className="text-xl font-semibold text-purple-400 mb-2 uppercase tracking-wider">Specifications</h3>
                                    <p className="text-dim text-lg leading-relaxed mb-6">
                                        {selectedFeature.description}
                                    </p>

                                    {/* Fake generic stats/features list for "bells and whistles" */}
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="block text-xs text-dim uppercase">Efficiency</span>
                                            <span className="text-lg font-mono text-white">99.9%</span>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="block text-xs text-dim uppercase">Latency</span>
                                            <span className="text-lg font-mono text-white">~1ms</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
