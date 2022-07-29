import { IConsole } from "../consoles/interfaces/IConsole";
import { IPlay } from "./interfaces/IPlay";

export class Play implements IPlay{

    constructor(private console: IConsole){}

    playing(): void {
        console.log("Iniciando a jogatina...");
    }
    result(): void {
        console.log("*******Jogando*******");
    }
    
}