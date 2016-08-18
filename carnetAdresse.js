var contactList = [];

var newContact = function (firstName,lastName,phoneNumber,email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
};

var bob = new newContact ("Bob","Jones","(650) 777-7777","bob.jones@example.com");
var mary = new newContact ("Mary","Johnson","(650) 888-8888","mary.johnson@example.com");

contactList.push(bob, mary);

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
};

var list = function() {
	for (var i = 0; i < contactList.length; i++) {
		printPerson(contactList[i]);
	};
};

// list();

// /*Create a search function
// then call it passing "Jones"*/
var search = function(lastName) {
	for (var i = 0; i < contactList.length; i++) {
		if (lastName === contactList[i].lastName) {
			printPerson(contactList[i]);
			return;
		};
	};
};
search("Jones");

var add = function(firstName,lastName,email,phoneNumber) {
  var newContact = new Object();
  newContact.firstName = firstName;
  newContact.lastName = lastName;
  newContact.email = email;
  newContact.phoneNumber = phoneNumber;
  contactList.push(newContact);
  list();
};
add("Isabelle","Leleu", "isolde@toto.com","0123456")
