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
    context.translate(-0.2, -0.7);
    context.strokeStyle = 'black';
    context.lineWidth = 0.1;
    function random(step) {
      if (step == 0) {
        return 0;
      }
      let rnd = Math.random();
      if (rnd > 0.5) {
        return 0.3 * step - 0.05;
      } else {
        return 0.3 * step;
      }
    }
    let size = 2;
    let offset = 0.2;
    for (let i = size; i < width - size; i = i + size + offset) {
      for (let j = size; j < height - size; j = j + size + offset) {
        context.beginPath();
        context.strokeRect(i + random(0), j + random(0), size, size);
        context.strokeRect(
          i + random(1),
          j + random(1),
          size - 0.5,
          size - 0.5
        );
        context.strokeRect(
          i + random(2),
          j + random(2),
          size - 1.0,
          size - 1.0
        );
        context.strokeRect(
          i + random(3),
          j + random(3),
          size - 1.5,
          size - 1.5
        );
      }
    }
  };
};
canvasSketch(sketch, settings);
