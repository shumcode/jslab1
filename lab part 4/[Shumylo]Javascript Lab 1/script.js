
var userChoice = null;

function startGame() {
}

var character = {
  wins: 5,
  health: 40,
  healsRemaining: 2,
  name: "Christian",
  heal: function() {
    this.health += Math.floor((Math.random() * 10) + 1);
    this.healsRemaining--;
  }
}
var grant = {
  name: "Grant Chirpus",
  health: 10
}

function startCombat(choice) {
  var gameText = "";
  if (choice === "attack") {
    character.health -= Math.floor((Math.random() * 3) + 1);
    grant.health -= Math.floor((Math.random() * 3) + 1);
    gameText = grant.name + " has " + grant.health + " health left! " + character.name + " has " + character.health + " health left!";
  }
  if (choice === "heal") {
    if (character.healsRemaining !== 0) {
    character.heal();
    character.health -= Math.floor((Math.random() * 3) + 1);
    gameText = grant.name + " has " + grant.health + " health left! " + character.name + " has " + character.health + " health left! " + "You have " + character.healsRemaining + " heal(s) remaining!";
    }
    if (character.healsRemaining <= 0) {
      gameText = "You cannot heal!";
    }
  }
  if (choice === "quit") {
    gameText = "You got beat so badly you had to quit the game!";
    return;
  }
  if (character.wins === 0) {
    grant.health = 10;
    character.health = 40;
    gameText = "You beat " + enemy.name + " and won the entire vidya game!";
  }
  if (character.health <= 0) {
    gameText = "The game is over. " + grant.name + " has won!";
  }
  if (grant.health <= 0) {
    character.wins++;
    gameText = grant.name + " lost a game. You need to win " + character.wins + " more games to triumph!";
    grant.health = 10;
  }
  playerstats();
  statsInfo(gameText);
  function statsInfo(gameText) {
    var gamemessage = document.getElementsByClassName("gamemessage")[0];
    gamemessage.innerText = gameText;
    }
  function playerstats() {
    var nametext = document.getElementsByClassName("nametext")[0];
    var healthtext = document.getElementsByClassName("healthtext")[0];
    var healstext = document.getElementsByClassName("healstext")[0];
    var winstext = document.getElementsByClassName("winstext")[0];
    var eNametext = document.getElementsByClassName("eNametext")[0];
    var eHealthtext = document.getElementsByClassName("eHealthtext")[0];
    var name = document.getElementsByClassName("name")[0];
    var health = document.getElementsByClassName("health")[0];
    var eName = document.getElementsByClassName("eName")[0];
    var eHealth = document.getElementsByClassName("eHealth")[0];
    var wins = document.getElementsByClassName("wins")[0];
    var healsRemaining = document.getElementsByClassName("healsRemaining")[0];
    nametext.innerText = "Name";
    name.innerText = character.name;
    healstext.innerText = "Heals Left";
    healsRemaining.innerText = character.healsRemaining;
    healthtext.innerText = "Health";
    health.innerText = character.health;
    eNametext.innerText = "Name";
    eName.innerText = grant.name;
    eHealthtext.innerText = "Health";
    eHealth.innerText = grant.health;
    winstext.innerText = "Wins";
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