const layers = {
    'first_scene': [
        /*{
            name: 'bg_1',
            type: 'background',
            path: 'grid.png',
            repeat: true,
            position: [0, 0],
            speed: 0.8,
        },
         {
             name: 'bg_1',
             type: 'background',
             path: 'test1.png',
             repeat: true,
             position: [0, 0],
             speed: 1,
         }, {
             name: 'bg_2',
             type: 'background',
             path: 'test2.png',
             repeat: true,
             position: [0, 0],
             speed: 0.8,
         }, {
             name: 'bg_3',
             type: 'background',
             path: 'test3.png',
             repeat: true,
             position: [0, 0],
             speed: 0.6,
         }, */
        {
            name: 'bg_1',
            type: 'background',
            path: 'bg-1.png',
            layerGroup: 0,
            repeat: true,
            position: [0, 0],
            speed: 0.6,
        }, {
            name: 'bg_2',
            type: 'background',
            path: 'bg-2.png',
            layerGroup: 0,
            repeat: true,
            position: [0, 0],
            speed: 0.8,
        }, {
            name: 'bg_3',
            type: 'background',
            path: 'bg-3.png',
            layerGroup: 0,
            repeat: true,
            position: [0, 0],
            speed: 0.9,
        }, {
            name: 'bg_4',
            type: 'background',
            path: 'bg-4.png',
            layerGroup: 0,
            repeat: true,
            position: [0, 0],
            speed: 1.5,
        },

        // {
        //     name: 'border',
        //     type: 'border',
        //     layerGroup: 0,
        //     path: {
        //         bottom: {action: 'bottom', path: 'border-bottom.png', sprite: 5, random: true}
        //     },
        //     repeat: true,
        //     size: [32, 32]
        // },{
        //     name: 'user',
        //     type: 'user',
        //     path: {
        //         stay: {action: 'stay', path: 'stay.png', sprite: 12, speed: 1},
        //         run: {action: 'run', path: 'run.png', sprite: 8, speed: 0.6},
        //         slowStep: {action: 'slow-step', path: 'slow.png', sprite: 2, speed: 0.5},
        //         jump: {action: 'jump', path: 'jump.png', sprite: false},
        //         landing: {action: 'landing', path: 'landing.png', sprite: false},
        //         hang: {action: 'hang', path: 'hang.png', sprite: 6},
        //     },
        //     layerGroup: 1,
        //     pixelSize: 16,
        //     position: [10, 0]
        // }
    ]
};

export default layers;