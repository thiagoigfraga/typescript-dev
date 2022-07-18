import { MercadoPagoAdapter } from "./src/adapters/MercadoPagoAdapter";
import { MercadoPago } from "./src/mercadopago/MercadoPago";
import { IPayPalPayment } from "./src/paypal/IPayPalPayment";

//const payment: IPayPalPayment = new PayPal();
//const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());

const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago);

payment.paypalPayment();
payment.paypalReceive();