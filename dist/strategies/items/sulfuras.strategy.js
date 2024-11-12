"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SulfurasStrategy = void 0;
const base_update_strategy_1 = require("../base/base-update.strategy");
const quality_constants_1 = require("../../constants/quality.constants");
/**
 * Clase SulfurasStrategy
 *
 * Estrategia para la actualización de calidad de los items legendarios tipo "Sulfuras".
 * Estos items no requieren ser vendidos y su calidad es constante, según lo establecido
 * en `LEGENDARY_QUALITY`. Hereda de `BaseUpdateStrategy` para alinearse con el diseño
 * general de estrategias, aunque no necesita modificar sellIn o calidad.
 */
class SulfurasStrategy extends base_update_strategy_1.BaseUpdateStrategy {
    /**
     * Actualiza la calidad de un item tipo "Sulfuras".
     *
     * - La calidad de "Sulfuras" es siempre constante y se establece en `LEGENDARY_QUALITY`.
     * - Los items "Sulfuras" no tienen que venderse ni decrecen en calidad.
     *
     * @param item El item "Sulfuras" cuya calidad permanece inalterada.
     */
    updateQuality(item) {
        // Item legendario, la calidad nunca cambia y no necesita ser vendido
        item.quality = quality_constants_1.LEGENDARY_QUALITY;
    }
}
exports.SulfurasStrategy = SulfurasStrategy;
