import { IConsole } from "./interfaces/IConsole";

export class PlayStation implements IConsole{

    constructor(){
        this.configureGame();
        console.log("PlayStation: Iniciando jogo.");
    }


    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando o jogo.");
    }
    authToken(): void {

        console.log("PlayStation: Autenticando usuário.");
        
    }


}