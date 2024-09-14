describe('BankAccount', () => {
    it ('starts with 0 balance and a maximum overdraft limit', () => {
        const account = new BankAccount(1000);

        expect(account.balance).toBe(0);
        expect(account.overdraftLimit).toBe(1000);
    });

    it ('allows deposits to the account', () => {
        const account = new BankAccount(1000);

        account.deposit(500);
        expect(account.balance).toBe(500);
    });

    it ('allows withdrawals from the account', () => {
        const account = new BankAccount(1000);

        account.deposit(500);
        account.withdraw(200);
        expect(account.balance).toBe(300);
    });

    it ('does not allow withdrawal beyond overdraft limit', () => {
        const account = new BankAccount(1000);

        account.withdraw(1200);
        expect(account.balance).toBe(0);
        expect(account.overdraftStatus()).toBe(true);
    });

    it ('charges overdraft fees if account goes into overdraft', () => {
        const account = new BankAccount(1000);

        account.withdraw(800);
        expect(account.balance).toBe(-800);
        account.applyOverdraftFee();
        expect(account.balance).toBe(-850);  // $50 fee applied
    });

    it ('prevents deposits if account balance is locked', () => {
        const account = new BankAccount(1000);

        account.lockAccount();
        expect(() => account.deposit(200)).toThrow("Account is locked");
    });

    it ('allows unlocking the account and resuming operations', () => {
        const account = new BankAccount(1000);

        account.lockAccount();
        expect(() => account.deposit(200)).toThrow("Account is locked");

        account.unlockAccount();
        account.deposit(200);
        expect(account.balance).toBe(200);
    });
});
