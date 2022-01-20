/** Bidimensional vector */
class Vector2D {
    x; y;

    /** Bidimensional vector
     * 
     * @param {Number} x 
     * @param {Number} y 
     */
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    /**Does division operations
     * 
     * @param {Vector2D | Number} vector 
     * @returns {Number}
     */
     div(vector){
        if(vector instanceof Vector2D){
            let sub = Vector2D.div(this, vector);
            this.x = sub.x;
            this.y = sub.y;
        }
        else{
            this.x /= vector;
            this.y /= vector;
        }
        return this;
    }

    /**Does division operations
     * 
     * @param {Vector2D} vector1 
     * @param {Vector2D} vector2 
     * @returns 
     */
    static div(vector1, vector2){
        return new Vector2D(vector1.x / vector2.x, vector1.y / vector2.y);
    }

    /**Does multiplication operations
     * 
     * @param {Vector2D | Number} vector 
     * @returns {Number}
     */
     mult(vector){
        if(vector instanceof Vector2D){
            let sub = Vector2D.mult(this, vector);
            this.x = sub.x;
            this.y = sub.y;
        }
        else{
            this.x *= vector;
            this.y *= vector;
        }
        return this;
    }

    /**Does multiplication operations
     * 
     * @param {Vector2D} vector1 
     * @param {Vector2D} vector2 
     * @returns 
     */
    static mult(vector1, vector2){
        return new Vector2D(vector1.x * vector2.x, vector1.y * vector2.y);
    }

    /**Does addition operations
     * 
     * @param {Vector2D | Number} vector 
     * @returns {Number}
     */
     add(vector){
        if(vector instanceof Vector2D){
            let sub = Vector2D.add(this, vector);
            this.x = sub.x;
            this.y = sub.y;
        }
        else{
            this.x += vector;
            this.y += vector;
        }
        return this;
    }

    /**Does addition operations
     * 
     * @param {Vector2D} vector1 
     * @param {Vector2D} vector2 
     * @returns 
     */
    static add(vector1, vector2){
        return new Vector2D(vector1.x + vector2.x, vector1.y + vector2.y);
    }

    /**Does subtraction operations
     * 
     * @param {Vector2D | Number} vector 
     * @returns {Number}
     */
    sub(vector){
        if(vector instanceof Vector2D){
            let sub = Vector2D.sub(this, vector);
            this.x = sub.x;
            this.y = sub.y;
        }
        else{
            this.x -= vector;
            this.y -= vector;
        }
        return this;
    }

    /**Does subtraction operations
     * 
     * @param {Vector2D} vector1 
     * @param {Vector2D} vector2 
     * @returns 
     */
    static sub(vector1, vector2){
        return new Vector2D(vector1.x - vector2.x, vector1.y - vector2.y);
    }

    /** Get length between points X and Y*/
    magnitude(){
        return Math.sqrt( Math.pow(this.x) + Math.pow(this.y));
    }

    /** Normalize length to 1 */
    normalize(){
        let length = this.magnitude();
        return length > 0 ? this.div(length) : 0;
    }

    limit(value){
        let length = this.magnitude();
        while(length > value){
            this.x -= 0.1;
            this.y -= 0.1;
            length = this.magnitude();
        }
        return this;
    }

    static distanceBetween(vector1, vector2){
        //let x = Math.pow(vector1.x - vector2.x);
        let x = (vector1.x - vector2.x) * (vector1.x - vector2.x);
        let y = (vector1.y - vector2.y) * (vector1.y - vector2.y);
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

class Transform {
    /** @type {Vector2D} */
    position;
    /** @type {Number} */
    angle;

    /**
     * 
     * @param  {Vector2D} position Position of transform 
     * @param  {Vector2D} angle By default start equal zero
     */
    constructor(position, angle = 0){
        this.position = position;
        this.angle = (Math.PI / 180) * angle;
    }

    /** @param {Number} angle */
    rotate(angle){
        this.angle += (Math.PI / 180) * angle;
    }

    /** @param {Vector2D} vector*/
    setPosition(vector){
        this.setPosition(vector.x, vector.y);
    }

    /** @param {Number} x @param {Number} y */
    setPosition(x,y){
        this.position.x = x;
        this.position.y = x;
    }
}

function mathRandom(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
}