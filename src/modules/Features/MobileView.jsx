import { motion, AnimatePresence } from 'framer-motion';

export const MobileView = ({ features, selectedFeature, setSelectedFeature }) => {
    return (
        <section className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <p className="text-center text-dim mb-8 uppercase tracking-widest text-xs">Tap to Open</p>

                <div className="grid grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <motion.div
                            layoutId={`container-${feature.id}`}
                            key={feature.id}
                            onClick={() => setSelectedFeature(feature)}
                            className="flex flex-col items-center gap-3"
                        >
                            <motion.div
                                layoutId={`image-${feature.id}`}
                                className={`w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                            >
                                <feature.icon size={32} className="text-white z-10" />
                            </motion.div>

                            <motion.div layoutId={`text-content-${feature.id}`} className="text-center">
                                <h3 className="text-sm font-bold text-white">{feature.title}</h3>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        {/* Modal Content - Bottom Sheet style on very small mobile, centered on larger */}
                        <motion.div
                            layoutId={`container-${selectedFeature.id}`}
                            className="relative w-full max-w-lg bg-[#1a1a1a] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10 border-t border-white/20 sm:border border-white/10"
                            style={{ maxHeight: '90vh' }}
                        >
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
                            >
                                ✕
                            </button>

                            <motion.div
                                layoutId={`image-${selectedFeature.id}`}
                                className={`w-full h-[200px] bg-gradient-to-br ${selectedFeature.color} flex flex-col items-center justify-center p-4 relative shrink-0`}
                            >
                                <selectedFeature.icon size={64} className="text-white mb-4" />
                                <h2 className="text-2xl font-bold text-white text-center">{selectedFeature.title}</h2>
                            </motion.div>

                            <div className="p-6 overflow-y-auto">
                                <motion.div layoutId={`text-content-${selectedFeature.id}`}>
                                    <p className="text-dim text-base leading-relaxed mb-6">
                                        {selectedFeature.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                                            <span className="block text-[10px] text-dim uppercase">Efficiency</span>
                                            <span className="text-sm font-mono text-white">99.9%</span>
                                        </div>
                                        <div className="bg-white/5 p-2 rounded-lg border border-white/5 text-center">
                                            <span className="block text-[10px] text-dim uppercase">Time</span>
                                            <span className="text-sm font-mono text-white">~1ms</span>
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
