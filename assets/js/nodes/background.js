import Node from "../modules/node.js";
import Vector from "../modules/vector.js"

export default class Background extends Node {
    constructor(params){
        super(params);
        this.originSize = new Vector(0, 0);
        this.path = params.path;
    }
}