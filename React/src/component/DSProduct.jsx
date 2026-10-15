import React, { useState } from 'react';

const DSproduct = () => {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);

  const [rotation, setRotation] = useState(0);

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  function setHeight() {
    setCatHeight(catHeight + 20);
  }

  function setWidth() {
    setCatWidth(catWidth + 20);
  }

  function rotateImage() {
    setRotation(rotation + 30);
  }

  function changeBgColor() {
    setRed(Math.floor(Math.random() * 256));
    setGreen(Math.floor(Math.random() * 256));
    setBlue(Math.floor(Math.random() * 256));
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'green', backgroundColor: 'brown' }}>
        Image Manipulation
      </h2>

      <div
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          border: '5px solid yellow',
          height: '400px',
          width: '400px',
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          src="https://images1.wionews.com/images/DNA-HN/900x1600/2023/4/28/1682680523071_1.jpg"
          height={catHeight}
          width={catWidth}
          alt="Cat"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: 'transform 0.3s ease'
          }}
        />
      </div>

      <h3>Cat Height: {catHeight}px</h3>
      <h3>Cat Width: {catWidth}px</h3>
      <h3>Rotation: {rotation}°</h3>

      <h3>Red: {red}</h3>
      <h3>Green: {green}</h3>
      <h3>Blue: {blue}</h3>

      <button onClick={setHeight}>Enhance Height</button>
      <button onClick={setWidth}>Enhance Width</button>
      <button onClick={rotateImage}>Rotate 30°</button>
      <button onClick={changeBgColor}>Change BG Color</button>
    </div>
  );
};

export default DSproduct;