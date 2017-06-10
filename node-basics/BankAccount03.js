var accounts = [];

function createAccount(account){
	accounts.push(account);
	return account;
}

function getAccount(username){
	var matchedAccount;

	for (var i = 0; i < accounts.length; i++){
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}

	/*accounts.forEach(function(account){
		if (account.username === username){
			matchedAccount = account;
		}
	});*/

	return matchedAccount;

}

//create deposit functions for Bank

function deposit(account, amount){
	if(typeof amount === 'number'){
	   account.balance += amount;
	}else{
		console.log('Deposit Failed, amount is not a number');
	}
	
}

//create withdraw function for Bank

function withDraw(account, amount){
	if(typeof amount === 'number'){
		account.balance -= amount;
	}else{
		console.log('Withdraw Failed, amount is not a number');
	}
	
}

//get the Balance for the Bank account

function getBalance(account){
	return account.balance;
}

function createBalanceGetter(account){
	return function () {
		return account.balance;
	}
}

var abdullah = createAccount({
	username: 'Abdullah Al Faruk',
	balance: 100
});

deposit(abdullah, 100);
withDraw(abdullah, 50);

var abdullah2 = getAccount('Abdullah Al Faruk');
var getAbdullah2Balance = createBalanceGetter(abdullah2);

console.log(abdullah2);















