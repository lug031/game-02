import { Item } from '../../models/Item';
import { IUpdateStrategy } from '../../interfaces/strategy.interface';
import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from '../../constants/quality.constants';

/**
 * Clase abstracta BaseUpdateStrategy
 * 
 * Esta clase proporciona métodos básicos para actualizar la calidad y el tiempo de venta (sellIn)
 * de un `Item`. Implementa la interfaz `IUpdateStrategy` y define métodos comunes que pueden ser
 * reutilizados por las estrategias.
 */
export abstract class BaseUpdateStrategy implements IUpdateStrategy {
    /**
     * Disminuye la calidad del item en 1, asegurando que no baje del límite mínimo.
     * @param item El item cuya calidad debe disminuir.
     */
    protected decreaseQuality(item: Item): void {
        if (item.quality > MINIMUM_QUALITY) {
            item.quality--;
        }
    }

    /**
     * Aumenta la calidad del item en 1, asegurando que no supere el límite máximo.
     * @param item El item cuya calidad debe aumentar.
     */
    protected increaseQuality(item: Item): void {
        if (item.quality < MAXIMUM_QUALITY) {
            item.quality++;
        }
    }

    /**
     * Disminuye el valor de sellIn del item en 1, indicando que ha pasado un día.
     * @param item El item cuyo sellIn debe actualizarse.
     */
    protected updateSellIn(item: Item): void {
        item.sellIn--;
    }

    /**
     * Verifica si el item ha expirado en base a su valor sellIn.
     * @param item El item a verificar.
     * @returns true si el item ha expirado (sellIn < 0), de lo contrario false.
     */
    public isExpired(item: Item): boolean {
        return item.sellIn < 0;

        // Nuevo metodo para mejorar Mantenibilidad y Testing por ser un metodo especifico
        //Por ejemplo, si la logica cambiara en el futuro a:
        // return item.sellIn < 0 || item.quality === 0;
        // Solo modificaríamos este método
    }

    /**
     * Método abstracto que debe ser implementado por cada estrategia específica de actualización.
     * Actualiza la calidad del item de acuerdo con la estrategia particular.
     * @param item El item cuya calidad debe actualizarse.
     */
    abstract updateQuality(item: Item): void;
}
