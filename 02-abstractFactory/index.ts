import Company from "../02-abstractFactory/consts/Company";
import VehicleType from "../02-abstractFactory/consts/VehicleType";
import { Client } from "./classes/Client";
import { LimeFactory } from "./classes/factories/LimeFactory";
import { NineNineFactory } from "./classes/factories/NineNineFactory";
import { UberFactory } from "./classes/factories/UberFactory";
import { ITransportFactory } from "./interfaces/ItransportFactory";

const currentCompany = Company.LIME;

let factory: ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NineNineFactory();
        break;
    case Company.LIME:
        factory = new LimeFactory();
        break;
    default:
        console.log("Companhia não definida.");
}

const client = new Client(factory, VehicleType.TERRESTRE);

client.startRoute();