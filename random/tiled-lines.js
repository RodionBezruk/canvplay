const canvasSketch = require('canvas-sketch');
const settings = {
  dimensions: 'a3',
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    context.translate(0.0, 0.0);
    context.strokeStyle = 'black';
    context.lineWidth = 0.1;
    for (let i = 0; i <= width; i++) {
      for (let j = 0; j <= height; j++) {
        context.beginPath();
        if (Math.random() > 0.5) {
          context.moveTo(i, j);
          context.lineTo(i + 1, j + 1);
        } else {
          context.moveTo(i + 1, j);
          context.lineTo(i, j + 1);
        }
        context.stroke();
      }
    }
  };
};
canvasSketch(sketch, settings);
