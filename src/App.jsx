import { useState, useEffect } from 'react';
import { Hero } from './modules/Hero';
import { Features } from './modules/Features';
import { Screamer } from './modules/Screamer';
import { RickRoll } from './modules/RickRoll';

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
        className="fixed-bg"
      />
      {/* Dark Overlay */}
      <div
        className="fixed-bg"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1
        }}
      />

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

        {/* Modules */}
        <Screamer isOpen={isScreamer} onClose={() => setIsScreamer(false)} />
        <RickRoll isOpen={isRickRolled} onClose={() => setIsRickRolled(false)} />
        <Features />

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
