export default class Vector{
    constructor (x, y, size){
        this.pixelSize = size || 1;
        this.x = (x || 0) * this.pixelSize;
        this.y = (y || 0) * this.pixelSize;
    }

    resize(x, y, size){
        this.x = x * (size || this.pixelSize);
        this.y = y * (size || this.pixelSize);
    }

    changePosition(x, y, size){
        this.x += x * (size || this.pixelSize);
        this.y += y * (size || this.pixelSize);
    }

}