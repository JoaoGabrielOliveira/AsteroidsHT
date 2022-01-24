class SceneObjectAsteroid extends SceneObject {
    /**
     * @type {Vector2D}
     */
    diretion;


    /** Construct a SceneObject
     * 
     * @param {Vector2D} position 
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(position, width, height){
        super(position, width, height);
        this.mesh = new AsteroidMesh(width, height);
        this.mesh.isStroked = true;

        this.diretion = new Vector2D(1,1);
    }

    moveToDiretion(){
        this.transform.position.add(this.diretion);
    }    
}