var userHealth = 40;
var grantHealth = 10;
var wins = 0;
var playing = true;

// var prompt1 = prompt("Would you like to play an RPG?");

// if (prompt1 === "yes") {
//   var user = prompt("Enter your name.");
// }


while (playing) {
  userHealth -= Math.floor((Math.random() * 2) + 1);
  grantHealth -= Math.floor((Math.random() * 2) + 1);
  console.log(userHealth);
  console.log(grantHealth + "g");
  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;
  }
  if (userHealth <= 0) {
    console.log("The game is over.");
    playing = false;
  }
  if (wins = 3) {
    playing = false;
  }
}