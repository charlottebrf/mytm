document.addEventListener("DOMContentLoaded", function() {

  function colorPicker() {
    let colors = ['#6CA370', '#FF5A25', '#F8E945', '#76A9DC', '#4F315F', '#F89B77'];
    return colors[Math.floor((Math.random() * colors.length), 0)]
  }

  function randomX(width) {
    let min = Math.ceil(0);
    let max = Math.floor(width);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomY(height) {
    let min = Math.ceil(0);
    let max = Math.floor(height);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  let htmlCanvas = document.getElementById("canvas");
  htmlCanvas.setAttribute('width', document.documentElement.clientWidth.toString());
  htmlCanvas.setAttribute('height', document.documentElement.clientHeight.toString());
  let canvas = new Canvas(htmlCanvas);
  let rectangle = document.getElementById("rectangle");
  let circle = document.getElementById("circle");
  let reset = document.getElementById("reset");
  let text = document.getElementById("text");

  htmlCanvas.addEventListener("selectstart", () => canvas.selectStart(event), false);
  htmlCanvas.addEventListener("mousedown",  () => canvas.mouseDown(event), true);
  htmlCanvas.addEventListener("mousemove", () => canvas.mouseMove(event), true);
  htmlCanvas.addEventListener("mouseup", () => canvas.mouseUp(event), true);

  rectangle.onclick = function() {
    canvas.addIdea(Idea.drawRectangle(canvas.context, randomX(canvas.width), randomY(canvas.height), colorPicker(), text.value));
    text.value = "";
  };

  circle.onclick = function() {
    canvas.addIdea(Idea.drawCircle(canvas.context, randomX(canvas.width), randomY(canvas.height), colorPicker()));
  };

  reset.onclick = function() {
    canvas.reset();
  };


});
