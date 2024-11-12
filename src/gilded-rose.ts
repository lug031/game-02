import { Item } from './models/Item';
import { UpdateStrategyFactory } from './factories/update-strategy.factory';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality(): Array<Item> {
        this.items.forEach(item => {
            const strategy = UpdateStrategyFactory.createStrategy(item.name);
            strategy.updateQuality(item);
        });

        return this.items;
    }
}