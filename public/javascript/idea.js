class Idea {

  constructor(x, y, color) {
  this.x = x || 10;
  this.y = y || 10;
  this.color = color || "#76A9DC";

  // Rectangle
  this.w = 10;
  this.h = 10;

  // Cirlce
  this.radius = 10;
  this.startAngle = 0;
  this.endAngle = 2 * Math.PI
  }
}

Idea.drawRectangle = function(context, x, y, color) {
  idea = new Idea(x, y, color);
  context.fillStyle = idea.color;
  context.fillRect(idea.x, idea.y, idea.w, idea.h);
}

Idea.drawCircle = function(context, x, y, color) {
  idea = new Idea(x, y, color);
  context.beginPath();
  context.arc(idea.x, idea.y, idea.radius, idea.startAngle, idea.endAngle);
  context.fillStyle = idea.color;
  context.fill();
}
