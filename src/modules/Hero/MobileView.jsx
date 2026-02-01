import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MobileView = ({ toggleHorror, isHorror, toggleRickRoll }) => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            paddingTop: '80px',
            paddingBottom: '2rem'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 text-sm font-medium text-purple-300"
                    >
                        <Sparkles size={16} />
                        <span>{isHorror ? "RUN!" : "Next Gen Experience"}</span>
                    </motion.div>

                    <h1 className="hero-title tracking-tight mb-6">
                        {isHorror ? "DEATH" : "Future"} <br />
                        <span className="text-gradient">{isHorror ? "IS HERE" : "Unlimited"}</span>
                    </h1>

                    <p className="hero-subtitle text-dim mb-10 leading-relaxed">
                        {isHorror ? "DO NOT LOOK BACK." : "Fast. Responsive. Immersive."}
                    </p>

                    <div className="hero-buttons">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleRickRoll}
                            style={{
                                padding: '1rem',
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%'
                            }}
                        >
                            Get Started <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleHorror}
                            className="glass-panel"
                            style={{
                                padding: '1rem',
                                color: 'white',
                                borderRadius: '9999px',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                width: '100%'
                            }}
                        >
                            {isHorror ? "Stop It!" : "Demo"}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
