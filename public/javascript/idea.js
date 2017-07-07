class Idea {

  constructor(x, y, color, shape, text) {
    this.shape = shape;
    this.x = x || 10;
    this.y = y || 10;
    this.color = color || "#76A9DC";
    this.shape = shape;

    // Specifications for rectangles
    this.w = 200;
    this.h = 95;

    // Specifications for circles
    this.radius = 70;
    this.startAngle = 0;
    this.endAngle = 2 * Math.PI;

    // Specifications for text
    this.text = text;
    this.font = 'bold 24px Courier';
    this.fontColor = 'white';
  }

  contains(mx, my) {
    if (this.shape === 'rectangle') {
      return(this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my);
    } else {
      let distancesquared = (this.x - mx) * (this.x - mx) + (this.y - my) * (this.y - my);
      return distancesquared <= this.radius * this.radius;
    }
  }

  draw(context) {
    if (this.shape === 'rectangle') {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.w, this.h);
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.font = this.font;
      context.fillStyle = this.fontColor;
      textX = this.x + (this.w / 2);
      textY = this.y + (this.h / 2);
      context.fillText(this.text, textX, textY);
    } else {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
      context.fillStyle = this.color;
      context.fill();
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.font = this.font;
      context.fillStyle = this.fontColor;
      context.fillText(this.text, this.x, this.y);
    }
  }
};

Idea.create = function(context, x, y, color, shape, text) {
    let idea = new Idea(x, y, color, shape, text);
    if (idea.shape === 'rectangle') {
      context.fillStyle = idea.color;
      context.fillRect(idea.x, idea.y, idea.w, idea.h);
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.font = idea.font;
      context.fillStyle = idea.fontColor;
      textX = idea.x + (idea.w / 2);
      textY = idea.y + (idea.h / 2);
      context.fillText(idea.text, textX, textY);
    } else {
      context.beginPath();
      context.arc(idea.x, idea.y, idea.radius, idea.startAngle, idea.endAngle);
      context.fillStyle = idea.color;
      context.fill();
      context.textBaseline = 'middle';
      context.textAlign = 'center';
      context.font = idea.font;
      context.fillStyle = idea.fontColor;
      context.fillText(idea.text, idea.x, idea.y);
    }
    return idea;
 };
