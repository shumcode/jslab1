var playing = true;
var userChoice = null;

function startGame() {
}

var character = {
  wins: 5,
  health: 40,
  healsRemaining: 2,
  name: "Christian",
  heal: function() {
    if (this.healsRemaining === 0) {
      console.log("You cannot heal!");
      return;
    }
    this.health += Math.floor((Math.random() * 10) + 1);
    this.healsRemaining--;
    console.log("You have " + character.healsRemaining + " heal(s) remaining!");
    console.log(character.name + " has " + character.health + " health left!");
    console.log(grant.name + " has " + grant.health + " health left.");
  }
}
var grant = {
  name: "Grant Chirpus",
  health: 10
}

function startCombat(choice) {
  if (choice === "attack") {
    character.health -= Math.floor((Math.random() * 3) + 1);
    grant.health -= Math.floor((Math.random() * 3) + 1);
    console.log(grant.name + " has " + grant.health + " health left.");
    console.log(character.name + " has " + character.health + " health left!");
  }
  if (choice === "heal") {
    character.heal();
    character.health -= Math.floor((Math.random() * 3) + 1);
  }
  if (choice === "quit") {
    console.log("quit");
    return;
  }
  if (character.wins === 0) {
    grant.health = 10;
    character.health = 40;
    console.log("You beat Grant Chirpus!");
  }
  if (character.health <= 0) {
    console.log("The game is over. " + grant.name + " has won!");
  }
  if (grant.health <= 0) {
    character.wins++;
    grant.health = 10;
    console.log("You beat grant!");
  }
  playerstats();
  function gameText() {

  }
  function playerstats() {
    var name = document.getElementsByClassName("name")[0];
    var health = document.getElementsByClassName("health")[0];
    var eName = document.getElementsByClassName("eName")[0];
    var eHealth = document.getElementsByClassName("eHealth")[0];
    var wins = document.getElementsByClassName("wins")[0];
    var healsRemaining = document.getElementsByClassName("healsRemaining")[0];
    name.innerText = character.name;
    healsRemaining.innerText = character.healsRemaining;
    health.innerText = character.health;
    eName.innerText = grant.name;
    eHealth.innerText = grant.health;
    wins.innerText = character.wins;
  }
}




//   var character = {
//   wins: 5,
//   health: 40,
//   healsRemaining: 2,
//   name: prompt("Enter your name!"),
//   generateAttackDamage: function() {
//     return Math.floor((Math.random() * 3) + 1);
//   },
//   heal: function() {
//     if (this.healsRemaining === 0) {
//       return;
//     }
//     this.health += Math.floor((Math.random() * 10) + 1);
//     this.healsRemaining--;
//   }
// }

// var grant = {
//   name: "Grant Chirpus",
//   health: 10,
//   generateAttackDamage: function() {
//     return Math.floor((Math.random() * 3) + 1);
//   }
// }




// if (character.name != "") {
//   startCombat();
// }

// function startCombat(choice) {
//   while (playing) {
//     var userChoice = prompt("Would you like to Attack, Heal, or Quit?").toLowerCase();
//     if (userChoice === "heal") {
//       character.heal();
//       console.log("You have " + character.healsRemaining + " heal(s) remaining!");
//       console.log(grant.name + " has " + grant.health + " health left.");
//     }
//     if (userChoice === "attack") {
//       grant.health -= grant.generateAttackDamage();
//       console.log(grant.name + " has " + grant.health + " health left.");
//     }
//     if (userChoice === "quit") {
//       console.log("The game is over. " + grant.name + " has beaten you so bad that you quit like a baby!");
//       grant.health = 10;
//       break;
//     }
//     character.health -= character.generateAttackDamage();
//     console.log(character.name + " has " + character.health + " health left!");
//     if (character.health <= 0) {
//       console.log("The game is over. " + grant.name + " has won!");
//       break;
//     }
//     if (grant.health <= 0) {
//       grant.health = 10;
//       character.wins--;
//       winMessage();
//     }
//     if (character.wins === 0) {
//       console.log("You beat Grant Chirpus!");
//       grant.health = 10;
//       character.health = 40;
//       character.wins = 5;
//       break;
//     }
//   }
// }

// function winMessage() {
//   console.log("You have defeated " + grant.name + "!" +  " You need " + character.wins + " win(s) left!");
// }