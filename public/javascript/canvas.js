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
