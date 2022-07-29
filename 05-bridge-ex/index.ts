import { IConsole } from "./src/consoles/interfaces/IConsole";
import { PlayStation } from "./src/consoles/PlayStation";
import { Xbox } from "./src/consoles/Xbox";
import { AdvancedPlay } from "./src/gaming/AdvancedPlay";
import { Play } from "./src/gaming/Play";

function startPlay(_console: IConsole){

    console.log("Aguarde...");

    const play = new Play(_console);

    play.playing();
    play.result();
}

function startAdvancedPlay(_console: IConsole){

    console.log("Aguarde...");

    const play = new AdvancedPlay(_console);

    play.playing();
    play.challenge();
    play.result();
}

startPlay(new Xbox());
startAdvancedPlay(new PlayStation());
