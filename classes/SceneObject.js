class SceneObject {
    width; height;
    position;

    constructor(position, width, height){
        this.position = position;

        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.fillRect(this.position.x,this.position.y,this.width, this.height);   
    }

    setPosition(x, y){
        this.position.x = x;
        this.position.y = y;
    }
}