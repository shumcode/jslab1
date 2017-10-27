var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playing = true;
var prompt0 = prompt("Would you like to play an RPG?", "yes or no").toLowerCase();

if (prompt0 === "yes") {
  var user = prompt("what is your name?");
  while (playing) {
    userHealth -= Math.floor((Math.random() * 2) + 1);
    grantHealth -= Math.floor((Math.random() * 2) + 1);
    console.log(user + " has " + userHealth + " health left.");
    console.log("Grant the Mighty Chicken has " + grantHealth + " health left.");
    if (grantHealth <= 0) {
      grantHealth = 10;
      wins++;
    }
    if (userHealth <= 0) {
      console.log("The game is over. Grant the Mighty Chicken has won!");
      playing = false;
    }
    if (wins === 3) {
      console.log(user + " has defeated Grant the Mighty Chicken with " + userHealth + " health left!");
      playing = false;
    }
  }
}