import { IAirCraft } from "../../interfaces/IAirCraft";
import { ILandVehicle } from "../../interfaces/ILandVehicle";
import { ITransportFactory } from "../../interfaces/ItransportFactory";
import { Helicopter } from "../vehicles/air/Helicopter";
import { Motorcycle } from "../vehicles/land/Motorcycle";

export class NineNineFactory implements ITransportFactory{
    createTransportAirCraft(): IAirCraft {

        return new Helicopter();
    }
    createTransportVehicle(): ILandVehicle {
        
        return new Motorcycle();
    }
}