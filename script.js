"use strict";

let playerName = undefined;
let playerhp = 40;
let granthp = 10;
let wins = 0;

function startgame() {
    let game = prompt("Do you want to play a game?");
    if (game === "yes") {
        playerName = prompt("What is your combatant's name?");
        console.log(`Let's get ready to rumble! ${playerName}'s starting health is ${playerhp} and Grant's starting health is ${granthp}.`);
    }
    startcombat();
}

function startcombat() {
    while (granthp > 0) {
        console.log(`${playerName}'s remaining health: ${playerhp -= getdamage()}`);
        console.log(`Grant's remaining health: ${granthp -= getdamage()}`);


        if (wins === 2 && granthp <= 0) {
            console.log(`We have a new Champion ${playerName} wins!`)
            break;
        } else if (playerhp <= 0) {
            console.log(`You have been found wanting. Game Over - Grant Won!`);
            break;
        } else if (granthp <= 0) {
            wins++;
            granthp = 10;
            console.log(`${playerName} wins: you now have ${wins} wins.`);
            rematch();
        }
    }
}

function getdamage() {
    return Math.floor((Math.random()* 5) + 1);
}

function gethealth() {
    return Math.floor((Math.random()* 10) + 1);
}

function rematch() {
    let replay = prompt("Do you want to attack or quit?");
    if (replay === "attack") {
        console.log(`${playerName} shouts "It's only a flesh wound!" and adds health: ${playerhp             += gethealth()}`);
        console.log(`Grant summons strength and adds health: ${granthp += gethealth()}`);
        startcombat();

    } else {
        console.log("Your cowardice surprises me.");
        return startgame();        
    }   
}

// function rematch() {
//     let replay = prompt("Do you want to attack or quit?");
//     if (replay !== "attack") {
//         console.log("Your cowardice surprises me.");
//         break;

//     } else (replay === "attack") {
//         console.log(`${playerName} shouts "It's only a flesh wound!" and adds health: ${playerhp += gethealth()}`);
//         console.log(`Grant summons strength and adds health: ${granthp += gethealth()}`);
//         startcombat();
//     }   
// }

startgame();

