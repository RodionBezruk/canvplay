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
    context.translate(0.4, 0);
    context.strokeStyle = 'black';
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.lineWidth = 0.1;
    for (let j = 3; j < height - 1; j++) {
      context.beginPath();
      context.moveTo(0, j);
      for (let i = 0; i < width; i++) {
        let d = Math.abs(i - width / 2);
        let variance = Math.max(0, width / 2 - 2 - d);
        let random = ((Math.random() * variance) / 7) * -1;
        context.lineTo(i, j + random);
      }
      context.fill();
      context.stroke();
    }
  };
};
canvasSketch(sketch, settings);
