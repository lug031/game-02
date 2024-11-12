"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStrategyFactory = void 0;
const item_types_1 = require("../types/item.types");
const standard_item_strategy_1 = require("../strategies/items/standard-item.strategy");
const aged_brie_strategy_1 = require("../strategies/items/aged-brie.strategy");
const backstage_pass_strategy_1 = require("../strategies/items/backstage-pass.strategy");
const sulfuras_strategy_1 = require("../strategies/items/sulfuras.strategy");
class UpdateStrategyFactory {
    static createStrategy(itemName) {
        switch (itemName) {
            case item_types_1.ItemType.AGED_BRIE:
                return new aged_brie_strategy_1.AgedBrieStrategy();
            case item_types_1.ItemType.BACKSTAGE_PASS:
                return new backstage_pass_strategy_1.BackstagePassStrategy();
            case item_types_1.ItemType.SULFURAS:
                return new sulfuras_strategy_1.SulfurasStrategy();
            default:
                return new standard_item_strategy_1.StandardItemStrategy();
        }
    }
}
exports.UpdateStrategyFactory = UpdateStrategyFactory;
