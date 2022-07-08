import { IDrink } from "../interfaces/IDrink";

export class Beer implements IDrink{
    description(): void {
        console.log("Essa é uma cerveja muito gelada!");
    }
    getFlavor(): void {
        console.log("Cerveja: Pielsen");
    }
    
}