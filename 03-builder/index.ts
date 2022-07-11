import { VehicleBuilder } from "./builders/VehicleBuilder";
import { Director } from "./directors/Director";

const builder: VehicleBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();

const sedan = builder.getVehicle();

builder.reset();

director.constructTruck();

const truck = builder.getVehicle();

console.log(truck._engine);
console.log(sedan._engine);
console.log(sedan._vehicleType);
console.log(truck._vehicleType);


