// Gérer l'événement dans une fenêtre supplémentaire de taille fixe à partir d'une certaine taille d'écran (widthMax = 200, heightMac = 200)

// var titreListe = document.createElement("h1"); // OK
//   titreListe.innerHTML = "Carnet d'Adresses"; // OK
// document.body.appendChild(titreListe); // document.body = null ???

var titre = document.write("<h1>Carnet d'Adresses<h1>")

// Création de la div dans laquelle s'affiche la liste de contacts
var divListe = document.createElement("div");
  divListe.id = "listeContact";
  divListe.className = "txt";
  divListe.backgroundColor = "#999"; // ne marche pas
document.body.appendChild(divListe);
var ul = document.createElement("ul");
  ul.className = "txt";
divListe.appendChild(ul);

// Creation de la liste de contact originale (Bob et Mary)
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

// Création du nom affiché et des icones de suppression et de modification
function printPerson(person) {
  var li = document.createElement("li");
    li.className = "txt";
    li.innerHTML = person.firstName + " " + person.lastName;
    var imgSuppr = document.createElement("img");
      imgSuppr.src = "supprimer.png";
      imgSuppr.width = "15";
      li.appendChild(imgSuppr);
    var imgModif = document.createElement("img");
      imgModif.src = "modifier.png";
      imgModif.width = "15";
      li.appendChild(imgModif);
  ul.appendChild(li);
  console.log(person.firstName + " " + person.lastName);
};

var list = function() {
	for (var i = 0; i < contactList.length; i++) {
		printPerson(contactList[i]);
	};
};

list();


// Fonction de suppression d'un élément de la liste

// Fonction de modification d'un élément de la liste

// Fonction d'affichage complet d'un élément de la liste

// Fonction d'ajout d'un nouvel élément
var divAjout = document.createElement("div");
  divAjout.id = "nvxContact";
  divAjout.className = "txt";
  var p = document.createElement("p");
  divAjout.appendChild(p);
  p.innerHTML = "Ajouter un nouveau contact";
  divAjout.backgroundColor = "#999"; // ne marche pas
document.body.appendChild(divAjout);

var add = function(firstName,lastName,email,phoneNumber) {
  var newContact = new Object();
  newContact.firstName = firstName;
  newContact.lastName = lastName;
  newContact.email = email;
  newContact.phoneNumber = phoneNumber;
  contactList.push(newContact);
  var lastPosition = contactList.length-1
  printPerson(contactList[lastPosition]);
};
add("Isabelle","Leleu", "isolde@toto.com","0123456")

// Fonction de recherche d'un nom dans la liste
// var search = function(lastName) {
// 	for (var i = 0; i < contactList.length; i++) {
// 		if (lastName === contactList[i].lastName) {
// 			printPerson(contactList[i]);
// 			return;
// 		};
// 	};
// };
// search("Jones");
//
