class SceneObjectRotable extends SceneObject {

    /** @type {Mesh} */
    mesh;

    constructor(position, width, height){
        super(position, width, height);
        this.mesh = new RectangleMesh(width, height);
    }

    draw(context) {
        context.setTransform(1,0,0,1,this.transform.position.x,this.transform.position.y);
        this.mesh.draw(context);
        context.fill();
    }

    lookAt(vector){
        var deltaY = this.transform.position.y - vector.y,
            deltaX = this.transform.position.x - vector.x;
        this.angle = Math.atan2(deltaY,deltaX);
    }
}