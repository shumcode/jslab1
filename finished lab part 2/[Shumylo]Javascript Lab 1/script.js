var userHealth = 40;
var enemyHealth = 10;
var wins = 3;
var enemyDamage = 0;
var userDamage = 0;
var playing = true;
var user = null;
var quit = null;
var damage = null;
var whichEnemy = null;
var weapon = null;
var prompt0 = null;
var sword = null;
var bow = null;
var staff = null;

function startGame() {
  prompt0 = prompt("Would you like to play an RPG?", "yes or no").toLowerCase();
  if (prompt0 === "yes") {
    user = prompt("What is your name?");
    if (user != false) {
      whichEnemy = prompt("Who do you want to fight?", "grant or ultraboss").toLowerCase();
    }
    if (whichEnemy === "ultraboss") {
      enemyHealth = 20;
      weapon = prompt("You'll need a weapon against the ULTRABOSS" , "sword, bow, staff").toLowerCase();
    }
    console.log("The battle begins!");
    startCombat();
  }
}

function startCombat() {
  while (playing) {
    quit = prompt("Would you like to Attack or Quit?", "Attack or Quit").toLowerCase();
    if (quit === "quit") {
      break;
    }
    if (quit === "attack") {
      getDamage();
      console.log(user + " has " + userHealth + " health left.");
      if (whichEnemy === "grant") {
        console.log("Grant the Mighty Chicken has " + enemyHealth + " health left.");
      } else {
        console.log("THE ULTRABOSS has " + enemyHealth + " health left.");
      }
      if (enemyHealth <= 0) {
        if (whichEnemy === "ultraboss") {
          enemyHealth = 20;
        } else {
          enemyHealth = 10;
        }
        wins--;
        winMessage();
      }
      if (userHealth <= 0) {
        console.log("The game is over. " + whichEnemy + " has won!");
        playing = false;
      }
      if (wins === 0) {
        console.log(user + " has defeated " + whichEnemy + " with " + userHealth + " health left!");
        break;
      }
    }
  }
}

function winMessage() {
  console.log("You have defeated " + whichEnemy + "!" +  " You need " + wins + " win(s) left!");
}

// function whichEnemy() {
//   enemies = Math.floor((Math.random() * 2) + 1);
//   if (enemies = 2) {
//     enemyHealth = 20;
//   }
// }

function getDamage() {
  if (weapon === "sword") {
    userDamage = Math.floor((Math.random() * 10) + 3);
  }
  if (weapon === "bow") {
    userDamage = Math.floor((Math.random() * 15) + 1);
  }
  if (weapon === "staff") {
    userDamage = Math.floor((Math.random() * 7) + 5);
  }
  enemyDamage = Math.floor((Math.random() * 5) + 1);
  enemyHealth -= userDamage;
  userHealth -= enemyDamage;
}

