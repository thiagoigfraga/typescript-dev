import { Transmission } from "../enum/Transmission";
import { VehicleType } from "../enum/VehicleType";
import { IBuilder } from "../interfaces/IBuilder";
import { Engine } from "../classes/Engine";
import { Vehicle } from "../classes/Vehicle";
import { Wheel } from "../classes/Wheel";

export class VehicleBuilder implements IBuilder{

    private _vehicle = new Vehicle();

    reset(): void {
        this._vehicle = new Vehicle();
    }
    getVehicle() {
        return this._vehicle;
    }
    setVehicleType(vehicleType: VehicleType): void {

        this._vehicle._vehicleType = vehicleType;
    }

    addWheel(wheel: Wheel) {
        this._vehicle._wheels.push(wheel);
    }

    setSeats(seats: number) {
        this._vehicle._seats = seats;
    }
    setEngine(engine: Engine) {
        this._vehicle._engine = engine;
    }
    setTransmissor(transmission: Transmission) {

        this._vehicle._transmission = transmission;
    }
}