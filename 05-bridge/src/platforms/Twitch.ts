import { IPlatform } from "./interfaces/IPlatform";

export class Twitch implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("Twitch: Transmissão Iniciada.");
    }


    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Twitch: Autorizando Aplicação.");
    }
    
}