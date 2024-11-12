"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = void 0;
const update_strategy_factory_1 = require("./factories/update-strategy.factory");
class GildedRose {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach(item => {
            const strategy = update_strategy_factory_1.UpdateStrategyFactory.createStrategy(item.name);
            strategy.updateQuality(item);
        });
        return this.items;
    }
}
exports.GildedRose = GildedRose;
