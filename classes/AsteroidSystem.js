class AsteroidSystem {
    /** @type {Array<SceneObjectAsteroid>} */
    static asteroids = [];

    static makeAsteroids(number, minSize, maxSize){
        for(let i = 0; i < number; i++){
            AsteroidSystem.asteroids.push(AsteroidSystem.makeAsteroid(minSize, maxSize));
        }
    }

    static makeAsteroid(minSize, maxSize){
        let canvasWidth    = mathRandom(0, Drawer.canvas.width),
            canvasHeight   = mathRandom(0, Drawer.canvas.width),
            asteroidWidth  = mathRandom(minSize.x, maxSize.x),
            asteroidHeight = mathRandom(minSize.y, maxSize.y);

        return new SceneObjectAsteroid(new Vector2D(canvasWidth,canvasHeight), asteroidWidth, asteroidHeight);;
    }
}
