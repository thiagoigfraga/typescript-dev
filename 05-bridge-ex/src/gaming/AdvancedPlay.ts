import { IConsole } from "../consoles/interfaces/IConsole";
import { Play } from "./Play";

export class AdvancedPlay extends Play{

    constructor(console: IConsole){
        super(console)
    }

    challenge(){
        console.log("Iniciando desafio...");
    }
    
}