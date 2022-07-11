import { Engine } from "../classes/Engine";
import { Wheel } from "../classes/Wheel";
import { Transmission } from "../enum/Transmission";
import { VehicleType } from "../enum/VehicleType";
import { IBuilder } from "../interfaces/IBuilder";

export class Director{
    constructor(private builder: IBuilder){
    }

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeats(5);
        this.builder.setTransmissor(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
        this.builder.addWheel(new Wheel(15))
    }
    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeats(3);
        this.builder.setTransmissor(Transmission.AUTOMATIC_SEQUENTIAL);
        this.builder.setEngine(new Engine(13000));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
        this.builder.addWheel(new Wheel(22));
    }
}