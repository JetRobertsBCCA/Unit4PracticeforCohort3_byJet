describe('Dragon', () => {

    it('starts with initial attributes like health, energy, and fire power', () => {
        const dragon = new Dragon();

        expect(dragon.health).toBe(100);
        expect(dragon.energy).toBe(100);
        expect(dragon.firePower).toBe(50);
        expect(dragon.isAlive()).toBe(true);
    });

    it('can fly, reducing energy and increasing fatigue', () => {
        const dragon = new Dragon();

        dragon.fly();
        expect(dragon.energy).toBeLessThan(100);
        expect(dragon.fatigue).toBeGreaterThan(0);
    });

    it('cannot fly when energy is below 10%', () => {
        const dragon = new Dragon();

        dragon.energy = 9;
        expect(() => dragon.fly()).toThrow("Too tired to fly");
    });

    it('can breathe fire, reducing fire power and energy', () => {
        const dragon = new Dragon();

        dragon.breatheFire();
        expect(dragon.firePower).toBeLessThan(50);
        expect(dragon.energy).toBeLessThan(100);
    });

    it('cannot breathe fire if fire power is below 10%', () => {
        const dragon = new Dragon();

        dragon.firePower = 4;
        expect(() => dragon.breatheFire()).toThrow("Not enough fire power");
    });

    it('regenerates health and energy over time if not fatigued', () => {
        const dragon = new Dragon();

        dragon.rest();
        expect(dragon.health).toBeGreaterThan(100);
        expect(dragon.energy).toBeGreaterThan(100);
    });

    it('becomes exhausted after 3 consecutive actions and cannot act until rested', () => {
        const dragon = new Dragon();

        dragon.fly();
        dragon.breatheFire();
        dragon.fly();
        expect(() => dragon.breatheFire()).toThrow("Dragon is exhausted");
    });

    it('enters rage mode when health drops below 20%, increasing fire power but reducing energy rapidly', () => {
        const dragon = new Dragon();

        dragon.takeDamage(85);
        expect(dragon.isInRageMode()).toBe(true);
        expect(dragon.firePower).toBeGreaterThan(50);
        expect(dragon.energyDecayRate).toBeGreaterThan(1); // Rage mode drains energy faster
    });

    it('can recover from rage mode if health is restored above 50%', () => {
        const dragon = new Dragon();

        dragon.takeDamage(85);
        expect(dragon.isInRageMode()).toBe(true);
        dragon.heal(50);
        expect(dragon.isInRageMode()).toBe(false);
        expect(dragon.firePower).toBeLessThan(50); // Back to normal fire power
    });

    it('dies if health reaches 0, and can no longer perform actions', () => {
        const dragon = new Dragon();

        dragon.takeDamage(100);
        expect(dragon.isAlive()).toBe(false);
        expect(() => dragon.fly()).toThrow("Dragon is dead");
        expect(() => dragon.breatheFire()).toThrow("Dragon is dead");
    });

    it('has a record of all actions taken in sequence', () => {
        const dragon = new Dragon();

        dragon.fly();
        dragon.breatheFire();
        dragon.rest();
        expect(dragon.actionLog).toEqual(["fly", "breatheFire", "rest"]);
    });

    it('cannot perform any actions if its health is too low (< 5%) and needs healing', () => {
        const dragon = new Dragon();

        dragon.takeDamage(96);
        expect(dragon.health).toBe(4);
        expect(() => dragon.fly()).toThrow("Too weak to perform any actions");
        dragon.heal(10);
        expect(dragon.health).toBe(14);
        expect(() => dragon.fly()).not.toThrow();
    });

    it('enters hibernation when energy and health both fall below 10%, and recovers slowly over time', () => {
        const dragon = new Dragon();

        dragon.takeDamage(92);
        dragon.energy = 8;
        expect(dragon.isHibernating()).toBe(true);
        dragon.passTime();  // Simulate time passing
        expect(dragon.health).toBeGreaterThan(8);
        expect(dragon.energy).toBeGreaterThan(8);
    });
});
