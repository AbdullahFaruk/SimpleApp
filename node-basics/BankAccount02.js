
//This Log was created for account information purposes:

/*var firstName = 'Abdullah';
var lastName = 'Al Faruk';
var bankAccount = 'Chase Bank';

console.log('Here is the Account Information for: ' + firstName + lastName);
console.log('Bank: ' + bankAccount);*/

/*
--This is the new Bank Account Project 2. We need to create Array of users of Bank Account
We are going to create some functions;
*/

//create an array of accounts

var accounts = [];

//Account Object
//balance
//username

//createAccount fuctions

function createAccount(account){
	accounts.push(account);
	return account;
}


//getAccount functions[Find matching account by using forEach]

function getAccount(username){
	var matchedAccount;

	accounts.forEach(function(account){
		if (account.username === username){
			matchedAccount = account;
		}
	});

	return matchedAccount;

}

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

var aalfarukAccount = createAccount({
	username: 'Abdullah Al Faruk',
	balance: 0
});

deposit(aalfarukAccount, 100);
console.log(getBalance(aalfarukAccount));

withDraw(aalfarukAccount, 20);
console.log(getBalance(aalfarukAccount));

var existingAccount = getAccount('Abdullah Al Faeuk');
console.log(getBalance(aalfarukAccount));

var sufianAccount = createAccount({
	username: 'Sufian',
	balance: 200
});
console.log(accounts);
//console.log(getBalance(sufianAccount));

var existingSufianAccount = getAccount('Sufian');
console.log(existingSufianAccount);
