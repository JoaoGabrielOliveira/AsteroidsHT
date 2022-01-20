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
        this.transform = new Transform(position, 0)
        this.transform.position = position;
        this.velocity = new Vector2D(0,0);

        this.width = width;
        this.height = height;

        Drawer.sceneObjectPipeline.push(this);
    }

    draw() {
        Drawer.drawMesh(this.mesh, this.transform);
    }
}