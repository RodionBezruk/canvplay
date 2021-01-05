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
    let rad = 0.25;
    for (let i = 0; i < 5000; i++) {
      let r = random.rangeFloor(50, 255);
      let g = random.rangeFloor(50, 255);
      let b = random.rangeFloor(50, 255);
      let a = random.range(0.9, 1);
      context.beginPath();
      context.fillStyle = `rgba(${r},${g},${b},${a})`;
      context.arc(
        Math.random() * width,
        Math.random() * height,
        rad,
        0,
        2 * Math.PI,
        true
      );
      context.fill();
    }
  };
};
canvasSketch(sketch, settings);
