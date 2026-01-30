import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

function App() {
  const [isHorror, setIsHorror] = useState(false);
  const [isRickRolled, setIsRickRolled] = useState(false);
  const [isScreamer, setIsScreamer] = useState(false);

  const toggleHorror = () => {
    setIsHorror(!isHorror);
  };

  const toggleRickRoll = () => {
    setIsRickRolled(!isRickRolled);
  };

  // Horror mode body class
  useEffect(() => {
    if (isHorror) {
      document.body.classList.add('horror-mode');
    } else {
      document.body.classList.remove('horror-mode');
    }
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('horror-mode');
    };
  }, [isHorror]);

  // Jumpscare timer (every 10 seconds in horror mode)
  useEffect(() => {
    let interval;
    let timeout;
    let audioContext;

    if (isHorror) {
      interval = setInterval(() => {
        setIsScreamer(true);
        // Play LOUD scream using Web Audio API (5x amplified)
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        fetch(`${import.meta.env.BASE_URL}scream.mp3`)
          .then(response => response.arrayBuffer())
          .then(buffer => audioContext.decodeAudioData(buffer))
          .then(audioBuffer => {
            const source = audioContext.createBufferSource();
            const gainNode = audioContext.createGain();
            source.buffer = audioBuffer;
            gainNode.gain.value = 5; // 5x louder!
            source.connect(gainNode);
            gainNode.connect(audioContext.destination);
            source.start(0);
            // Close AudioContext after sound finishes
            source.onended = () => {
              audioContext.close().catch(() => { });
            };
          })
          .catch(() => { });
        // Hide screamer after 1.5 seconds
        timeout = setTimeout(() => setIsScreamer(false), 1500);
      }, 10000); // 10 seconds
    }

    // Cleanup function - prevents memory leaks
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (audioContext && audioContext.state !== 'closed') {
        audioContext.close().catch(() => { });
      }
    };
  }, [isHorror]);

  const features = [
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

  return (
    <>
      {/* Video Background */}
      <video
        key={isHorror ? 'horror' : 'normal'}
        src={isHorror ? `${import.meta.env.BASE_URL}horror-bg.mp4` : `${import.meta.env.BASE_URL}normal-bg.mp4`}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0
        }}
      />
      {/* Dark Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', color: 'white' }}>
        <Hero toggleHorror={toggleHorror} isHorror={isHorror} toggleRickRoll={toggleRickRoll} />

        {/* Horror Mode Audio - Native HTML5 Audio */}
        {isHorror && (
          <audio
            src={`${import.meta.env.BASE_URL}horror.mp3`}
            autoPlay
            loop
          />
        )}

        {/* Jumpscare Screamer */}
        {isScreamer && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a0000'
          }}>
            {/* Blood Splatters */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(ellipse, #8B0000 0%, #5a0000 40%, transparent 70%)',
              borderRadius: '50% 40% 60% 30%',
              transform: 'rotate(-20deg)',
              filter: 'blur(2px)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '200px',
              height: '180px',
              background: 'radial-gradient(ellipse, #8B0000 0%, #5a0000 40%, transparent 70%)',
              borderRadius: '40% 60% 30% 50%',
              transform: 'rotate(30deg)',
              filter: 'blur(3px)'
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '2%',
              width: '100px',
              height: '200px',
              background: 'linear-gradient(180deg, #8B0000 0%, transparent 100%)',
              borderRadius: '50%',
              transform: 'rotate(-10deg)',
              filter: 'blur(4px)'
            }} />
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '15%',
              width: '120px',
              height: '120px',
              background: 'radial-gradient(circle, #a00000 0%, #5a0000 50%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(2px)'
            }} />
            {/* Screamer Image */}
            <img
              src={`${import.meta.env.BASE_URL}screamer.jpg`}
              alt="AAAAA"
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                zIndex: 1,
                boxShadow: '0 0 100px rgba(139, 0, 0, 0.8)'
              }}
            />
          </div>
        )}

        {/* Fullscreen Rick Roll Overlay */}
        {isRickRolled && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }}>
            <button
              onClick={() => setIsRickRolled(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: 'white',
                color: 'black',
                padding: '10px 20px',
                borderRadius: '25px',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                zIndex: 10000
              }}
            >
              Close X
            </button>
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Rick Roll"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ maxWidth: '90vw', maxHeight: '80vh' }}
            />
          </div>
        )}

        <section className="section-padding" style={{ position: 'relative' }}>
          <div className="container">
            <div className="features-grid">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  {...feature}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <footer style={{
          padding: '3rem 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '5rem'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center',
            color: '#a1a1aa',
            fontSize: '0.875rem'
          }}>
            <p>© 2026 Future UI. Crafted with precision.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
