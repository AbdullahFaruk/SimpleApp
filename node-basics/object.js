var person = {};

person.firstName = 'Abdullah';
person.lastName = 'Al Faruk';


function getUserName(person){
	console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

getUserName(person);