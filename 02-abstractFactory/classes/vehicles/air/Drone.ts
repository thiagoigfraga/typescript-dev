import { IAirCraft } from "../../../interfaces/IAirCraft";

export class Drone implements IAirCraft{

    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando decolagem!");
        
    }
    getCargo(): void {
        console.log("Drone: preparando pra subir!");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 70km, ok!");
    }
}