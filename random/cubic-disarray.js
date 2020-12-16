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
    context.translate(-0.2, -0.5);
    context.lineWidth = 0.05;
    let size = 1;
    let rotation = Math.PI / 180;
    for (let i = size; i <= width - size; i += size) {
      for (let j = size; j <= height - size; j += size) {
        let sign = Math.random() < 0.5 ? -1 : 1;
        context.save();
        let rotate = j * rotation * sign * Math.random();
        context.translate(i + size / 2, j + size / 2);
        context.rotate(rotate);
        context.strokeRect(-size / 2, -size / 2, size, size);
        context.restore();
      }
    }
  };
};
canvasSketch(sketch, settings);
