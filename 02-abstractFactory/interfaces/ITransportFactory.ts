import { IAirCraft } from "./IAirCraft";
import { ILandVehicle } from "./ILandVehicle";

export interface ITransportFactory{
    createTransportAirCraft() : IAirCraft;
    createTransportVehicle(): ILandVehicle;

}