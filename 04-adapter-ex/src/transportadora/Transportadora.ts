import { ITransportadoraTransport } from "./ITransportadoraTransport";

export class Transportadora implements ITransportadoraTransport{
    
    send(): void {
        console.log("Enviado pela transportadora.")
    }
    receive(): void {
        console.log("Recebido pela transportadora.")
    }

}