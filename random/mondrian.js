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
    context.translate(0.0, 0.0);
    context.strokeStyle = 'black';
    context.lineWidth = 0.4;
    function randomWidth(i) {
      if (i > width / 2) {
        return random.range(0.6, 0.9);
      } else {
        return random.range(0.2, 0.4);
      }
    }
    let sizeW = 0;
    let sizeH = 0;
    for (let j = 0; j < height; j += sizeH) {
      sizeH = Math.floor(height * random.range(0.1, 0.3));
      for (let i = 0; i < width; i += sizeW) {
        sizeW = Math.floor(width * randomWidth(i));
        if (i + sizeW < width && j + sizeH < height) {
          if (Math.random() < 0.2) {
            context.fillStyle = `${random.pick(['red', 'blue', 'yellow'])}`;
            context.fillRect(i, j, sizeW, sizeH);
          }
          context.strokeRect(i, j, sizeW, sizeH);
        } else {
          context.strokeRect(i, j, width - i, height - j);
        }
      }
    }
  };
};
canvasSketch(sketch, settings);
