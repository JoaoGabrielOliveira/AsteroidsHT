class RectangleMesh extends Mesh {
    width;
    height;

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;

        this.points = [
            new Vector2D(-0.5 * this.width, -0.5 * this.height),
            new Vector2D(0.5 * this.width, -0.5 * this.height),
            new Vector2D(0.5 * this.width, 0.5 * this.height),
            new Vector2D(-0.5 * this.width,0.5 * this.height)
        ]
    }
}