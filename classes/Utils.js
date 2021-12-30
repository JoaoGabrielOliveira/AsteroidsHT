/** Bidimensional vector */
class Vector2D {
    x; y;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    add(vector){
        if(vector.x && vector.y){
            this.x += vector.x;
            this.x += vector.y;
        }
        else{
            this.x += vector;
            this.y += vector;
        }
        return this;
    }

    div(vector){
        if(vector.x && vector.y){
            this.x /= vector.x;
            this.x /= vector.y;
        }
        else{
            this.x /= vector;
            this.y /= vector;
        }
        return this;
    }

    /** Get length between points X and Y*/
    magnitude(){
        return Math.sqrt( Math.pow(this.x) + Math.pow(this.y));
    }

    /** Normalize length to 1 */
    normalize(){
        let length = this.magnitude();
        return length > 0 ? this.div(m) : 0;
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