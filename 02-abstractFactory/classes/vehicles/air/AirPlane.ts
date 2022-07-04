import { IAirCraft } from "../../../interfaces/IAirCraft";

export class AirPlane implements IAirCraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: Iniciando decolagem!");
        
    }

    getCargo(): void {
        console.log("Avião: Passageiros a bordo!");
    }
    
    checkWind(): void {
        console.log("Avião: Ventos a 25km, ok!");
    }
}