import { Token } from "../utils/Token";
import { IPayPalPayment } from "./IPayPalPayment";

export class PayPal implements IPayPalPayment{

    private _token: Token;

    authToken(): Token {
        return new Token();
    }

    paypalPayment(): void {
        this._token = this.authToken();
        console.log(`TOKEN: ${this._token.token}`);
        console.log("Enviando pagamento via PayPal"); 
    }

    paypalReceive(): void {
        console.log("Recebendo pagamento via PayPal");

    }
}