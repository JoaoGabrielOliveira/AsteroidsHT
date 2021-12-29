class SceneObject {
    x; y; width; height;
    

    constructor(xPosition,yPosition, width, height){
        this.x = xPosition;
        this.y = yPosition;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.fillRect(this.x,this.y,this.width, this.height);   
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