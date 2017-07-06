class Idea {

  constructor(x, y, color, text) {
  this.x = x || 10;
  this.y = y || 10;
  this.color = color || "#76A9DC";

  // Rectangle
  this.w = 200;
  this.h = 95;

  // Cirlce
  this.radius = 70;
  this.startAngle = 0;
  this.endAngle = 2 * Math.PI;

  //text box
  this.text = text;
  this.font = '12px Arial';
  this.fontColor = 'black';

  }
}

Idea.drawRectangle = function(context, x, y, color, text) {
  idea = new Idea(x, y, color, text);
  context.fillStyle = idea.color;
  context.fillRect(idea.x, idea.y, idea.w, idea.h);
  context.textBaseline = 'middle';
  context.font = idea.font;
  context.fillStyle = idea.fontColor;
  console.log('Amazing colour!')
  console.log(idea.fontColor);
  textX = x + idea.w/2 - context.measureText(idea.text).width/2;
  textY = y + idea.h/2;
  context.fillText(idea.text, textX, textY);
  return idea;
}

Idea.drawCircle = function(context, x, y, color) {
    let idea = new Idea(x, y, color);
    context.beginPath();
    context.arc(idea.x, idea.y, idea.radius, idea.startAngle, idea.endAngle);
    context.fillStyle = idea.color;
    context.fill();
    return idea;
};
