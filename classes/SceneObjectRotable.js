class SceneObjectRotable extends SceneObject {

    /** @type {Mesh} */
    mesh;

    constructor(position, width, height){
        super(position, width, height);
        this.mesh = new RectangleMesh(width, height);
    }

    draw(context) {
        context.setTransform(1,0,0,1,this.position.x,this.position.y);
        this.mesh.draw(context);
        context.fill();
    }

    lookAt(vector){
        var deltaY = this.position.y - vector.y, deltaX = this.position.x - vector.x;
        this.angle = Math.atan2(deltaY,deltaX);
    }
}