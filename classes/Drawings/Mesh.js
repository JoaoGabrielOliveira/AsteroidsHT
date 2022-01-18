class Mesh {
    isFill;
    isStroked;
    points = [];
    angle;

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context){
        context.beginPath();
        context.rotate(this.angle);
        
        this.drawObject(context);

        if(this.isFill)
            context.fill();
        if(this.isStroked)
            context.stroke();
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    drawObject(context){
        context.moveTo(this.points[0].x, this.points[0].y);

        for(let i = 1; i < this.points.length; i++)
            context.lineTo(this.points[i].x, this.points[i].y);
    }
}