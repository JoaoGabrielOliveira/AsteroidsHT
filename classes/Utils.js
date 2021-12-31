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

    static distanceBetween(vector1, vector2){
        //let x = Math.pow(vector1.x - vector2.x);
        let x = (vector1.x - vector2.x) * (vector1.x - vector2.x);
        let y = (vector1.x - vector2.x) * (vector1.x - vector2.x);
        let xy = x + y;
        //return Math.sqrt(  + Math.pow(vector1.y - vector2.y));
        return Math.sqrt(xy);
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