class GameLogic {

    frameId;

    constructor(elementId) {
        Drawer.canvas = document.getElementById(elementId);
        Drawer.context = Drawer.canvas.getContext("2d");
    }
    update = () => {}

    run = () => {
        this.update();
        Drawer.clearCanvas();
        Drawer.renderPipeline();
        requestAnimationFrame(this.run);
    }
}