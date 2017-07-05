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
    this.dragging = false;
    this.selection = null;
    this.selectionColor = "#FF5A25";
    this.selectionWidth = 2;
    this.interval = 30;
    this.dragoffx = 0;
    this.dragoffy = 0;

    let myState = this;
    setInterval(function () {
      myState.draw();
    }, myState.interval);
  }

  selectStart(event) {
    event.preventDefault();
    return false;
  }

  mouseDown(event) {
    let mouse = myState.getMouse(event);
    let mx = mouse.x;
    let my = mouse.y;
    let ideas = myState.ideas;
    for (let idea of ideas) {
      if (idea.contains(mx, my)) {
        let mySel = idea;
        myState.dragoffx = mx = mySel.x;
        myState.dragoffy = my = mySel.y;
        myState.dragging = true;
        myState.selection = mySel;
        myState.valid = false;
        return;
      }
    }
    if (myState.selection) {
        myState.selection = null;
        myState.valid = false;
    }
  }

  mouseMove(event) {
    if (myState.dragging) {
      let mouse = myState.getMouse(event);
      myState.selection.x = mouse.x - myState.dragoffx;
      myState.selection.y = mouse.y - myState.dragoffy;
      myState.valid = false;
    }
  }

  mouseUp() {
    myState.dragging = false;
  }

  doubleClick(event) {
    let mouse = myState.getMouse(event);
    myState.addIdea(new Idea(mouse.x - 10, mouse.y - 10, 100, 40, colorPicker()));
  }

  addIdea(idea) {
    this.ideas.push(idea);
    this.valid = false;
  }

  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    if (!this.valid) {
      let context = this.context;
      let ideas = this.ideas;
      this.clear();
    }

    for(let idea of ideas) {
      if (idea.x > this.width || idea.y > this.height || idea.x + idea.y < 0 || idea.y + idea.h < 0) continue;
      idea.draw(context);
    }

    if (this.selection !== null) {
      context.strokeStyle = this.selectionColor;
      context.lineWidth = this.selectionWidth;
      let mySel = this.selection;
      context.strokeRect(mySel.x, mySel.y, mySel.w, mySel.h);
    }
    this.valid = true;
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

  reset() {
    this.ideas = [];
    this.clear();
  }
}
