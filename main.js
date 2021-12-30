let objT = new SceneObjectRotable(new Vector2D(320,240), 50, 50);
let obj = new SceneObject(new Vector2D(120,140), 50, 50);
let inputKeys = {
    w : false,
    s : false,
    a : false,
    d : false,
}

class TheGame extends GameLogic{
    directionToRight = true;
    directionToDown = true;

    debugData = () => {
        let widthCanvas = document.getElementById('widthCanvas');
        let heightCanvas = document.getElementById('heightCanvas');
        let deltaTime = document.getElementById('deltaTime');
        let objX = document.getElementById('objX');
        let objY = document.getElementById('objY');
        
        widthCanvas.textContent = "Largura: " + this.canvas.clientWidth;
        heightCanvas.textContent = "Altura:" + this.canvas.clientHeight;
        deltaTime.textContent = "DeltaTime:" + DeltaTime.getDeltaTime();
        objX.textContent = "Posição X de objeto:" + obj.position.x;
        objY.textContent = "Posição Y de objeto:" + obj.position.y;
    }

    update = () => {   
        this.debugData();
        this.inputActions();
        objT.direction = obj.position;
    }

    inputActions() {
        let acelerationForce = 10;

        if(inputKeys.w)
            obj.position.y -= acelerationForce;

        if(inputKeys.s)
            obj.position.y += acelerationForce;

        if(inputKeys.a)
            //obj.angle -= 0.1;
            obj.position.x -= acelerationForce;

        if(inputKeys.d)
            //obj.angle += 0.1;
            obj.position.x += acelerationForce;
    }

    render = () => {
        obj.draw(this.canvasContext);
        objT.draw(this.canvasContext);
    }
    
}

let game = new TheGame("glCanvas");

document.addEventListener('keydown', (event) => {
    switch(event.key){
        case 'w':
            inputKeys.w = true;
        break;

        case 'd':
            inputKeys.d = true;
        break;

        case 'a':
            inputKeys.a = true;
        break;

        case 's':
            inputKeys.s = true;
        break;
    }
});

document.addEventListener('keyup', (event) => {
    switch(event.key){
        case 'w':
            inputKeys.w = false;
        break;

        case 'd':
            inputKeys.d = false;
        break;

        case 'a':
            inputKeys.a = false;
        break;

        case 's':
            inputKeys.s = false;
        break;
    }
});

/*game.canvas.addEventListener('mousemove', (event) => {
    let mousePosition = new Vector2D(event.x, event.y);
    objT.direction = mousePosition;
});*/

requestAnimationFrame(game.run);