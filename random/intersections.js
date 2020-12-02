const canvasSketch = require('canvas-sketch');
const settings = {
  dimensions: 'a4',
  pixelsPerInch: 300,
  units: 'cm'
};
const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 1 / 4;
    context.fillStyle = 'hsl(0, 0%, 98%)';
    context.fillRect(0, 0, width, height);
    function random() {
      var arr = [
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height)
      ];
      return arr;
    }
    context.lineWidth = 0.1;
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j <= 10; j++) {
        let random1 = random()[0];
        let random2 = random()[1];
        context.beginPath();
        context.moveTo(random1, random2);
        context.lineTo(random1 - 1, random2 + 1);
        context.stroke();
      }
    }
  };
};
canvasSketch(sketch, settings);
