import { Token } from "../utils/Token";
import { IMercadoPagoPayment } from "./IMercadoPagoPayment";

export class MercadoPago implements IMercadoPagoPayment{

    private _token: Token;

    authToken(): Token {
        return new Token();
    }

    sendPayment(): void {

        this._token = this.authToken();
        console.log(`TOKEN: ${this._token.token}`);
        console.log("Enviando pagamento via MercadoPago."); 
    }

    receivePayment(): void {
        console.log("Recebendo pagamento via MercadoPago.");
    }
}