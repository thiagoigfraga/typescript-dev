import { Location } from './Location';
import { Game } from './items/Game';
import { IItem } from './items/interfaces/IItem';

export class GameLocation extends Location {
    protected createItem(): IItem {
        return new Game();
    }
}
