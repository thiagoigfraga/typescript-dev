import { CarTransport } from "./src/classes/transport/CarTransport";
import { MotorcycleTransport } from "./src/classes/transport/MotorcycleTransport";
import { BicycleTransport } from "./src/classes/transport/BicycleTransport";
import { Transport } from "./src/classes/transport/Transport";

declare var process: { argv: string | string[]; };

let transport: Transport;

if(process.argv.includes("--uber")){
    transport = new CarTransport();
}else if(process.argv.includes("--eats")){
    transport = new MotorcycleTransport();
}else if(process.argv.includes("--bike")){
    transport = new BicycleTransport();
}else{
    console.error("Selecione o tipo de transporte");
}

if(transport){
    transport.startTransport();
}