import { IPlatform } from "./interfaces/IPlatform";

export class Facebook implements IPlatform{

    constructor(){
        this.configureRMTP();
        console.log("Facebook: Transmissão Iniciada.");
    }


    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Facebook: Autorizando Aplicação.");
    }
    
}