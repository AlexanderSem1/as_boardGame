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
    document.getElementById('dice').innerHTML = `<p>${whichPlayersTurn.name} has rolled ${diceRoll}</p>`;

    if ((whichPlayersTurn.tilePosition + diceRoll) >= 30) {
        $('#winnerModal').modal('show');
        document.getElementById('winnerPlayer').innerHTML = `${whichPlayersTurn.name}`;
    }

    if (diceRoll === 6) { // The Player has another turn
        $('#myModal').modal('show');
        document.getElementById('playerTurnAgainName').innerHTML = `${whichPlayersTurn.name}`; 
        whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition + diceRoll;
        movePlayerAndRollDice();
    }
    else {
        whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition + diceRoll;
        document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;
    }

    function runTrap() {
        switch (whichPlayersTurn.tilePosition) {
            case trapOne.Position:
                $('#trapModal').modal('show');
                document.getElementById('playersTurnTrap').innerHTML = `${whichPlayersTurn.name}`;
                document.getElementById('trapModalMessage').innerHTML = `<p>${trapOne.message}</p>`
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
                whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapOne.penalty;
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`
                break;
            case trapTwo.Position:
                $('#trapModal').modal('show');
                document.getElementById('playersTurnTrap').innerHTML = `${whichPlayersTurn.name}`;
                document.getElementById('trapModalMessage').innerHTML = `<p>${trapTwo.message}</p>`
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
                whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapTwo.penalty;
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;
                break;
            case trapThree.Position:
                $('#trapModal').modal('show');
                document.getElementById('playersTurnTrap').innerHTML = `${whichPlayersTurn.name}`;
                document.getElementById('trapModalMessage').innerHTML = `<p>${trapThree.message}</p>`
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
                whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapThree.penalty;
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;
                break;
            case trapFour.Position:
                $('#trapModal').modal('show');
                document.getElementById('playersTurnTrap').innerHTML = `${whichPlayersTurn.name}`;
                document.getElementById('trapModalMessage').innerHTML = `<p>${trapFour.message}</p>`
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
                whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapFour.penalty;
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML += `<img src="${whichPlayersTurn.icon}">`;
                break;
            case trapFive.Position:
                $('#trapModal').modal('show');
                document.getElementById('playersTurnTrap').innerHTML = `${whichPlayersTurn.name}`;
                document.getElementById('trapModalMessage').innerHTML = `<p>${trapFive.message}</p>`
                document.getElementById('tile' + whichPlayersTurn.tilePosition).innerHTML = `<p>${whichPlayersTurn.tilePosition}</p>`;
                whichPlayersTurn.tilePosition = whichPlayersTurn.tilePosition - trapFive.penalty;
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

let whichPlayersTurn = {};

if (playerOne.isTurn === true) {
    whichPlayersTurn = playerOne;
}
else {
    whichPlayersTurn = playerTwo;
}
