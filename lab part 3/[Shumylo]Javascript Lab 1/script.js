var playing = true;
var userChoice = null;

var character = {
  wins: 5,
  health: 40,
  healsRemaining: 2,
  name: prompt("Enter your name!"),
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  },
  heal: function() {
    if (this.healsRemaining === 0) {
      return;
    }
    if (this.health >= 40) {
      console.log("Your health is at max!");
      return;
    }
    this.health += Math.floor((Math.random() * 10) + 1);
    this.healsRemaining--;
  }
}

var grant = {
  name: "Grant Chirpus",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  }
}

if (character.name != "") {
  startCombat();
}

function startCombat() {
  while (playing) {
    var userChoice = prompt("Would you like to Attack, Heal, or Quit?").toLowerCase();
    if (userChoice === "heal") {
      character.heal();
      console.log("You have " + character.healsRemaining + " heal(s) remaining!");
      console.log(grant.name + " has " + grant.health + " health left.");
    }
    if (userChoice === "attack") {
      grant.health -= grant.generateAttackDamage();
      console.log(grant.name + " has " + grant.health + " health left.");
    }
    if (userChoice === "quit") {
      console.log("The game is over. " + grant.name + " has beaten you so bad that you quit like a baby!");
      grant.health = 10;
      break;
    }
    character.health -= character.generateAttackDamage();
    console.log(character.name + " has " + character.health + " health left!");
    if (character.health <= 0) {
      console.log("The game is over. " + grant.name + " has won!");
      break;
    }
    if (grant.health <= 0) {
      grant.health = 10;
      character.wins--;
      winMessage();
    }
    if (character.wins === 0) {
      console.log("You beat Grant Chirpus!");
      grant.health = 10;
      character.health = 40;
      character.wins = 5;
      break;
    }
  }
}

function winMessage() {
  console.log("You have defeated " + grant.name + "!" +  " You need " + character.wins + " win(s) left!");
}