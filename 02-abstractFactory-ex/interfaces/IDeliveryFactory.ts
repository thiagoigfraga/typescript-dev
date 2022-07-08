import { IDrink } from "./IDrink";
import { IFood } from "./IFood";

export interface IDeliveryFactory{

    createDeliveryDrink(): IDrink;
    createDeliveryFood(): IFood;
}