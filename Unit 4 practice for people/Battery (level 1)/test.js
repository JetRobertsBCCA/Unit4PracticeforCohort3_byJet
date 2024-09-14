describe('Battery', () => {
    it ('starts with a default of 0 charge and a maximum capacity', () => {
        const battery = new Battery(100);

        expect(battery.charge).toBe(0);
        expect(battery.capacity).toBe(100);
    });

    it ('charges the battery up to a certain level', () => {
        const battery = new Battery(100);

        battery.chargeBattery(50);
        expect(battery.charge).toBe(50);
    });

    it ('does not exceed the battery capacity when charging', () => {
        const battery = new Battery(100);

        battery.chargeBattery(150);
        expect(battery.charge).toBe(100);
    });

    it ('discharges the battery by using some charge', () => {
        const battery = new Battery(100);

        battery.chargeBattery(75);
        battery.useCharge(25);
        expect(battery.charge).toBe(50);
    });

    it ('does not allow discharging below 0', () => {
        const battery = new Battery(100);

        battery.useCharge(50);
        expect(battery.charge).toBe(0);
    });

    it ('fully discharges the battery', () => {
        const battery = new Battery(100);

        battery.chargeBattery(75);
        battery.drain();
        expect(battery.charge).toBe(0);
    });

    it ('fully charges the battery', () => {
        const battery = new Battery(100);

        battery.fullCharge();
        expect(battery.charge).toBe(100);
    });
});
