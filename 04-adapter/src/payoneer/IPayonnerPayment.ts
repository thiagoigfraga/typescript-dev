import { Token } from "../utils/Token";

export interface IPayonnerPayment{

    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}