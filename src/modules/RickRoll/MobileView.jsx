export const MobileView = ({ onClose }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
        }}>
            <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Rick Roll"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: '100%', marginBottom: '20px' }}
            />
            <button
                onClick={onClose}
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                }}
            >
                Close Video
            </button>
        </div>
    );
};
