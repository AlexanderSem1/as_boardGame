let playerOne = {
    name: localStorage.getItem('playerOne'),
    isTurn: true, 
    tilePosition: 0,
    // newTilePosition: function(dice) {
    //     this.tilePosition = this.tilePosition +  dice 
    // },
    icon: ''
}

let playerTwo = {
    name: localStorage.getItem('playerTwo'),
    isTurn: false,
    tilePosition: 0,
    //newTilePosition: function (dice) {
      //  this.tilePosition = this.tilePosition + dice
    //},
    icon: ''
}

const trapOne = {
    penalty: 3,
    message: 'You have been captured by White-walkers, go back 4 steps!', 
    Position: 5
}

const trapTwo = {
    penalty: 4,
    message: 'You are not allowed to pass the gates yet, go back 8 steps and try again!',
    Position: 8
}

const trapThree = {
    penalty: 15,
    message: 'You killed a Mini, go back 1 steps!',
    Position: 18
}

const trapFour = {
    penalty: 3,
    message: 'You killed innocent pesant, go back 3 steps!',
    Position: 24
}

const trapFive = {
    penalty: 3,
    message: 'Why are you here?!? Go back 12 steps!',
    Position: 28
}



function movePlayerAndRollDice() {

    let whichPlayersTurn = {};

    if (playerOne.isTurn === true) {
        whichPlayersTurn = playerOne;
    }
    else {
        whichPlayersTurn = playerTwo; 
    }

    if (playerOne.tilePosition !== playerTwo.tilePosition) {
        document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
    } else {
        if (playerOne.isTurn === true) {
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<img src="${playerTwo.icon}" />`;
        } else {
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<img src="${playerOne.icon}" />`;
        }
    }

    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    document.getElementById('dice').innerHTML = ''; 
    // document.getElementById('dice').innerHTML = `<p>${diceRoll}</p>`; 
    document.getElementById('dice').innerHTML = `<p>${whichPlayersTurn.name} has rolled ${diceRoll}</p>`;
   

    if (diceRoll === 6) {
        // player has another turn
        
        alert('You have another turn'); 
        //whichPlayersTurn.newTilePosition(6);
        whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition + diceRoll;
        console.log(whichPlayersTurn.tilePosition);
        movePlayerAndRollDice(); 
    }

    else {
        whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition + diceRoll;
        console.log(whichPlayersTurn.name);
        console.log(whichPlayersTurn.tilePosition);
        document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;    
    }

    if (whichPlayersTurn.tilePosition === 30 || whichPlayersTurn.tilePosition === null ) {
        console.log(whichPlayersTurn.tilePosition)
        alert(whichPlayersTurn.name + 'has won the game')
    }
    

function runTrap() {
    switch (whichPlayersTurn.tilePosition) {
        case trapOne.Position:
            alert(trapOne.message);
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
            whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapOne.penalty;
            document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;
        break; 
        default: 
    }

}
runTrap(); 


    if (playerOne.isTurn === true) {
        playerOne.isTurn = false;
        playerTwo.isTurn = true;
    }
    else {
        playerOne.isTurn = true;
        playerTwo.isTurn = false;
    }
}



