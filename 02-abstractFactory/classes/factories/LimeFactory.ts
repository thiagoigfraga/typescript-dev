import { IAirCraft } from "../../interfaces/IAirCraft";
import { ILandVehicle } from "../../interfaces/ILandVehicle";
import { ITransportFactory } from "../../interfaces/ItransportFactory";
import { Drone } from "../vehicles/air/Drone";
import { Scooter } from "../vehicles/land/Scooter";

export class LimeFactory implements ITransportFactory{
    createTransportAirCraft(): IAirCraft {

        return new Drone();
    }
    createTransportVehicle(): ILandVehicle {
        
        return new Scooter();
    }
}