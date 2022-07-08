import { IFood } from "../interfaces/IFood";

export class Hamburguer implements IFood{
    description(): void {
       console.log("Hamburguer muito saboroso!")
    }

    getName(): void {
        console.log("Este é um hamburguer")

    }
    
}