class RectangleMesh extends Mesh {
    width;
    height;

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;

        this.path2D = new Path2D();
        this.path2D.moveTo(-0.5 * this.width, -0.5 * this.height);
        this.path2D.lineTo(0.5  * this.width, -0.5 * this.height);
        this.path2D.lineTo(0.5  * this.width,  0.5 * this.height);
        this.path2D.lineTo(-0.5 * this.width,  0.5 * this.height);
        this.path2D.closePath();
    }
}