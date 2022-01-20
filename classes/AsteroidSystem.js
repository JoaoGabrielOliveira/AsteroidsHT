class AsteroidSystem {
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

        let asteroid = new SceneObject(new Vector2D(canvasWidth,canvasHeight), asteroidWidth, asteroidHeight);

        asteroid.mesh = new AsteroidMesh(asteroid.width, asteroid.height);
        asteroid.mesh.isStroked = true;

        return asteroid;
    }
}
