import Company from "../02-abstractFactory/consts/Company";
import { Client } from "./classes/Client";
import { NineNineFactory } from "./classes/factories/NineNineFactory";
import { UberFactory } from "./classes/factories/UberFactory";
import { ITransportFactory } from "./interfaces/ItransportFactory";

const currentCompany = Company.UBER;

let factory: ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberFactory();
        break;
    case Company.NINENINE:
        factory = new NineNineFactory();
        break;
    default:
        console.log("Companhia não definida.");
}

const client = new Client(factory);

client.startRoute();