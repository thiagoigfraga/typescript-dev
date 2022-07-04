import { IAirCraft } from "../../../interfaces/IAirCraft";

export class Helicopter implements IAirCraft{

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: Iniciando decolagem!");
        
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros a bordo!");
    }
    checkWind(): void {
        console.log("Helicóptero: Ventos a 30km, ok!");
    }
}