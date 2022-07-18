import { MercadoPago } from "../mercadopago/MercadoPago";
import { IPayPalPayment } from "../paypal/IPayPalPayment";
import { Token } from "../utils/Token";

export class MercadoPagoAdapter implements IPayPalPayment{

    private _token: Token;

    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando MercadoPago no PayPal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {

        this.mercadoPago.sendPayment();
        
    }
    paypalReceive(): void {
        this.mercadoPago.receivePayment();
    }    
}