$(document).ready(function() {
  $('#b').click(function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "cornflowerblue";
    ctx.fillRect(20, 20, 150, 100);
  })
})


// $(mybutton).onClick(function() {
//   all_nodes << Idea(...);
// })
//
// var all_nodes = [great, other, more thing];
//
// all_nodes.forEach(function(element) {
//   my_super_canvas_drawing_thing(element);
// })
