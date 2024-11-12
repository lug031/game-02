"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardItemStrategy = void 0;
const base_update_strategy_1 = require("../base/base-update.strategy");
/**
 * Clase StandardItemStrategy
 *
 * Estrategia para la actualización de calidad de los items estándar, aquellos que no tienen
 * características especiales. Extiende de `BaseUpdateStrategy` para usar sus métodos de utilidad.
 */
class StandardItemStrategy extends base_update_strategy_1.BaseUpdateStrategy {
    /**
     * Actualiza la calidad y el sellIn de un item estándar.
     *
     * - Disminuye la calidad en 1.
     * - Disminuye el valor de sellIn en 1, indicando el paso de un día.
     * - Si el item ha expirado (sellIn < 0), la calidad disminuye nuevamente en 1.
     *
     * @param item El item estándar cuya calidad y sellIn deben actualizarse.
     */
    updateQuality(item) {
        // Disminuye la calidad en 1
        this.decreaseQuality(item);
        // Actualiza el sellIn
        this.updateSellIn(item);
        /*AQUI APLIQUE PRINCPIO DRY
        Antes - Esta lógica se repetía en varias estrategias
        if (item.sellIn < 0) { ... }
        if (item.sellIn < 0) { ... }
        ...

        // Ahora una sola implementación reutilizable
        if (this.isExpired(item)) { ... }
        */
        if (this.isExpired(item)) {
            this.decreaseQuality(item);
        }
    }
}
exports.StandardItemStrategy = StandardItemStrategy;
