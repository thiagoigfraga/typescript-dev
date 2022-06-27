import { IVehicle } from "./interfaces/IVehicle";

export class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Bicicleta: iniciando o trajeto...");
    }
    getCargo(): void {
        console.log("Bicicleta: carregando o produto!");
    }
    
}