class Drawer {
    static context;

    /** @param {Vector2D} start @param {Vector2D} end */
    static drawLine(start, end){
        Drawer.context.setTransform(1,0,0,1,start.x,start.y);
        Drawer.context.moveTo(0, 0);
        Drawer.context.setTransform(1,0,0,1,end.x,end.y);
        Drawer.context.lineTo(0,0);
        Drawer.context.stroke();
    }
}