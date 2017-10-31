var playing = true;
var userChoice = null;

var character = {
  wins: 0,
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
    this.healsRemaining--;
    this.health += Math.floor((Math.random() * 10) + 1);
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
  startGame();
}

function startGame() {
  while (playing) {
    var userChoice = prompt("Would you like to Attack, Heal, or Quit?").toLowerCase();
    character.health -= character.generateAttackDamage();
    console.log(character.name + " has " + character.health + " health left!");
    if (userChoice === "attack") {
      grant.health -= grant.generateAttackDamage();
      console.log(grant.name + " has " + grant.health + " health left.");
    }
    if (userChoice === "heal") {
      character.heal();
      console.log(grant.name + " has " + grant.health + " health left.");
      console.log("You have " + character.healsRemaining + " heal(s) remaining!");
    }
    if (userChoice === "quit") {
      console.log("The game is over. " + grant.name + " has prevailed!");
      break;
    }
    if (character.health <= 0) {
      console.log("The game is over. " + grant.name + " has won!");
      break;
    }
    if (grant.health <= 0) {
      grant.health = 10;
      character.wins++;
      winMessage();
    }
    if (character.wins === 5) {
      console.log("You beat Grant Chirpus!");
      break;
    }
    if (character.healsRemaining === 0 && userChoice === "heal") {
    
    }
  }
}

function winMessage() {
  console.log("You have defeated " + grant.name + "!" +  " You need " + character.wins + " win(s) left!");
}










// startGame();


// function startGame() {
//   var nameEntry = prompt("Enter your name.").toLowerCase();
//   if (nameEntry != "") {
//     var attackDecision = prompt("Attack, Heal, or Quit!").toLowerCase();
//   }
// }

// class Character {
//   constructor(name, health, healsRemaining, wins) {
//     this.name = name;
//     this.health = health;
//     this.healsRemaining = healsRemaining;
//     this.wins = wins;
//   }
//   generateAttackDamage () {
//     delete this.healsRemaining;
//     delete this.wins;
//     return Math.floor((Math.random() * 3) + 1);
//   }
//   heal() {
//     var healingpoints = Math.floor((Math.random() * 10) + 1);
//     this.health += healingpoints;
//     this.healsRemaining - 1;
//   }
// }

// var user = new Character(startGame(), 40, 2, null);
// var grant = new Character("Grant Chirpus", 10, null, null);

// grant.generateAttackDamage();

// console.log(grant);
// console.log(user);

// function startGame() {
//   prompt0 = prompt("Would you like to play an RPG?", "yes or no").toLowerCase();
//   if (prompt0 === "yes") {
//     user = prompt("What is your name?");
//     if (user != false) {
//       whichEnemy = prompt("Who do you want to fight?", "grant or ultraboss").toLowerCase();
//     }
//     if (whichEnemy === "ultraboss") {
//       enemyHealth = 20;
//       weapon = prompt("You'll need a weapon against the ULTRABOSS" , "sword, bow, staff").toLowerCase();
//     }
//     console.log("The battle begins!");
//     startCombat();
//   }
// }

// function startCombat() {
//   while (playing) {
//     quit = prompt("Would you like to Attack, Heal, or Quit?", "Attack, Heal, or Quit").toLowerCase();
//     if (quit === "quit") {
//       userHealth = 40;
//       enemyHealth = 10;
//       wins = 5;
//       console.log("See you later, try again!");
//       break;
//     }
//     if (quit === "heal") {
//       character.healMe();
//       console.log(user + " has " + userHealth + " health left.");
//     }
//     if (quit === "attack") {
//       getDamage();
//       console.log(user + " has " + userHealth + " health left.");
//       if (whichEnemy === "grant") {
//         console.log("Grant the Mighty Chicken has " + enemyHealth + " health left.");
//       } else {
//         console.log("THE ULTRABOSS has " + enemyHealth + " health left.");
//       }
//       if (enemyHealth <= 0) {
//         if (whichEnemy === "ultraboss") {
//           enemyHealth = 20;
//         } else {
//           enemyHealth = 10;
//         }
//         wins--;
//         winMessage();
//       }
//       if (userHealth <= 0) {
//         console.log("The game is over. " + whichEnemy + " has won!");
//         userHealth = 40;
//         enemyHealth = 10;
//         wins = 5;
//         break;
//       }
//       if (wins === 0) {
//         console.log(user + " has defeated " + whichEnemy + " with " + userHealth + " health left!");
//         userHealth = 40;
//         enemyHealth = 10;
//         wins = 5;
//         break;
//       }
//     }
//   }
// }