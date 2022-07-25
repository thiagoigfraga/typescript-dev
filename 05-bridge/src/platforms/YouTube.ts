import { IPlatform } from "./interfaces/IPlatform";

export class YouTube implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("YouTube: Transmissão Iniciada.");
    }


    configureRMTP(): void {
        this.authToken();
        console.log("YouTube: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("YouTube: Autorizando Aplicação.");
    }
    
}