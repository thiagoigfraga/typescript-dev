import { Location } from './Location';
import { IItem } from './items/interfaces/IItem';
import { Movie } from './items/Movie';

export class MovieLocation extends Location {
    protected createItem(): IItem {
        return new Movie();
    }
}
