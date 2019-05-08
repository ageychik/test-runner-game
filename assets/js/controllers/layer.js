import layers from '../temp-data/layerData.js';
import Background from '../nodes/background.js';
import User from '../nodes/user.js';

export default function layer(data) {
    let activeLayers = [];
    console.warn('start loading');
    const addLayer = (item) => {
        let node;
        switch (item.type){
            case 'background' :
                node = new Background(item);
                break;
            case 'user' :
                node = new User(item);
                break;
            default :
                console.warn(`layer.type = ${item.type} \n This type of layer was not found`);
                break;
        }
        activeLayers.push(node);
    };

    layers[data.name].forEach(function(item, i){
        addLayer(item)
    });

    return {
        layers: activeLayers,
        addLayer: addLayer
    }
}