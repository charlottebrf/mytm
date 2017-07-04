$(document).ready(function() {
  $('#b').click(function(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "cornflowerblue";
    ctx.fillRect(20, 20, 150, 100);
  })
})
