const canvas = /** @type {HTMLCanvasElement} */ document.getElementById("glCanvas");
const ctx = /** @type { CanvasRenderingContext2D } */ canvas.getContext("2d");


class SceneObject {
    x; y; width; height;
    

    constructor(xPosition,yPosition, width, height){
        this.x = xPosition;
        this.y = yPosition;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.fillRect(this.x,this.y,this.width, this.height);   
    }
}

let obj = new SceneObject(0,0, 50, 50);
let directionToRight = true;
let directionToDown = true;

function main(){
    let widthCanvas = document.getElementById('widthCanvas');
    let heightCanvas = document.getElementById('heightCanvas');
    let deltaTime = document.getElementById('deltaTime');
    let objX = document.getElementById('objX');
    let objY = document.getElementById('objY');
    
    widthCanvas.textContent = "Largura: " + canvas.clientWidth;
    heightCanvas.textContent = "Altura:" + canvas.clientHeight;
    deltaTime.textContent = "DeltaTime:" + DeltaTime.getDeltaTime();
    objX.textContent = "Posição X de objeto:" + obj.x;
    objY.textContent = "Posição Y de objeto:" + obj.y;
}

function update(){
    let acelerationForce = 25;
    let delta = DeltaTime.getDeltaTime();
    if(directionToRight)
        obj.x = obj.x + acelerationForce * delta;
    else
        obj.x = obj.x - acelerationForce * delta;


    if(directionToDown)
        obj.y = obj.y + (acelerationForce - 15) * delta;
    else
        obj.y = obj.y - (acelerationForce - 15) * delta;

    changeDiretion();

    main();
}

function changeDiretion(){
    if(obj.x < 0)
        directionToRight = true;

    else if(obj.x > (canvas.clientWidth - obj.width))
        directionToRight = false;

    if(obj.y < 0)
        directionToDown = true;
    else if(obj.y > (canvas.clientHeight - obj.height))
        directionToDown = false;
}

function render(){
    obj.draw(ctx);
}

function clear(){
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    ctx.restore();
}

function gameLoop(){
    update();
    clear();
    render();

    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

class Context extends CanvasRenderingContext2D {

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