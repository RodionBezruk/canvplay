const canvasSketch = require('canvas-sketch');
const util = require('canvas-sketch-util');
const settings = {
  dimensions: 'a3',
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    context.translate(0.2, 0.1);
    context.lineWidth = 0.05;
    function random() {
      let rnd = Math.random();
      return rnd < 0.7 ? rnd : random();
    }
    let size = 0.35;
    let offset = 0.2;
    for (let i = offset; i <= width - size; i = i + size + offset) {
      for (let j = offset; j <= height - size; j = j + size + offset) {
        context.beginPath();
        context.moveTo(i, j);
        let rnd = Math.random();
        let noise = util.random.noise2D(i * 0.08, j * 0.08);
        if (noise < 0.65) {
          if (rnd >= 0.5) {
            context.lineTo(i - random(), j + 0.9);
          } else {
            context.lineTo(i + random(), j + 0.9);
          }
        }
        context.stroke();
      }
    }
  };
};
canvasSketch(sketch, settings);
