import { IAirCraft } from "../interfaces/IAirCraft";
import { ILandVehicle } from "../interfaces/ILandVehicle";
import { ITransportFactory } from "../interfaces/ItransportFactory";
import VehicleType from "../consts/VehicleType";


export class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAirCraft;

   constructor(factory: ITransportFactory, type: String){

    if(type === VehicleType.TERRESTRE){
        this.vehicle = factory.createTransportVehicle();
    }
    else if(type === VehicleType.AEREO){
        this.aircraft = factory.createTransportAirCraft();
    }
    else if(type === VehicleType.AMBOS){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAirCraft();
    }

   }

   startRoute(): void{
       if(this.vehicle){
        this.vehicle.startRoute();
       }
       if(this.aircraft){
        this.aircraft.startRoute();
       }
   }
}