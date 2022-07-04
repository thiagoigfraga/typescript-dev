import { IAirCraft } from "../../interfaces/IAirCraft";
import { ILandVehicle } from "../../interfaces/ILandVehicle";
import { ITransportFactory } from "../../interfaces/ItransportFactory";
import { AirPlane } from "../vehicles/air/AirPlane";
import { Car } from "../vehicles/land/Car";

export class UberFactory implements ITransportFactory{
    createTransportAirCraft(): IAirCraft {
        return new AirPlane();
    }
    
    createTransportVehicle(): ILandVehicle {
        return new Car();
    }
}