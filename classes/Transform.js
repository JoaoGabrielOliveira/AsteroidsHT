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