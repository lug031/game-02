import { expect } from "chai";
import { Item } from "../src/models/Item";
import { AgedBrieStrategy } from "../src/strategies/items/aged-brie.strategy";

describe('AgedBrieStrategy', () => {
    let strategy: AgedBrieStrategy;
    
    beforeEach(() => {
        strategy = new AgedBrieStrategy();
    });

    describe('isExpired', () => {
        it('debe devolver verdadero cuando sellIng es negativo', () => {
            const item = new Item("Aged Brie", -1, 20);
            expect(strategy.isExpired(item)).to.equal(true);
        });

        it('debe devolver falso cuando sellIng es positivo', () => {
            const item = new Item("Aged Brie", 1, 20);
            expect(strategy.isExpired(item)).to.equal(false);
        });
    });
});