import { ItemType } from '../types/item.types';
import { IUpdateStrategy } from '../interfaces/strategy.interface';
import { StandardItemStrategy } from '../strategies/items/standard-item.strategy';
import { AgedBrieStrategy } from '../strategies/items/aged-brie.strategy';
import { BackstagePassStrategy } from '../strategies/items/backstage-pass.strategy';
import { SulfurasStrategy } from '../strategies/items/sulfuras.strategy';

export class UpdateStrategyFactory {
    static createStrategy(itemName: string): IUpdateStrategy {
        switch (itemName) {
            case ItemType.AGED_BRIE:
                return new AgedBrieStrategy();
            case ItemType.BACKSTAGE_PASS:
                return new BackstagePassStrategy();
            case ItemType.SULFURAS:
                return new SulfurasStrategy();
            default:
                return new StandardItemStrategy();
        }
    }
}