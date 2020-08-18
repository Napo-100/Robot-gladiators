var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAtack = 10;
var playerMoney = 10;

// Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var enemyNames =  ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;  
var enemyAttack = 12;



var fight = function(enemyNames) {
    while(enemyHealth > 0 && playerHealth > 0) {
        //ask user if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");

        //if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure You'd like to quit?");
        
        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney); 
            break;      
        }
    }


    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAtack;
    console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth  + " health remaining."  
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }


    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'enemyHealth' variable
    playerHealth = playerHealth - enemyAttack;   
    console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
         );

        //check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died :(");
        //leave while() loops if player is dead
        break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } 
};   


for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}

