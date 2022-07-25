import { IPlatform } from "../platforms/interfaces/IPlatform";
import { Live } from "./Live";

export class AdvancedLive extends Live{

    constructor(platform: IPlatform){
        super(platform);
    }

subtitles(): void{

    console.log("Legendas ativadas.");
}

comments(): void{
    console.log("Comentários liberados.");
}

}