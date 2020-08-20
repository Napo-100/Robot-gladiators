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



var fight = function(enemyName) {
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
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth  + " health remaining."  
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        }   else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }


    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'enemyHealth' variable
    playerHealth = playerHealth - enemyAttack;   
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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


var startGame = function() {
    // reset player stats
    playerHealth = 100;
    playerAtack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
        
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame(); 
};

// fucntion to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0) {
        window.alert("Greath job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    

    //ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start the game when the page loads
startGame();
