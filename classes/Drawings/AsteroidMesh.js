class AsteroidMesh extends Mesh {
    width;
    height;

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;

        this.path2D = new Path2D();
        this.path2D.moveTo(-0.4, -0.4);
        this.path2D.lineTo(0, -0.2);
        this.path2D.lineTo(0.4, -0.3);

        this.path2D.lineTo(0.4,  0);
        this.path2D.lineTo(0.3, 0.3);
        this.path2D.lineTo(0.1, 0.4);

        this.path2D.lineTo(0,  0.4);
        this.path2D.lineTo(-0.4,  0);
        this.path2D.lineTo(-0.5,-0.2);
        this.path2D.closePath();
    }
}