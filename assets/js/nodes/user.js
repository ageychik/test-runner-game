import Node from "../modules/node.js";

export default class User extends Node{
    constructor(params) {
        super(params);
        this.spritePostiton = 0;
        this.pixelSize = params.pixelSize;
        this.path = params.path;
        this.move(this.position.x, this.position.y, this.pixelSize);
    }
}