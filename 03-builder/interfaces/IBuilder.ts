import { Engine } from "../classes/Engine";
import { Transmission} from "../enum/Transmission";
import { Vehicle } from "../classes/Vehicle";
import { VehicleType } from "../enum/VehicleType";
import { Wheel } from "../classes/Wheel";

export interface IBuilder{

    reset():void;
    getVehicle(): Vehicle;
    setVehicleType(VehicleType: VehicleType): void;
    addWheel(wheel: Wheel):void;
    setSeats(number: number):void;
    setEngine(engine: Engine):void;
    setTransmissor(transmissor: Transmission):void;
}