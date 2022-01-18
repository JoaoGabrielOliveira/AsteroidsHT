class SceneObject {
    width; height;
    /** @type {Vector2D} */
    velocity;

    /** @type {Transform} */
    transform;


    /** Construct a SceneObject
     * 
     * @param {Vector2D} position 
     * @param {Number} width 
     * @param {Number} height 
     */

    constructor(position, width, height){
        this.transform = new Transform(position)
        this.transform.position = position;
        this.velocity = new Vector2D(0,0);

        this.width = width;
        this.height = height;
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        let deltaX = this.transform.position.x * Math.cos(this.getRadiansAngle()),
            deltaY = this.transform.position.y * Math.sin(this.getRadiansAngle());
        
        context.setTransform(this.width,0,0,this.height,deltaX,deltaY);
        context.rotate(this.angle);
        context.fillRect(-0.5,-0.5, 1, 1);
    }

    getRadiansAngle(){
        return (Math.PI / 180) * this.angle;
    }
}