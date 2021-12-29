let obj = new SceneObject(0,0, 50, 50);

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
        objX.textContent = "Posição X de objeto:" + obj.x;
        objY.textContent = "Posição Y de objeto:" + obj.y;
    }

    update = () => {
        
        let acelerationForce = 25;
        let delta = DeltaTime.getDeltaTime();
        
        if(this.directionToRight)
            obj.x = obj.x + acelerationForce * delta;
        else
            obj.x = obj.x - acelerationForce * delta;
    
    
        if(this.directionToDown)
            obj.y = obj.y + (acelerationForce - 15) * delta;
            else
            obj.y = obj.y - (acelerationForce - 15) * delta;
            
            this.changeDiretion();
            this.debugData();
        }
        
        render = () => {
        obj.draw(this.canvasContext);
    }

    changeDiretion(){
        if(obj.x < 0)
            this.directionToRight = true;
    
        else if(obj.x > (this.canvas.clientWidth - obj.width))
            this.directionToRight = false;
    
        if(obj.y < 0)
            this.directionToDown = true;
        else if(obj.y > (this.canvas.clientHeight - obj.height))
            this.directionToDown = false;
    }
    
}

requestAnimationFrame(new TheGame("glCanvas").run);