function getElements(name) {
  return document.getElementsByClassName(name);
}
function getElement(name) {
  return document.getElementById(name);
}
function setX(obj, value) {
  let w = obj.getBoundingClientRect().width;// 使版面置中
  obj.style.left = -w * 0.5 + value + "px";
}
function setY(obj, value) {
  let h = obj.getBoundingClientRect().height;// 使版面置中
  obj.style.up = -h * 0.5 + value + "px";
}
