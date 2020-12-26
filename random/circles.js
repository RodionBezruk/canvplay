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
    context.translate(0.8, 1);
    context.strokeStyle = 'black';
    context.lineWidth = 0.1;
    function circles(i, j, rad) {
      if (rad > 0.2) {
        context.beginPath();
        context.arc(i, j, rad - 0.2, 0, Math.PI * 2, true);
        context.stroke();
        circles(i, j, rad - 0.2);
      }
    }
    let size = 2;
    for (let i = size; i < width - size; i += size) {
      for (let j = size; j < height - size; j += size) {
        context.beginPath();
        if (Math.random() > 0.5) {
          context.arc(i, j, 1, 0, Math.PI * 2, true);
          context.stroke();
        } else {
          let rad = 1.2;
          circles(i, j, rad);
        }
      }
    }
  };
};
canvasSketch(sketch, settings);
