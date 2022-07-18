import { Token } from "../utils/Token";
import { IPayonnerPayment } from "./IPayonnerPayment";

export class Payonner implements IPayonnerPayment{

    private _token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {

        this._token = this.authToken();
        console.log(`TOKEN: ${this._token.token}`);
        console.log("Enviando pagamento via Payonner."); 
    }

    receivePayment(): void {
        console.log("Recebendo pagamento via Payonner.");
    }
}