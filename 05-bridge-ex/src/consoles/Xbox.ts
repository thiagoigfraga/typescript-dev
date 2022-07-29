import { IConsole } from "./interfaces/IConsole";

export class Xbox implements IConsole{

    constructor(){
        this.configureGame();
        console.log("Xbox: Iniciando jogo.");
    }


    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando o jogo.");
    }
    authToken(): void {

        console.log("Xbox: Autenticando usuário.");
        
    }


}