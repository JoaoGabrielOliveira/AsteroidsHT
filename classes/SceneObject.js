class SceneObject {
    width; height;
    position;

    constructor(position, width, height){
        this.position = position;

        //this.x = xPosition;
        //this.y = yPosition;

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

class DeltaTime {
    static lastUpdate = new Date().getTime();
    static FPS = 60;

    static getDeltaTime(){
        var t = new Date().getTime();
        var delta = t - DeltaTime.lastUpdate;
        DeltaTime.lastUpdate = new Date().getTime();
        return delta / DeltaTime.FPS;
    }
}