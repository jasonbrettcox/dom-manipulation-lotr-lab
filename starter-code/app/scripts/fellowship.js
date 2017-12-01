console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');
var middleEarth = document.createElement("section");

// Part 1


function makeMiddleEarth() {



  middleEarth.setAttribute("id", "middle-earth");
    for (i = 0; i < lands.length; i++) {
  var newLand = document.createElement ("article");
  headerText = document.createElement("h1");
  headerText.innerText = lands[i];
  newLand.appendChild(headerText);
  middleEarth.appendChild(newLand);

}
 body.appendChild(middleEarth);
}

  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body


makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var ul = document.createElement('ul');
  hobbits.forEach(function (hobbits){

    var listElement = document.createElement("li");
    listElement.innerText = hobbits;
     // var listText = document.createTextNode(hobbits);
     // listElement.appendChild(listText);
     listElement.className = "hobbit";
     console.log(listElement);
     ul.appendChild(listElement);
     // shire.appendChild(ul)}{}
     console.log(hobbits);
     })
   
      var lands2 = document.getElementsByTagName('article');
  var shire = lands2[0]
  console.log(shire);
  shire.appendChild(ul);
 }

makeHobbits();








  






// Part 3

function keepItSecretKeepItSafe() {
  var theRing = document.createElement("div");
    theRing.setAttribute("id", "the-ring");

    theRing.className += "magic-imbued-jewelry";
    addEventListener("click", function() {nazgulScreech()})
    console.log(theRing);
    var theHobbits =document.getElementsByClassName("hobbit");
  console.log(theHobbits);
  var Frodo = theHobbits[0];
    Frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo



// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
}
var buddiesAside = document.createElement("aside");
  var buddiesList = document.createElement("ul");
  buddiesAside.appendChild(buddiesList);
  for (i = 0; i<buddies.length; i++){
   var newBuddy = document.createElement('li');
   newBuddy.setAttribute('id', buddies[i])
   newBuddy.innerHTML = buddies[i];
   buddiesList.appendChild(newBuddy);
  }
  console.log()

  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(buddiesAside);
  console.log(buddiesAside);
  console.log(newBuddy);
  console.log(buddiesList);
  
// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var Strider = document.getElementById('Strider');
  Strider.innerHTML = ("Aragorn");
  console.log(Strider)
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
