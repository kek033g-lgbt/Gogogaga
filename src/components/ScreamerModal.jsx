import React from 'react';

export function ScreamerModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="horror-modal-overlay">
            <div className="horror-modal">
                <div className="horror-header">
                    <span>⚠️ FATAL ERROR ⚠️</span>
                    <span
                        onClick={onClose}
                        style={{ cursor: 'pointer' }}
                    >
                        X
                    </span>
                </div>
                <div className="horror-body">
                    <img
                        src={`${import.meta.env.BASE_URL}screamer.jpg`}
                        alt="SCREAMER"
                        className="horror-img"
                    />
                    <p className="horror-text">IT SEES YOU</p>
                </div>
            </div>
        </div>
    );
}
