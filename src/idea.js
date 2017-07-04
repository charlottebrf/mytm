// 'use strict';

function Idea(text) {
  return {
    text: text,
    location: {x: 20, y: 20},
    size: { width: 150, height: 100},
    color: "cornflowerblue"

    move: function(x,y) {
      this.location.x += x;
      this.location.y += y;
    }

    resize: function(factor) {
      this.size.width = this.size.width * factor;
      this.size.height = this.size.height * factor;
    }

    important: function() {
      this.color = "devil-red";
    }
}

var great = Idea("Make America Great Again");
great.important();
great.move(50, 10);
great.resize(3);
