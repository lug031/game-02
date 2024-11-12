import { GildedRose } from './gilded-rose';
import { Item } from './models/Item';

const items = [
  new Item('Aged Brie', 10, 20),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Standard Item', 15, 25),  // nuevo Artículo standard 
];

// Instancia de GildedRose y luego actualizacion de la calidad
const gildedRose = new GildedRose(items);

// Antes de la actualización
console.log('Before update:');
console.log(gildedRose.items);

// Actualizar la calidad de los artículos
gildedRose.updateQuality();

// Después de la actualización
console.log('After update:');
console.log(gildedRose.items);
