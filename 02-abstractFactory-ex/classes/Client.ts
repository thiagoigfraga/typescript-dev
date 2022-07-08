import { IDeliveryFactory } from "../interfaces/IDeliveryFactory";
import { IDrink } from "../interfaces/IDrink";
import { IFood } from "../interfaces/IFood";

export class Client{

    private drink: IDrink;
    private food: IFood;

    constructor(factory: IDeliveryFactory){

        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();
    }

    startDelivery(): void{

        this.drink.description();
        this.drink.getFlavor();

        this.food.description();
        this.food.getName();

    }
}