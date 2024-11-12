"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUpdateStrategy = void 0;
const quality_constants_1 = require("../../constants/quality.constants");
/**
 * Clase abstracta BaseUpdateStrategy
 *
 * Esta clase proporciona métodos básicos para actualizar la calidad y el tiempo de venta (sellIn)
 * de un `Item`. Implementa la interfaz `IUpdateStrategy` y define métodos comunes que pueden ser
 * reutilizados por las estrategias.
 */
class BaseUpdateStrategy {
    /**
     * Disminuye la calidad del item en 1, asegurando que no baje del límite mínimo.
     * @param item El item cuya calidad debe disminuir.
     */
    decreaseQuality(item) {
        if (item.quality > quality_constants_1.MINIMUM_QUALITY) {
            item.quality--;
        }
    }
    /**
     * Aumenta la calidad del item en 1, asegurando que no supere el límite máximo.
     * @param item El item cuya calidad debe aumentar.
     */
    increaseQuality(item) {
        if (item.quality < quality_constants_1.MAXIMUM_QUALITY) {
            item.quality++;
        }
    }
    /**
     * Disminuye el valor de sellIn del item en 1, indicando que ha pasado un día.
     * @param item El item cuyo sellIn debe actualizarse.
     */
    updateSellIn(item) {
        item.sellIn--;
    }
    /**
     * Verifica si el item ha expirado en base a su valor sellIn.
     * @param item El item a verificar.
     * @returns true si el item ha expirado (sellIn < 0), de lo contrario false.
     */
    isExpired(item) {
        return item.sellIn < 0;
        // Nuevo metodo para mejorar Mantenibilidad y Testing por ser un metodo especifico
        //Por ejemplo, si la logica cambiara en el futuro a:
        // return item.sellIn < 0 || item.quality === 0;
        // Solo modificaríamos este método
    }
}
exports.BaseUpdateStrategy = BaseUpdateStrategy;
