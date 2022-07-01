import { IItem } from './interfaces/IItem';

export class Game implements IItem {
    start(): void {
        console.log('Iniciou o jogo...');
    }
    getDescription(): void {
        console.log('Esse é um jogo!');
    }
}
