import Vector from './vector.js';

export default class Node {
    constructor(params){
        this.name = params.name;
        this.position = params.position ? new Vector(params.position[0], params.position[1]) : new Vector(0, 0);
        this.size = params.size ? new Vector(params.size[0], params.size[1]) : new Vector(0, 0);
        this.type = params.type;
        this.speed = params.speed || 1;
        this.layerGroup = params.layerGroup || 0;
    }

    move(x, y, size){
        this.position.changePosition(x, y, size || false);
    }
}