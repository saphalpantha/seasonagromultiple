import React, { useState, useEffect } from 'react';

const Rectangle = ({ position }) => (
  <div
    style={{
      position: 'absolute',
      left: position.x,
      top: position.y,
      width: '100px',
      height: '100px',
      backgroundColor: 'red',
    }}
  />
);

const Demo = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setIsKeyPressed(true);

      if (event.keyCode === 37) { // Left arrow key
        setPosition(prevPosition => ({ x: prevPosition.x - (isKeyPressed ? 20 : 10), y: prevPosition.y }));
      } else if (event.keyCode === 38) { // Up arrow key
        setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y - (isKeyPressed ? 40 : 10) }));
      } else if (event.keyCode === 39) { // Right arrow key
        setPosition(prevPosition => ({ x: prevPosition.x + (isKeyPressed ? 20 : 10), y: prevPosition.y }));
      } else if (event.keyCode === 40) { // Down arrow key
        setPosition(prevPosition => ({ x: prevPosition.x, y: prevPosition.y + (isKeyPressed ? 20 : 10) }));
      }
    };

    const handleKeyUp = () => {
      setIsKeyPressed(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isKeyPressed]);

  return <Rectangle position={position} />;
};

export default Demo;
