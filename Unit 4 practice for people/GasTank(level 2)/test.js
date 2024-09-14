describe('GasTank', () => {
    it ('starts with 0 fuel in a tank with a specified capacity', () => {
        const gasTank = new GasTank(60);

        expect(gasTank.fuelLevel).toBe(0);
        expect(gasTank.capacity).toBe(60);
    });

    it ('fills the tank with a certain amount of fuel', () => {
        const gasTank = new GasTank(60);

        gasTank.fillFuel(30);
        expect(gasTank.fuelLevel).toBe(30);
    });

    it ('does not overfill the gas tank beyond its capacity', () => {
        const gasTank = new GasTank(60);

        gasTank.fillFuel(70);
        expect(gasTank.fuelLevel).toBe(60);
    });

    it ('consumes fuel when the vehicle drives', () => {
        const gasTank = new GasTank(60);

        gasTank.fillFuel(50);
        gasTank.consumeFuel(20);
        expect(gasTank.fuelLevel).toBe(30);
    });

    it ('does not consume fuel below 0', () => {
        const gasTank = new GasTank(60);

        gasTank.consumeFuel(20);
        expect(gasTank.fuelLevel).toBe(0);
    });

    it ('completely refills the tank', () => {
        const gasTank = new GasTank(60);

        gasTank.fullTank();
        expect(gasTank.fuelLevel).toBe(60);
    });

    it ('warns when fuel level is below 15%', () => {
        const gasTank = new GasTank(60);

        gasTank.fillFuel(8);
        expect(gasTank.lowFuelWarning()).toBe(true);
    });
});
