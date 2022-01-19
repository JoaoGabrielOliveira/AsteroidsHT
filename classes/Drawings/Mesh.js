class Mesh {
    /** @type {boolean} */
    isFill;
    /** @type {boolean} */
    isStroked;
    /** @type {Path2D} */
    path2D;
    angle;

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(){
        Drawer.context.beginPath();
        Drawer.context.rotate(this.angle);
        
        this.drawObject();

        Drawer.context.closePath();

        if(this.isFill)
            Drawer.context.fill();
        if(this.isStroked)
            Drawer.context.stroke();
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    drawObject(){
        Drawer.context.moveTo(this.points[0].x, this.points[0].y);

        for(let i = 1; i < this.points.length; i++)
            Drawer.context.lineTo(this.points[i].x, this.points[i].y);

    }
}