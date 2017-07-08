class Line {

    constructor(drawFromX, drawFromY, drawToX, drawToY) {
        this.drawFromX = drawFromX;
        this.drawFromY = drawFromY;
        this.drawToX = drawToX;
        this.drawToY = drawToY;
        console.log(this);
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.drawFromX, this.drawFromY);
        context.lineTo(this.drawToX, this.drawToY);
        context.strokeStyle = "black";
        context.stroke()
    }

}