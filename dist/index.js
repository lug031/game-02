"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gilded_rose_1 = require("./gilded-rose");
const Item_1 = require("./models/Item");
const items = [
    new Item_1.Item('Aged Brie', 10, 20),
    new Item_1.Item('Backstage passes to a TAFKAL80ETC concert', 5, 30),
    new Item_1.Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item_1.Item('Standard Item', 15, 25),
];
// Instancia de GildedRose y luego actualizacion de la calidad
const gildedRose = new gilded_rose_1.GildedRose(items);
// Antes de la actualización
console.log('Before update:');
console.log(gildedRose.items);
// Actualizar la calidad de los artículos
gildedRose.updateQuality();
// Después de la actualización
console.log('After update:');
console.log(gildedRose.items);
