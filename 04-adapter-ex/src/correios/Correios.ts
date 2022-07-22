import { ICorreiosTransport } from "./ICorreiosTransport";

export class Correios implements ICorreiosTransport{

    sendCorreios(): void {
        console.log("Enviado pelos correios.")
    }
    receiveCorreios(): void {
        console.log("Recebido pelos correios.")

    }
}