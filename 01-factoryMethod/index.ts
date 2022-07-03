import { GameLocation } from './src/classes/location/GameLocation';
import { Location } from './src/classes/location/Location';
import { MovieLocation } from './src/classes/location/MovieLocation';

let locat: Location;

if (process.argv.includes('--movie')) {
    locat = new MovieLocation();
} else if (process.argv.includes('--game')) {
    locat = new GameLocation();
} else {
    console.error('Selecione o tipo da localização');
}

//@ts-ignore
if (locat) {
    locat.startItem();
}
