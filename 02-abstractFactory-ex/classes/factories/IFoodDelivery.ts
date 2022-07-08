import {IDeliveryFactory} from "../../interfaces/IDeliveryFactory";
import { IDrink } from "../../interfaces/IDrink";
import { IFood } from "../../interfaces/IFood";
import { HotDog } from "../HotDog";
import { SoftDrink } from "../SoftDrink";


export class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}