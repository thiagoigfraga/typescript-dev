import { IItem } from './interfaces/IItem';

export class Movie implements IItem {
    start(): void {
        console.log('Iniciou o filme...');
    }
    getDescription(): void {
        console.log('Esse é um filme!');
    }
}
