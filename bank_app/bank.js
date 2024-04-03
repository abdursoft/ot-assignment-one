/**
 * Define a class for bank account
 * creating an instance with the required argument
 * implemented methods are deposite,withdraw,getBalance,displayAccountInfo
 */


class BankAccount{

    // required paramater you have to pass when you create an object 
    constructor(accountNumber,ownerName,Balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.Balance = Balance;
    }

    // deposite your credits in your primary balance 
    deposite(amount){
        if((Number(amount) || Number(amount) == 0) && amount >= 0){
            this.Balance = (this.Balance + Number(amount)).toFixed(2);
            console.log(`After dipositted ${amount} credits, your balance is ${this.Balance}`);
        }else{
            console.log('String or Negative amount couldn\'t deposite');
        }
    }

    // withdraw a specific amount form your available balance 
    withdraw(amount){
        if((Number(amount) || Number(amount) == 0) && amount >= 0){
            if(amount <= this.Balance){
                this.Balance = (this.Balance - Number(amount)).toFixed(2);
                console.log(`After withdrawal ${amount} credits, your balance is ${this.Balance}`);
            }else{
                console.log('Insufficient funds');
            }
        }else{
            console.log('String or Negative amount couldn\'t withdraw');
        }
    }

    // check your available balance from account 
    getBalance(){
        console.log(`Your current balance is ${this.Balance}`);
    }

    // display your name,accountNumber and balance from your account 
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: ${this.Balance}`);
    }
}

console.warn('Bank account instance one');
const account1 = new BankAccount(1001,'Abdur Rahim',1000);
      account1.deposite(0);
      account1.withdraw(100);
      account1.getBalance();
      account1.displayAccountInfo();


console.log('\n \n');

console.warn('Bank account instance two');
const account2 = new BankAccount(1004,'Rony Me',4900);
      account2.deposite(2500.39);
      account2.withdraw(8000);
      account2.getBalance();
      account2.displayAccountInfo();
