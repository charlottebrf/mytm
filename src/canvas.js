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
    this.shapes = [];
    this.dragging = false;
    this.selection = null;
    this.dragoffx = 0;
    this.dragoffy = 0;

    let myState = this;
  }

  selectStart(event) {
    event.preventDefault();
    return false;
  }

  mouseDown(event) {
    let mouse = myState.getMouse(event);
    let mx = mouse.x;
    let my = mouse.y;
    let shapes = myState.shapes;
    for (let shape of shapes) {
      if (shape.contains(mx, my)) {
        let mySel = shape;
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

  
}
