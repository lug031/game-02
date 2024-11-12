"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgedBrieStrategy = void 0;
const base_update_strategy_1 = require("../base/base-update.strategy");
/**
 * Clase AgedBrieStrategy
 *
 * Estrategia para la actualización de calidad de los items tipo "Aged Brie".
 * Este tipo de item incrementa su calidad en lugar de disminuir con el paso del tiempo.
 * Extiende de `BaseUpdateStrategy` para utilizar métodos de utilidad comunes.
 */
class AgedBrieStrategy extends base_update_strategy_1.BaseUpdateStrategy {
    /**
     * Actualiza la calidad y el sellIn de un item tipo "Aged Brie".
     *
     * - Incrementa la calidad en 1.
     * - Disminuye el valor de sellIn en 1, indicando el paso de un día.
     * - Si el item ha expirado (sellIn < 0), la calidad aumenta dos veces más rápido,
     *   incrementándose en 1 adicional.
     *
     * @param item El item "Aged Brie" cuya calidad y sellIn deben actualizarse.
     */
    updateQuality(item) {
        // Incrementa la calidad en 1 a medida que envejece
        this.increaseQuality(item);
        // Actualiza el sellIn
        this.updateSellIn(item);
        // Si el item ha expirado, la calidad aumenta dos veces más rápido
        if (this.isExpired(item)) {
            this.increaseQuality(item);
        }
    }
}
exports.AgedBrieStrategy = AgedBrieStrategy;
