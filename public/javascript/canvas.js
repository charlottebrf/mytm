class Canvas {

  constructor(htmlCanvas) {
    this.canvas = htmlCanvas;
    this.width = htmlCanvas.width;
    this.height = htmlCanvas.height;
    this.context = htmlCanvas.getContext("2d");

    let stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(htmlCanvas, null)['paddingLeft'], 10) || 0;
      this.stylePaddingTop = parseInt(document.defaultView.getComputedStyle(htmlCanvas, null)['paddingTop'], 10) || 0;
      this.styleBorderLeft = parseInt(document.defaultView.getComputedStyle(htmlCanvas, null)['borderLeftWidth'], 10) || 0;
      this.styleBorderTop = parseInt(document.defaultView.getComputedStyle(htmlCanvas, null)['borderTopWidth'], 10) || 0;
    }
    let html = document.body.parentNode;

    this.htmlTop = html.offsetTop;
    this.htmlLeft = html.offsetLeft;
    this.valid = false;
    this.ideas = [];
    this.lines = [];
    this.dragging = false;
    this.drawing = false;
    this.selection = null;
    this.selectionColor = "transparent";
    this.selectionWidth = 2;
    this.dragoffx = 0;
    this.dragoffy = 0;
    this.interval = 30;
    this.clicks = 0;
    this.lastClick = [0, 0];
    this.drawingStartCoords = [];

    let myState = this;
    setInterval(function() { myState.draw(); }, this.interval);
   }

   getMouse(event) {
     let element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
     if (element.offsetParent !== undefined) {
       do {
         offsetX += element.offsetLeft;
         offsetY += element.offsetTop;
       } while ((element = element.offsetParent));
     }
     offsetX += this.styleBorderLeft + this.styleBorderLeft + this.htmlLeft;
     offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;
     mx = event.pageX - offsetX;
     my = event.pageY - offsetY;
     return {x: mx, y: my};
   }

   selectStart(event) {
     event.preventDefault();
     return false;
   }

   mouseDown(event) {
     let mouse = this.getMouse(event);
     let mx = mouse.x;
     let my = mouse.y;
     let ideas = this.ideas;
     for (let idea of ideas) {
       if (idea.contains(mx, my)) {
         let mySel = idea;
         this.dragoffx = mx - mySel.x;
         this.dragoffy = my - mySel.y;
         this.dragging = true;
         this.selection = mySel;
         this.valid = false;
         return;
       }
     }
     if (this.selection) {
       this.selection = null;
       this.valid = false;
     }
   }

   mouseMove(event) {
     if (this.dragging) {
       let mouse = this.getMouse(event);
       this.selection.x = mouse.x - this.dragoffx;
       this.selection.y = mouse.y - this.dragoffy;
       this.valid = false;
     } else if (this.drawing) {
       this.previewLine(event, this.drawingStartCoords[0], this.drawingStartCoords[1]);
     }
   }

   mouseUp() {
     this.dragging = false;
   }

   getCursorPosition(event) {
     let x;
     let y;

     if (event.pageX !== undefined && event.pageY !== undefined) {
       x = event.pageX;
       y = event.pageY;
     } else {
       x = event.clientX + document.body.scrolLeft + document.documentElement.scrolLeft;
       y = event.clientY + document.body.scrolTop + document.documentElement.scrolTop;
     }
     return [x, y];
   }

    previewLine(event, startX, startY) {
      this.renderAll();
      this.context.beginPath();
      this.context.moveTo(startX, startY);
      this.context.strokeStyle = "black";
      this.context.lineTo(this.getCursorPosition(event)[0] - this.canvas.offsetLeft, this.getCursorPosition(event)[1] - this.canvas.offsetTop);
      this.context.stroke();
    }

   doubleClick(event) {
     let x = this.getCursorPosition(event)[0] - this.canvas.offsetLeft;
     let y = this.getCursorPosition(event)[1] - this.canvas.offsetTop;

     if (this.clicks !== 1) {
       this.canvas.style.cursor = 'crosshair';
       this.clicks ++;
       this.drawingStartCoords = [x, y];
       this.drawing = true;
     } else {
       this.canvas.style.cursor = 'default';
       this.context.beginPath();
       this.context.moveTo(this.lastClick[0], this.lastClick[1]);
       this.context.lineTo(x, y);
       this.context.strokeStyle = "black";
       this.context.stroke();
       this.clicks = 0;
       this.lines.push(new Line(this.lastClick[0], this.lastClick[1], x, y));
       this.drawing = false;
       this.drawingStartCoords = [];
       this.renderAll();
     }

     this.lastClick = [x, y];
   }

  renderAll() {
      this.clear();
      if (this.ideas.length > 0) {
          for (let idea of this.ideas) {
              if (idea.x > this.width || idea.y > this.height || idea.x + idea.y < 0 || idea.y + idea.h < 0) continue;
              idea.draw(this.context);
              this.renderLines();
          }
      } else {
          this.renderLines();
      }
  }

  renderLines() {
      for(let line of this.lines) {
          line.draw(this.context);
      }
  }

  clearLines() {
    this.clear();
    this.lines = [];
    this.renderAll()
  }

  draw() {
    if (!this.valid) {
      this.clear();
      this.renderAll();

      if (this.selection !== null) {
        this.context.strokeStyle = this.selectionColor;
        this.context.lineWidth = this.selectionWidth;
        let mySel = this.selection;
        this.context.strokeRect(mySel.x, mySel.y, mySel.w, mySel.h);
      }
    this.valid = true;
  }
}

  addIdea(idea) {
    this.ideas.push(idea);
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  reset() {
    this.ideas = [];
    this.clear();
  }
}
