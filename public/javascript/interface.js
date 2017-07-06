document.addEventListener("DOMContentLoaded", function() {

  function colorPicker() {
    colors = ['#6CA370', '#FF5A25', '#F8E945', '#76A9DC', '#4F315F', '#F89B77'];
    return colors[Math.floor((Math.random() * colors.length), 0)]
  }

  let htmlCanvas = document.getElementById("canvas");
  let canvas = new Canvas(htmlCanvas);
  let rectangle = document.getElementById("rectangle");
  let circle = document.getElementById("circle");
  let reset = document.getElementById("reset");

  rectangle.onclick = function() {
    canvas.addIdea(Idea.drawRectangle(canvas.context, Math.floor((Math.random() * canvas.width), 1), Math.floor((Math.random() * canvas.height), 1), colorPicker()));
  }

  circle.onclick = function() {
    canvas.addIdea(Idea.drawCircle(canvas.context, Math.floor((Math.random() * canvas.width), 1), Math.floor((Math.random() * canvas.height), 1), colorPicker()));
  }

  reset.onclick = function() {
    canvas.reset()
  }
})
