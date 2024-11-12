import { Item } from '../models/Item';

export interface IUpdateStrategy {
    updateQuality(item: Item): void;
}