import { Payonner } from "../payoneer/Payonner";
import { IPayPalPayment } from "../paypal/IPayPalPayment";
import { Token } from "../utils/Token";

export class PayonnerAdapter implements IPayPalPayment{

    private _token: Token;

    constructor(private payonner: Payonner){
        console.log("Adaptando Payonner no PayPal");
    }

    authToken(): Token {
        return new Token();    
    }

    paypalPayment(): void {
        this.payonner.sendPayment();
    }

    paypalReceive(): void {
        this.payonner.receivePayment();
    }
}