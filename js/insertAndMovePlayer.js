function createPlayerToken() {
    playerOne.icon = 'images/SVG/' + localStorage.getItem('playerOne') + '.svg'; 
    playerTwo.icon = 'images/SVG/' + localStorage.getItem('playerTwo') + '.svg';

    let tileLocationPlayerOne = document.getElementById('tile' + playerOne.tilePosition).value; 
    let tileLocationPlayerTwo = document.getElementById('tile' + playerTwo.tilePosition).value; 

    // console.log(tileLocationPlayerOne)
    // console.log(tileLocationPlayerTwo)

    document.getElementById('selectedPlayer1').innerHTML += `
    <h2>Warrior One</h2>
    <img src="${playerOne.icon}">
    <p>${localStorage.getItem('playerOne')} is in tile position <span id="playersOnePosition"></span> </p>
    `; 
    document.getElementById('selectedPlayer2').innerHTML += `
    <h2>Warrior Two</h2>
    <img src="${playerTwo.icon}">
    <p>${localStorage.getItem('playerTwo')} is in tile position <span id="playersTwoPosition"></span></p>
    `; 
}

createPlayerToken()

