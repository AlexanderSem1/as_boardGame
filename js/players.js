let playerOne = {
    name: 'Jon',
    isTurn: true, 
    tilePosition: 1,
    newTilePosition: function(dice) {
        this.tilePosition = this.tilePosition +  dice 
    },
    icon: ''
}

let playerTwo = {
    name: 'name',
    isTurn: false,
    tilePosition: 1,
    newTilePosition: function (dice) {
        this.tilePosition = this.tilePosition + dice
    },
    icon: ''
}



function movePlayerAndRollDice() {

    let whichPlayersTurn;

    if (playerOne.isTurn === true) {
        whichPlayersTurn = playerOne;
        // document.getElementById('tile1').innerHTML = ''
        document.getElementById('tile' + playerOne.tilePosition).innerHTML += `<img src=${playerOne.icon}>` 
    }
    else {
        whichPlayersTurn = playerTwo
        document.getElementById('tile' + playerTwo.tilePosition).innerHTML += `<img src=${playerTwo.icon}>` 
    }

    let diceRoll = (Math.floor(Math.random() * 6) + 1);
    document.getElementById('dice').innerHTML = ''; 
    document.getElementById('dice').innerHTML = ` 
    <p>${diceRoll}</p>
`

    if (diceRoll === 6) {
        // player has another turn
        alert('You have another turn')
        whichPlayersTurn.newTilePosition(6)
        // Move player here to tile
    }
    else {
        whichPlayersTurn.newTilePosition(diceRoll)
        // move player to tile
        if (playerOne.isTurn === true) {
            playerOne.isTurn = false;
            playerTwo.isTurn = true;
        }
        else {
            playerOne.isTurn = true;
            playerTwo.isTurn = false;
        }
    }

}

// playerOne.newTilePosition()
console.log(playerOne.tilePosition)

// playerOne.newTilePosition(3)
console.log(playerTwo.tilePosition)

