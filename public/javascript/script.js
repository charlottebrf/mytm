$(document).ready(function() {
  $('#b').click(function(){
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    ctx.fillStyle = "cornflowerblue";
    ctx.fillRect(20, 20, 150, 100);
  })
});
