class SceneObject {
    width; height;
    /** @type {Vector2D} */
    velocity;

    /** @type {Transform} */
    transform;

    /** @type {Mesh} */
    mesh;


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

        Drawer.sceneObjectPipeline.push(this);
    }

    draw() {
        Drawer.context.setTransform(1,0,0,1,this.transform.position.x,this.transform.position.y);
        Drawer.drawMesh(this.mesh);
    }

    getRadiansAngle(){
        return (Math.PI / 180) * this.angle;
    }
}