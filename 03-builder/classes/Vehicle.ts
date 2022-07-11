import { Transmission } from "../enum/Transmission";
import { VehicleType } from "../enum/VehicleType";
import { Engine } from "./Engine";
import { Wheel } from "./Wheel";

export class Vehicle{

     _vehicleType: VehicleType;
     _seats: number;
     _engine: Engine;
     _transmission: Transmission;
     _wheels: Wheel[] = [];

    get vehicleType(): VehicleType{
        return this._vehicleType;
    }

    set vehicleType(value: VehicleType){
        this.vehicleType = value;
    }
    get seats(): number{
        return this._seats;
    }

    set seats(value: number){
        this._seats = value;
    }
    get engine(): Engine{
        return this._engine;
    }

    set engine(value: Engine){
        this._engine = value;
    }
    get transmission(): Transmission{
        return this._transmission;
    }

    set transmission(value: Transmission){
        this._transmission = value;
    }

    addWheel(wheel: Wheel){
        this._wheels.push(wheel);
    }

    get wheels(): Wheel[]{
        return this._wheels;
    }

    get wheelsTotal(): number{
        return this._wheels.length;
    }
}