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
    context.translate(0.45, 0.3);
    let size = 1.5;
    let offset = 0.3;
    for (let i = offset; i <= width - size; i = i + size + offset) {
      for (let j = offset; j <= height - size; j = j + size + offset) {
        let random = Math.random();
        if (random > 0.9) {
          context.beginPath();
          context.arc(i + 0.78, j + 0.78, 0.75, 0, Math.PI * 2, true);
          context.stroke();
        } else {
          context.strokeRect(i, j, size, size);
        }
      }
    }
  };
};
canvasSketch(sketch, settings);
