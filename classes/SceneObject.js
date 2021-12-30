class SceneObject {
    width; height;
    position; angle = 0;

    constructor(position, width, height){
        this.position = position;

        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.setTransform(this.width,0,0,this.height,this.position.x,this.position.y);
        context.rotate(this.angle);
        context.fillRect(-0.5,-0.5, 1, 1);
    }

    setPosition(x, y){
        if(x)
            this.position.x = x;
        if(y)
            this.position.y = y;
    }
}