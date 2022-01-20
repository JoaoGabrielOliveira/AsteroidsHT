class Drawer {
    /** @type {CanvasRenderingContext2D} */
    static context;
    /** @type {HTMLCanvasElement} */
    static canvas;

    /** @type {Array<SceneObject>} */
    static sceneObjectPipeline = [];

    /** @param {Vector2D} start @param {Vector2D} end */
    static drawLine(start, end){
        Drawer.context.setTransform(1,0,0,1,start.x,start.y);
        Drawer.context.moveTo(0, 0);
        Drawer.context.setTransform(1,0,0,1,end.x,end.y);
        Drawer.context.lineTo(0,0);
        Drawer.context.stroke();
    }

    static renderPipeline() {    
        this.sceneObjectPipeline.forEach(so => so.draw() );
    }
    
    /**
     * 
     * @param {Path2D} region;
     */
    static fillPath2D(region){
        Drawer.context.fill(region);
    }

    static strokePath2D(region){
        Drawer.context.stroke(region);
    }

    /**
     * 
     * @param {Mesh} mesh @param {Transform} transform
     */
     static drawMesh(mesh, transform){
        Drawer.context.setTransform(1,0,0,1,transform.position.x, transform.position.y);
        Drawer.context.rotate(transform.angle);

         if(mesh.isFill)
            Drawer.fillPath2D(mesh.path2D);
        if(mesh.isStroked)
            Drawer.strokePath2D(mesh.path2D)
    }

    static clearCanvas(){
        Drawer.context.save();
        Drawer.context.setTransform(1, 0, 0, 1, 0, 0);
        Drawer.context.clearRect(0, 0, Drawer.canvas.clientWidth, Drawer.canvas.clientHeight);
        Drawer.context.restore();
    }
}