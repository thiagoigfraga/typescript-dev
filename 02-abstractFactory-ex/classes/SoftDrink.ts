import { IDrink } from "../interfaces/IDrink";

export class SoftDrink implements IDrink{
    description(): void {
        console.log("Esse é um drink muito suave!");
    }
    getFlavor(): void {
        console.log("SoftDrink: Limão");
    }
    
}