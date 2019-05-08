export default function gameSettings(settings){
    settings = settings || {
        canvasWidth: 400,
        canvasHeight: 216,
        ratio: [16, 9]
    };

    return{
        gameState: (() => {
            return {
                activeScene     : null,     // Object {num: Number, name: String, isLevel: Boolean}
                points          : 0,        // Number
                load            : false,    // Boolean
                running         : false,    // Boolean
                status          : 'start'   // String 'start', 'play', 'end'
            }
        })(),
        canvasSize: (() => {
            return {
                width: settings.canvasWidth || Math.round(settings.canvasHeight * this.ratio[0] / this.ratio[1]),
                height: settings.canvasHeight || Math.round(settings.canvasWidth * this.ratio[1] / this.ratio[0])
            }
        })(),
        ratio: settings.ratio
    };
}