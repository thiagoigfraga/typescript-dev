import { Facebook } from "./src/platforms/Facebook";
import { IPlatform } from "./src/platforms/interfaces/IPlatform";
import { Twitch } from "./src/platforms/Twitch";
import { YouTube } from "./src/platforms/YouTube";
import { AdvancedLive } from "./src/transmissions/AdvancedLive";
import { Live } from "./src/transmissions/Live";

function startLive(platform: IPlatform){

    console.log("Aguarde...");

    const live = new Live(platform);

    live.broadcasting();
    live.result();
}

function startAdvancedLive(platform: IPlatform){

    console.log("Aguarde...");

    const live = new AdvancedLive(platform);

    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();

}


startLive(new YouTube());
startLive(new Twitch());

startAdvancedLive(new Facebook());