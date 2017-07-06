document.addEventListener("DOMContentLoaded", function() {

  function colorPicker() {
    let colors = ['#6CA370', '#FF5A25', '#F8E945', '#76A9DC', '#4F315F', '#F89B77'];
    return colors[Math.floor((Math.random() * colors.length), 0)]
  }


  let htmlCanvas = document.getElementById("canvas");
  let canvas = new Canvas(htmlCanvas);
  let rectangle = document.getElementById("rectangle");
  let circle = document.getElementById("circle");
  let reset = document.getElementById("reset");
  // let input = document.createElement('input');
  // let font = '14px sans-serif'
  // let hasInput = false

  // canvas.onclick = function(e) {
  //   if (hasInput) return;
  //   addInput(e.clientX, e.clientY);
  // }
  //
  // canvas.onclick = function() {
  //   canvas.addText()
  // }

  rectangle.onclick = function() {
    canvas.addIdea(Idea.drawRectangle(canvas.context, Math.floor((Math.random() * canvas.width), 1), Math.floor((Math.random() * canvas.height), 1), colorPicker(), "Hello!"));
  };

  circle.onclick = function() {
    canvas.addIdea(Idea.drawCircle(canvas.context, Math.floor((Math.random() * canvas.width), 1), Math.floor((Math.random() * canvas.height), 1), colorPicker()));
  };

  reset.onclick = function() {
    canvas.reset()
  };


});
