import { ILandVehicle } from "../../../interfaces/ILandVehicle";

export class Car implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando Trajeto!");

    }
    
    getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }
}