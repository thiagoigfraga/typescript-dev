import { IDeliveryFactory } from "../../interfaces/IDeliveryFactory";
import { IDrink } from "../../interfaces/IDrink";
import { IFood } from "../../interfaces/IFood";
import { Beer } from "../Beer";
import { Hamburguer } from "../Hamburguer";


export class IAiqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}