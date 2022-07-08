import { IFood } from "../interfaces/IFood";

export class HotDog implements IFood{
    description(): void {
       console.log("HotDog muito bom!")
    }

    getName(): void {
        console.log("Este é um hotdog!")

    }
    
}