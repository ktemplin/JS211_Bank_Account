'use strict';
const assert = require('assert');

class BankAccount{
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }

    balance() {

    }

    deposit(amt){

    }

    charge(payee, amt){

    }

}

class Transaction{
    constructor(amount, payee){
        this.date = Date.now
        this.amount = amount
        this.payee = payee
    }
}

// unit tests
if (typeof describe === 'function'){
    const assert = require('assert');

    describe('#testing account creation', function(){
        it('should create a new account correctly', function(){
            let acct1 = new BankAccount('xx4432', 'James Doe')
            assert.equal(acct1.owner, 'James Doe')
            assert.equal(acct1.accountNumber, 'xx4432')
            assert.equal(acct1.transactions.length, 0)
        })
    })
}