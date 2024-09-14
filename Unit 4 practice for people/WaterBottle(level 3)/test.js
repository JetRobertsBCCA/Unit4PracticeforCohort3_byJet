describe('WaterBottle', () => {
    it ('starts with an empty bottle and has a specified capacity', () => {
        const bottle = new WaterBottle(32);

        expect(bottle.currentVolume).toBe(0);
        expect(bottle.capacity).toBe(32);
    });

    it ('adds water up to a certain amount', () => {
        const bottle = new WaterBottle(32);

        bottle.addWater(20);
        expect(bottle.currentVolume).toBe(20);
    });

    it ('does not exceed bottle capacity when adding water', () => {
        const bottle = new WaterBottle(32);

        bottle.addWater(40);
        expect(bottle.currentVolume).toBe(32);
    });

    it ('removes water when drinking from the bottle', () => {
        const bottle = new WaterBottle(32);

        bottle.addWater(25);
        bottle.drinkWater(15);
        expect(bottle.currentVolume).toBe(10);
    });

    it ('does not allow the volume to go below 0 when drinking', () => {
        const bottle = new WaterBottle(32);

        bottle.drinkWater(10);
        expect(bottle.currentVolume).toBe(0);
    });

    it ('empties the bottle completely', () => {
        const bottle = new WaterBottle(32);

        bottle.addWater(25);
        bottle.emptyBottle();
        expect(bottle.currentVolume).toBe(0);
    });

    it ('fills the bottle completely', () => {
        const bottle = new WaterBottle(32);

        bottle.fillBottle();
        expect(bottle.currentVolume).toBe(32);
    });
});
