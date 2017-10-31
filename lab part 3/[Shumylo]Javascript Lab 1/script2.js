var userHealth = 40;
var enemyHealth = 10;
var wins = 5;
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
var heal = 2;

var character = {
  name: user,
  health: userHealth,
  healsRemaining: 2,
  wins: wins,
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  },
  healMe: function() {
    var healNum = Math.floor((Math.random() * 10) + 1);
    userHealth + healNum;
  }
};

var grant = {
  name: "Grant Chirpus",
  health: enemyHealth,
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  }
};

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
    quit = prompt("Would you like to Attack, Heal, or Quit?", "Attack, Heal, or Quit").toLowerCase();
    if (quit === "quit") {
      userHealth = 40;
      enemyHealth = 10;
      wins = 5;
      console.log("See you later, try again!");
      break;
    }
    if (quit === "heal") {
      character.healMe();
      console.log(user + " has " + userHealth + " health left.");
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
        userHealth = 40;
        enemyHealth = 10;
        wins = 5;
        break;
      }
      if (wins === 0) {
        console.log(user + " has defeated " + whichEnemy + " with " + userHealth + " health left!");
        userHealth = 40;
        enemyHealth = 10;
        wins = 5;
        break;
      }
    }
  }
}

function winMessage() {
  console.log("You have defeated " + whichEnemy + "!" +  " You need " + wins + " win(s) left!");
}

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
  userDamage = Math.floor((Math.random() * 5) + 1);
  enemyHealth -= userDamage;
  userHealth -= enemyDamage;
}



var character = {
  name: user,
  health: 40,
  healsRemaining: 2,
  wins: wins,
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  },
  healMe: function() {
    var healNum = Math.floor((Math.random() * 10) + 1);
    userHealth + healNum;
  }
};

var grant = {
  name: "Grant Chirpus",
  health: enemyHealth,
  generateAttackDamage: function() {
    return Math.floor((Math.random() * 3) + 1);
  }
};