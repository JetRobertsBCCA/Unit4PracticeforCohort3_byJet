const formatting_options = {
    style: `currency`,
    currency: `USD`,
    minimumFractionDigits: 2,
 }

const dollarString = new Intl.NumberFormat("en-US", formatting_options)

class ATM {
    balance = 0
    isOverdraft = false

    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    deposit(amount) {
        this.balance += amount
        if (this.balance >= 0) {
            this.isOverdraft = false
        }
        return this.balance
    }

    withdraw(amount) {
        if (this.isOverdraft) {
            return `You are overdraft. You cannot withdraw any funds.`
        } else {
            this.balance -= amount
            if (this.balance < 0) {
                this.isOverdraft = true
            }
        return this.balance
        }
    }
    
    checkBalance() {
        let formattedBalance = dollarString.format(this.balance);
        return `${this.firstName} ${this.lastName}'s balance is ${formattedBalance}`;
    }

    checkIsOverdraft() {
        let formattedBalance = dollarString.format(this.balance)
        if (this.isOverdraft) {
        return `${this.firstName} ${this.lastName}'s account is OVERDRAFT by ${formattedBalance}`
    } else {
        return `${this.firstName} ${this.lastName}'s account has ${formattedBalance} funds available to withdraw.`
    }
}

    }
