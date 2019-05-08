export default function loader(scene, callback) {
    let loadTime = 0;
    let layersLoaded = 0;
    let layersLength = 0;
    let activeScene = scene;
    let timer = setInterval(function () {
        loadTime += 1
    }, 10);

    const getImagesMass = (layer) => {
        let images = {};
        for (let i in layer.path) {
            let imageName = layer.name + '-' + layer.path[i].action;
            images[imageName] = {};
            images[imageName].image = {};
            images[imageName].image.random = !!layer.path[i].random ? [] : false;
            images[imageName].image.type = layer.type;
            images[imageName].image.size = new Vector(0, 0);
            images[imageName].image.sprite = layer.path[i].sprite;
            images[imageName].image.speed = layer.path[i].speed;
            getImage(images[imageName].image, layer.path[i].path);
        }

        return images;
    };

    const getImage = (layer) => {
        layer.image = new Image();
        layersLength += 1;
        layer.image.src = './assets/temp/' + layer.path;
        new Promise((res, req) => {
            layer.image.onload = () => {
                layer.id = Date.now();
                layersLoaded += 1;
                layer.size.resize(layer.image.width, layer.image.height);
                res(layer);
            };
        }).then(res => {
            checkType(res);
            if (layersLoaded === layersLength) {
                clearInterval(timer);
                console.warn(`scene loaded for ${(loadTime / 100).toFixed(2)}s`);
                !!callback && callback(scene);
            }
        })
    };

    const checkType = (layer) => {
        if (layer.type === 'background') {
            getOriginSize(layer)
        }
    };

    const getOriginSize = (layer) => {
        let originSize = {
            size: function () {
                return {x: this.getWidth(), y: this.getHeight()}
            },
            getWidth: function () {
                return layer.size.x * this.getHeight() / layer.size.y
            },
            getHeight: function () {
                return layer.size.y;
            }
        };

        layer.originSize.resize(originSize.size().x, originSize.size().y);
        layer.ratio = layer.originSize.y * 100 / layer.size.y;
    };

    scene.forEach(function (item, i) {
        switch (typeof item.path) {
            case 'string' :
                getImage(item);
                break;

            case 'object' :
                getImagesMass(item);
                break;

            default :
                break;
        }
    });

    return scene;
}