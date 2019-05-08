import layer from '../controllers/layer.js';
import loader from '../modules/loader.js';

export default function scene(data, callback) {
    data = data || {
        name: 'first_scene',
        speed: 1,
        padding: [2, 2]
    };

    const activeScene = data;
    const layers = layer(activeScene);
    activeScene.layers = layers;
    console.warn('initialed scene');
    loader(layers.layers, function(){
        callback(activeScene);
    });

    return {
        activeScene: activeScene
    }
}