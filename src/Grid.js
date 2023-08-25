import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import './Grid.css';

const gridSize = 6;
const totalPairs = (gridSize * gridSize) / 2;

const generateRandomNumbers = () => {
  const numbers = Array.from({ length: totalPairs }, (_, index) => index + 1);
  return [...numbers, ...numbers];
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Grid = () => {
  const numbers = generateRandomNumbers();
  shuffleArray(numbers);

  const [tiles, setTiles] = useState(
    numbers.map((number, index) => ({
      id: index,
      number,
      isFlipped: false,
    }))
  );
  const [selectedTiles, setSelectedTiles] = useState([]);

  const handleTileClick = (clickedId) => {
    if (selectedTiles.length === 2) {
      return;
    }

    const updatedTiles = [...tiles];
    updatedTiles[clickedId].isFlipped = true;
    setSelectedTiles([...selectedTiles, clickedId]);

    if (selectedTiles.length === 1) {
      const firstId = selectedTiles[0];
      if (tiles[firstId].number === tiles[clickedId].number) {
        updatedTiles[firstId].isFlipped = true;
        setSelectedTiles([]);
      }
    }

    setTiles(updatedTiles);
  };

  useEffect(() => {
    if (selectedTiles.length === 2) {
      setTimeout(() => {
        const updatedTiles = tiles.map((tile) =>
          selectedTiles.includes(tile.id) ? { ...tile, isFlipped: false } : tile
        );
        setSelectedTiles([]);
        setTiles(updatedTiles);
      }, 1000);
    }
  }, [selectedTiles, tiles]);

  return (
    <div className="grid-container">
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          id={tile.id}
          number={tile.number}
          isFlipped={tile.isFlipped}
          onClick={handleTileClick}
        />
      ))}
    </div>
  );
};

export default Grid;