var firstName = 'Abdullah';
var lastName = 'Al Faruk';
var bankAccount = 'Chase Bank';

console.log('Here is the Account Information for: ' + firstName + lastName);
console.log('Bank: ' + bankAccount);

var account = {
	balance: 100
};


//create deposit functions for Bank

function deposit(account, amount){
	account.balance += amount;
}

//create withdraw function for Bank

function withDraw(account, amount){
	account.balance -= amount;
}

//get the Balance for the Bank account

function getBalance(account){
	return account.balance;
}

deposit(account, 100);
console.log('Your Current Balance is: ' + getBalance(account));


withDraw(account, 20);
console.log('After WithDrawn your Balance is: ' + getBalance(account));


