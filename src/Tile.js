import React from 'react';
import './Tile.css';

const Tile = ({ id, number, isFlipped, onClick }) => {
    return (
        <div
        className={`tile ${isFlipped ? 'flipped' : ''}`}
        onClick={() => onClick(id)}
        >
        {isFlipped && <div className="number">{number}</div>}
        </div>
    );
};

export default Tile;