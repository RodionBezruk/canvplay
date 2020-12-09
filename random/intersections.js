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
      return [
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height)
      ];
    }
    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
      let x =
        ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) /
        ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      let y =
        ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) /
        ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
      if (x1 >= x2) {
        if (!(x2 <= x && x <= x1)) {
          return false;
        }
      } else {
        if (!(x1 <= x && x <= x2)) {
          return false;
        }
      }
      if (y1 >= y2) {
        if (!(y2 <= y && y <= y1)) {
          return false;
        }
      } else {
        if (!(y1 <= y && y <= y2)) {
          return false;
        }
      }
      if (x3 >= x4) {
        if (!(x4 <= x && x <= x3)) {
          return false;
        }
      } else {
        if (!(x3 <= x && x <= x4)) {
          return false;
        }
      }
      if (y3 >= y4) {
        if (!(y4 <= y && y <= y3)) {
          return false;
        }
      } else {
        if (!(y3 <= y && y <= y4)) {
          return false;
        }
      }
      context.strokeStyle = 'red';
      return context.strokeRect(x - 0.054, y - 0.054, 0.1, 0.1);
    }
    context.lineWidth = 0.1;
    let lines = [];
    for (let i = 0; i <= 100; i++) {
      let x = random()[0];
      let y = random()[1];
      context.beginPath();
      context.moveTo(x, y);
      if (i % 2 != 0) {
        context.lineTo(x - 1, y + 1);
        var x2 = x - 1;
        var y2 = y + 1;
      } else {
        context.lineTo(x + 1, y + 1);
        var x2 = x + 1;
        var y2 = y + 1;
      }
      context.strokeStyle = 'black';
      context.stroke();
      lines.push([x, y, x2, y2]);
      lines.forEach(l => intersect(x, y, x2, y2, l[0], l[1], l[2], l[3]));
    }
  };
};
canvasSketch(sketch, settings);
