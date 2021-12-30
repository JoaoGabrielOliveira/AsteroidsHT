class Vector2D {
    x; y;

    add(vector){
        this.x += vector.y;
        this.x += vector.y;
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