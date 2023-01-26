import React, { useState, useEffect } from 'react';

export const Carousel = (props) => {
  const items = [
    { id: 1, name: 'tile 1', info: 'this is first tile' },
    { id: 2, name: 'tile 2', info: 'this is second tile' },
    { id: 3, name: 'tile 3', info: 'this is third tile' },
  ];

  const [currentTile, setCurrentTile] = useState(0);
  let timer = null;
  useEffect(() => {
    timer = setTimeout(() => {
      setCurrentTile((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentTile]);

  const getTile = (tileIndex) => (
    <div className="text-danger">
      <div>{items[tileIndex].name}</div>
      <div>{items[tileIndex].info}</div>
    </div>
  );
  return (
    <>
      <div>This is carousel componenet</div>
      {getTile(currentTile)}
    </>
  );
};
