const canvasSketch = require('canvas-sketch');
const settings = {
  dimensions: 'a4',
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 1 / 4;
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    context.lineWidth = 0.1;
    context.translate(0.25, 0.1);
    for (let i = 0.5; i <= 18.5; i = i + 2) {
      for (let j = 1; j <= 28; j = j + 2) {
        let random = Math.random();
        if (random > 0.9) {
          context.beginPath();
          context.arc(i + 0.78, j + 0.78, 0.75, 0, Math.PI * 2, true);
          context.stroke();
        } else {
          context.strokeRect(i, j, 1.5, 1.5);
        }
      }
    }
  };
};
canvasSketch(sketch, settings);
