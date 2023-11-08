'use strict';

class BankAccount{
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }

    balance() {
        let sum = 0
        for(let i=0; i<this.transactions.length; i++){
            sum += this.transactions[i].amount
        }
        return sum
    }

    deposit(amt){
        let depositTransaction = new Transaction(amt, 'Deposit')
        this.amt = amt
        this.transactions.push(depositTransaction)
    }

    charge(amt, payee){
        let chargeTransaction = new Transaction(amt, payee)
        if (amt < 0){
            this.transactions.push(chargeTransaction)
        } else {
            amt = amt * -1
            this.transactions.push(chargeTransaction)
        }

    }

}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, interestRate){
        super(accountNumber)
        super(owner)
        this.interestRate = interestRate
    }
    accrueInterest(){
        let interest = (this.balance() % this.interestRate) + this.balance()
        let interestPayment = new Transaction(amt, 'Interest')
        this.transactions.push(interest)
    }

}

class Transaction{
    constructor(amount, payee){
        this.amount = amount
        this.payee = payee
        this.date = Date.now
    }
}

// unit tests (stolen from video)
if (typeof describe === 'function'){
    const assert = require('assert');

    describe('#testing account creation', function(){
        it('should create a new account correctly', function(){
            let acct1 = new BankAccount('xx4432', 'John Doe')
            assert.equal(acct1.owner, 'John Doe')
            assert.equal(acct1.accountNumber, 'xx4432')
            assert.equal(acct1.transactions.length, 0)
            assert.equal(acct1.balance(), 0)
        })
        it('should create a new savings account correctly', function(){
            let acct3 = new BankAccount('xx9237', 'Jonathan Winters', 5)
            assert.equal(acct3.owner, 'Jonathan Winters')
            assert.equal(acct3.accountNumber, 'xx9237')
            assert.equal(acct3.transactions.length, 0)
            assert.equal(acct3.balance(), 0)
            assert.equal(acct3.interestRate, 5)
        })

    })
    describe('#testing account balancing', function(){
        it('should reflect changes to balances with transactions', function(){
            let acct2 = new BankAccount('xx8390', 'Bob Eubetcha')
            assert.equal(acct2.balance(), 0)
            acct2.deposit(280)
            assert.equal(acct2.balance(), 280)
            acct2.charge(-12.50, "GameStop")
            assert.equal(acct2.balance(), 267.50)
        })
        
    })

    describe('#Testing transaction creation', function(){
        it('Should create a deposit transaction correctly', function(){
            let t1 = new Transaction(30, "Deposit")
            assert.equal(t1.amount, 30)
            assert.equal(t1.payee, 'Deposit')
            assert.notEqual(t1.date, undefined)
            assert.notEqual(t1.date, null)
        })
        it('Should create a charge transaction correctly', function(){
            let t1 = new Transaction(-34.20, "Walmart")
            assert.equal(t1.amount, -34.20)
            assert.equal(t1.payee, 'Walmart')
            assert.notEqual(t1.date, undefined)
            assert.notEqual(t1.date, null)
        })
    })
}