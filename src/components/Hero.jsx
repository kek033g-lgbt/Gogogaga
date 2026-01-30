import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = ({ toggleHorror, isHorror, toggleRickRoll }) => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: '80px'
    }}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        background: 'rgba(139, 92, 246, 0.2)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: -10
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
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
            <span>{isHorror ? "RUN WHILE YOU CAN" : "Next Generation Experience"}</span>
          </motion.div>

          <h1 className="hero-title tracking-tight mb-6">
            {isHorror ? "DEATH IS" : "Future is"} <br />
            <span className="text-gradient">{isHorror ? "COMING FOR YOU" : "Unknown & Beautiful"}</span>
          </h1>

          <p className="hero-subtitle text-dim mb-10 leading-relaxed">
            {isHorror ? "THERE IS NO ESCAPE. DO NOT LOOK BEHIND YOU." : "Crafting digital experiences that defy expectations. Immersive, responsive, and incredibly fast."}
          </p>

          <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleRickRoll}
              style={{
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '9999px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleHorror}
              className="glass-panel"
              style={{
                padding: '1rem 2rem',
                color: 'white',
                borderRadius: '9999px',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              {isHorror ? "Stop It!" : "View Demo"}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="decorative-element absolute top-1/4 right-[10%] w-20 h-20 glass-panel rounded-2xl -z-10 rotate-12 bg-gradient-to-br from-white/10 to-transparent"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="decorative-element absolute bottom-1/4 left-[10%] w-32 h-32 glass-panel rounded-full -z-10 -rotate-12 bg-gradient-to-tr from-purple-500/10 to-transparent"
      />
    </section>
  );
};
