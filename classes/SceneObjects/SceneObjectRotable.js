class SceneObjectRotable extends SceneObject {
    constructor(position, width, height){
        super(position, width, height);
        this.mesh = new RectangleMesh(width, height);
        this.mesh.isStroked = true;
    }

    lookAt(vector){
        var deltaY = this.transform.position.y - vector.y,
            deltaX = this.transform.position.x - vector.x;
        this.transform.angle = Math.atan2(deltaY,deltaX);
    }
}