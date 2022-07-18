import { Token } from "../utils/Token";

export interface IPayPalPayment{

    authToken(): Token;
    paypalPayment(): void;
    paypalReceive(): void;
}