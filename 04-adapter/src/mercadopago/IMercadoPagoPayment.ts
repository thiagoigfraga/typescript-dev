import { Token } from "../utils/Token";

export interface IMercadoPagoPayment{

    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}