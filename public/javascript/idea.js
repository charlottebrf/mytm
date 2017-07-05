class Idea {

  constructor(x, y, w, h, fill) {
  this.x = x || 10;
  this.y = y || 10;
  this.w = w || 1;
  this.h = h || 1;
  this.fill = fill || "#76A9DC";
  }

  draw(ctx) {
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  contains(mx, my) {
    return(this.x <= mx) && (this.x + this.w >= mx) && (this.y <= my) && (this.y + this.h >= my);
  }

}
