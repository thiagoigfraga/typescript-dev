import { IItem } from './items/interfaces/IItem';

export abstract class Location {
    startItem(): void {
        const location = this.createItem();
        location.start();
    }
    protected abstract createItem(): IItem;
}
