import { IVehicle } from "./interfaces/IVehicle";

export class Car implements IVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando Trajeto...");
    }

     getCargo(): void {
        console.log("Carro: Passageiros embarcados!");
    }

}