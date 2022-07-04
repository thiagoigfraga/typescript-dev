import { ILandVehicle } from "../../../interfaces/ILandVehicle";

export class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: dando partida!");
    }

    getCargo(): void {
        console.log("Scooter: dando largada!");
    }
}