const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const settings = {
  dimensions: 'a3',
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    context.translate(-0.15, 0.0);
    let offset = 1;
    let rad = 0.25;
    for (let i = offset; i < width; i += offset) {
      for (let j = offset; j < height; j += offset) {
        context.beginPath();
        let r = random.rangeFloor(50, 250);
        let g = random.rangeFloor(50, 250);
        let b = random.rangeFloor(50, 250);
        context.fillStyle = `rgba(${r},${g},${b},1)`;
        context.arc(i, j, rad, 0, Math.PI * 2, true);
        context.fill();
      }
    }
  };
};
canvasSketch(sketch, settings);
