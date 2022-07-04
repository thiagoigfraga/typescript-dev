import { ILandVehicle } from "../../../interfaces/ILandVehicle";

export class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: dando partida!");
    }

    getCargo(): void {
        console.log("Moto: produto guardado!");
    }
}