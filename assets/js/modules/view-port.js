export default function viewPort(settings){
    console.warn('initial canvas');
    const gameplay = settings;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    canvas.width = settings.canvasSize.width;
    canvas.height = settings.canvasSize.height;
    document.body.appendChild(canvas);

    let fps = 25;
    let fpsSettings = {
        then: Date.now(),
        interval: 1000 / fps
    };
    let cur = 0;
    let activeScene;

    const clear = () => {
        context.clearRect(0, 0, settings.canvasSize.width, settings.canvasSize.height);
    };

    const drawImage = (scene, layer) => {
        context.drawImage(
            layer.image,
            (scene.position.x * layer.speed) % layer.size.x, 0,
            scene.size.x * layer.size.y  / scene.size.y, layer.size.y,
            0, 0,
            scene.size.x, scene.size.y
        );

        if((scene.position.x * layer.speed) % layer.size.x + scene.size.x >= layer.size.x){
            context.drawImage(
                layer.image,
                0, 0,
                scene.size.x, layer.size.y,
                layer.size.x - (scene.position.x * layer.speed) % layer.size.x, 0,
                scene.size.x, scene.size.y
            );
        }
    };

    const drawScene = () => {
        let layers = activeScene.layers.layers;
        clear();

        layers.forEach(function (item) {
            switch (item.type){
                case 'background' :
                    drawImage(activeScene, item);
                    break;
            }
        })
    };

    const animate = () => {
        requestAnimationFrame(() => { animate() });
        settings.now = Date.now();
        settings.delta = settings.now - fpsSettings.then;
        if (gameplay.gameState.status !== 'run'){
            drawScene();
            return false;
        }

        if (settings.delta > fpsSettings.interval){
            settings.then = settings.now - (settings.delta % fpsSettings.interval);
            move();
        }
    };

    const move = () => {
        cur += 1;
        clear();
        activeScene.position.changePosition(activeScene.speed, 0, activeScene.speed);
        activeScene.layers.layers.forEach(function (item) {
            switch (item.type) {
                case 'background' : {
                    drawScene();
                    break;
                }
            }
        });
    };

    return {
        init: (scene) => {
            activeScene = scene;
            animate();
        },
        start : () => {
            gameplay.gameState.status = 'run';
        },

        pause: () => {
            gameplay.gameState.status = 'pause';
        }
    }
}