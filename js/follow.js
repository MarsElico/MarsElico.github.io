let x, y;
let panel = getElement("panel");
document.onmousemove = function (e) {
  x = e.pageX;
  y = e.pageY;
  setX(panel, x);
  setY(panel, y);
};
