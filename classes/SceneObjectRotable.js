class SceneObjectRotable extends SceneObject {
<<<<<<< HEAD

    constructor(position, width, height){ super(position, width, height) }

    draw(context) {
=======
    direction;

    constructor(position, width, height){
        super(position, width, height);

        this.direction = position;
        this.direction.normalize();
    }

    draw(context) {
        this.direction.normalize();
        this.angle = Math.atan2(this.position.y - this.direction.y, this.position.x - this.direction.x);


>>>>>>> main
        context.setTransform(1,0,0,1,this.position.x,this.position.y);
        context.rotate(this.angle);
        context.beginPath();
        context.moveTo(-0.5 * this.width, -0.5 * this.height);
        context.lineTo(0.5 * this.width, -0.5 * this.height);
        context.lineTo(0.5 * this.width, 0.5 * this.height);
        context.lineTo(-0.5 * this.width,0.5 * this.height);
        context.fill();
    }
<<<<<<< HEAD

    lookAt(vector){
        this.angle = Math.atan2(this.position.y - vector.y, this.position.x - vector.x);
    }
=======
>>>>>>> main
}