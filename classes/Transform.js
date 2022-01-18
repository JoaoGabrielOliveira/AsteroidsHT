class Transform {
    /** @type {Vector2D} */
    position;
    /** @type {Number} */
    angle;

    /** @param {Vector2D} position */
    constructor(position){
        this.position = position;
    }

    /** @param {Number} angle */
    rotate(angle){
        this.angle = angle;
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