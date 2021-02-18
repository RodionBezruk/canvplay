const canvasSketch = require('canvas-sketch');
const settings = {
  dimensions: [30, 30],
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    context.translate(1.0, -0.5);
    context.lineWidth = 0.3;
    context.strokeStyle = 'black';
    let offset = 2;
    for (j = offset; j < height / 2; j += offset) {
      context.beginPath();
      context.moveTo(j - 1.5, 0 + offset);
      context.quadraticCurveTo(j - 1 - 1.5, height / 8, j - 1.5, height / 4);
      context.quadraticCurveTo(
        j + 1 - 1.5,
        (3 * height) / 8,
        j - 1.5,
        height / 2
      );
      context.stroke();
      context.beginPath();
      context.moveTo(width / 2, j);
      context.quadraticCurveTo((5 * width) / 8, j + 1, (3 * width) / 4, j);
      context.quadraticCurveTo((7 * width) / 8, j - 1, width - offset, j);
      context.stroke();
      context.beginPath();
      context.moveTo(0, height / 2 + j);
      context.quadraticCurveTo(
        width / 8,
        height / 2 + j - 1,
        width / 4,
        height / 2 + j
      );
      context.quadraticCurveTo(
        (3 * width) / 8,
        height / 2 + j + 1,
        width / 2 - offset,
        height / 2 + j
      );
      context.stroke();
      context.beginPath();
      context.moveTo(width / 2, height / 2 + j);
      context.lineTo(width - offset, height / 2 + j);
      context.stroke();
    }
  };
};
canvasSketch(sketch, settings);
