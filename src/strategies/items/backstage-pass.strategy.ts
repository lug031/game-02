import { Item } from '../../models/Item';
import { BaseUpdateStrategy } from '../base/base-update.strategy';
import { MINIMUM_QUALITY } from '../../constants/quality.constants';

/**
 * Clase BackstagePassStrategy
 * 
 * Estrategia para la actualización de calidad de los items tipo "Backstage Pass".
 * La calidad de estos items aumenta a medida que se acerca la fecha del evento,
 * pero cae a 0 después de la fecha del evento. Extiende de `BaseUpdateStrategy`
 * para utilizar métodos de utilidad comunes.
 */
export class BackstagePassStrategy extends BaseUpdateStrategy {
    private readonly DOUBLE_QUALITY_THRESHOLD = 10;
    private readonly TRIPLE_QUALITY_THRESHOLD = 5;

    /**
     * Actualiza la calidad y el sellIn de un item tipo "Backstage Pass".
     * 
     * - Incrementa la calidad en 1 a medida que se acerca la fecha.
     * - Incrementa la calidad en 2 adicionales cuando quedan 10 días o menos.
     * - Incrementa la calidad en 3 adicionales cuando quedan 5 días o menos.
     * - Establece la calidad en 0 después del evento.
     * 
     * @param item El item "Backstage Pass" cuya calidad y sellIn deben actualizarse.
     */
    updateQuality(item: Item): void {
        // Incrementa la calidad en 1 a medida que se acerca la fecha
        this.increaseQuality(item);

        // Incrementa la calidad en 2 cuando faltan 10 días o menos
        if (item.sellIn <= this.DOUBLE_QUALITY_THRESHOLD) {
            this.increaseQuality(item);
        }

        // Incrementa la calidad en 3 cuando faltan 5 días o menos
        if (item.sellIn <= this.TRIPLE_QUALITY_THRESHOLD) {
            this.increaseQuality(item);
        }

        // Actualiza el sellIn
        this.updateSellIn(item);

        // Establece la calidad en 0 después del evento
        if (this.isExpired(item)) {
            item.quality = MINIMUM_QUALITY;
        }
    }
}
