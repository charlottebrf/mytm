$(document).ready(function() {
  let canvas = document.getElementById('canvas')
  let jsCanvas = new Canvas(canvas)
  canvas.addEventListener("selectstart", jsCanvas.selectStart(), false);
  canvas.addEventListener("mousedown", jsCanvas.mouseDown(), true);
  canvas.addEventListener("mousemove", jsCanvas.mouseMove(), true);
  canvas.addEventListener("mouseup", jsCanvas.mouseUp(), true);
  canvas.addEventListener("dblclick", jsCanvas.doubleClick(), true);
  $('#reset'.click(c.reset()))
})
