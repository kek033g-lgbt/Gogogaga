export const DesktopView = ({ onClose }) => {
    return (
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
                onClick={onClose}
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
    );
};
