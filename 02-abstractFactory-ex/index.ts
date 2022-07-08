
import { Client } from "./classes/Client";
import { IFoodDelivery } from "./classes/factories/IFoodDelivery";
import { IDeliveryFactory } from "./interfaces/IDeliveryFactory";

let factory: IDeliveryFactory;

factory = new IFoodDelivery();

const client = new Client(new IFoodDelivery());

client.startDelivery();