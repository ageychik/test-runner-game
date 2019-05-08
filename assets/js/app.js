import gameSettings from './modules/settings.js';
import Vector from './modules/vector.js';
import viewPort from './modules/view-port.js';
import scene from './controllers/scene.js';

export default function runnerGame () {
    console.warn('initial game');
    const gameplay = gameSettings();

    const view = viewPort(gameplay);
    const scenes = scene(null, function (activeScene) {
        gameplay.activeScene = activeScene;
        activeScene.position = new Vector(0, 0);
        activeScene.size = new Vector(gameplay.canvasSize.width, gameplay.canvasSize.height);
        view.init(activeScene);
    });

    document.addEventListener('keyup', function (e) {
        if(e.code === 'Space'){
            gameplay.gameState.status = 'run';
            view.start();
        }

        if(e.code === 'Escape'){
            gameplay.gameState.status = 'pause';
            view.pause();
        }

    });

};