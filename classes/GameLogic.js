class GameLogic {

    /** @type {HTMLCanvasElement} */
    canvas;
    /** @type {CanvasRenderingContext2D} */
    canvasContext;
    frameId;

    constructor(elementId) {
        this.canvas = document.getElementById(elementId);
        this.canvasContext = this.canvas.getContext("2d");
    }
    update = () => {}

    clear = () => {
        this.canvasContext.save();

        this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
        this.canvasContext.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        this.canvasContext.restore();
    }

    render = () => {}

    run = () => {
        this.update();
        this.clear();
        this.render();
        requestAnimationFrame(this.run);
    }
}