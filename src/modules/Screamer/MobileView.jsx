export const MobileView = ({ onClose }) => {
    return (
        <div className="horror-modal-overlay">
            <div className="horror-modal" style={{ width: '95%', margin: '0 auto' }}>
                <div className="horror-header" style={{ fontSize: '1rem' }}>
                    <span>⚠️ SYSTEM FAILURE ⚠️</span>
                    <span
                        onClick={onClose}
                        style={{ cursor: 'pointer', padding: '0 10px' }}
                    >
                        X
                    </span>
                </div>
                <div className="horror-body" style={{ padding: '1rem' }}>
                    <img
                        src={`${import.meta.env.BASE_URL}screamer.jpg`}
                        alt="SCREAMER"
                        className="horror-img"
                        style={{ maxHeight: '300px' }}
                    />
                    <p className="horror-text" style={{ fontSize: '1.5rem' }}>BEHIND YOU</p>
                </div>
            </div>
        </div>
    );
};
