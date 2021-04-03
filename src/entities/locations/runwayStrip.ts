import "phaser";
import {Location} from "./location";
import {Point} from "../graph/point";

export class RunwayStrip extends Location {
    public static getInstance() {
       this.initialize({
             asset_path: 'src/assets/runway_strip.png',
             key: 'runway_strip',
             locationX0: 414,
             locationY0: 108.5,
             scaleX: 0.66,
             scaleY: 0.64
           }
       );
    }

    public static getInstancePoints() {
        this.initializePoints([
           new Point(this.setPointX(-365), this.setPointY(60), 1, this),
           new Point(this.setPointX(-195), this.setPointY(-60), 25, this)
        ]);
    }
}

// export class RunwayStrip {
//     private static asset_path: string = 'src/assets/runway_strip.png';
//     private static runawayStripObject: Phaser.GameObjects.Image;

//     public static preload(context: Phaser.Scene, key: string) {
//         context.load.image(key, this.asset_path);
//     }

//     public static setPosition(context: Phaser.Scene, key: string) {
//         this.runawayStripObject = context.add.image(0, 0, key);
//         this.runawayStripObject.setScale(0.66, 0.64);
//         this.runawayStripObject.setY(108.5);
//         this.runawayStripObject.setX(414);

//     }
// }