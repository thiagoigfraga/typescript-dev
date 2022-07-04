import { IAirCraft } from "../interfaces/IAirCraft";
import { ILandVehicle } from "../interfaces/ILandVehicle";
import { ITransportFactory } from "../interfaces/ItransportFactory";

export class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAirCraft;

   constructor(factory: ITransportFactory){
       this.vehicle = factory.createTransportVehicle();
       this.aircraft = factory.createTransportAirCraft();
   }

   startRoute(): void{
       this.vehicle.startRoute();
       this.aircraft.startRoute();
   }
}