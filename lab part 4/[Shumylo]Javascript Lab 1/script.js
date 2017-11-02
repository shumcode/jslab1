var character = null;
var grant = null;

function startGame() {
  character = {
    wins: 0,
    health: 40,
    healsRemaining: 2,
    name: prompt("Whats your name?"),
    heal: function() {
      this.health += Math.floor((Math.random() * 10) + 1);
      this.healsRemaining--;
    }
  }
  grant = {
    name: prompt("What's the enemy's name?"),
    health: 10
  }
  document.getElementsByClassName("hide")[0].setAttribute("class", "show");
  }

function startCombat(choice) {
  var gameText = "";
  if (choice === "attack") {
    if (character.health > 0 && character.wins < 5) { 
      character.health -= Math.floor((Math.random() * 3) + 1);
      grant.health -= Math.floor((Math.random() * 3) + 1);
      gameText = grant.name + " has " + grant.health + " health left! " + character.name + " has " + character.health + " health left!";
    }
  }
  if (choice === "heal") {
    if (character.health > 0) {
      if (character.healsRemaining !== 0) {
      character.heal();
      character.health -= Math.floor((Math.random() * 3) + 1);
      gameText = grant.name + " has " + grant.health + " health left! " + character.name + " has " + character.health + " health left! " + "You have " + character.healsRemaining + " heal(s) remaining!";
      }
    }
    if (character.healsRemaining <= 0 && character.health < 0) {
      gameText = "You cannot heal, try attacking!";
    }
  }
  if (choice === "quit") {
    gameText = "You got beat so badly you had to quit the game, click again to exit.";
    grant.health = 10;
    character.health = 40;
    character.wins = 0;
    character.healsRemaining = 2;
    var quit = document.getElementById("quit");
    quit.onclick = function() {
      document.getElementsByClassName("show")[0].setAttribute("class", "hide");
    }
  }
  if (character.wins === 5) {
    grant.health = 10;
    character.health = 40;
    character.wins = 0;
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
    var health = document.getElementById("health").value = character.health;
    var eName = document.getElementsByClassName("eName")[0];
    var eHealth = document.getElementById("eHealth").value = grant.health;
    var wins = document.getElementById("wins").value = character.wins;
    var healsRemaining = document.getElementById("heals").value = character.healsRemaining;
    nametext.innerText = "Name";
    name.innerText = character.name;
    healstext.innerText = "Heals Left";
    healthtext.innerText = "Health";
    eNametext.innerText = "Enemy Name";
    eName.innerText = grant.name;
    eHealthtext.innerText = "Enemy Health";
    winstext.innerText = "Wins";
  }
}