function createPlayerToken() {
    playerOne.icon = 'images/SVG/' + localStorage.getItem('playerOne') + '.svg';
    playerTwo.icon = 'images/SVG/' + localStorage.getItem('playerTwo') + '.svg';

    document.getElementById('selectedPlayer1').innerHTML += `
    <h2>Warrior One</h2>
    <img src="${playerOne.icon}">
    <p>${localStorage.getItem('playerOne')} <span id="playersOneTurn"></span> </p>
    `;
    document.getElementById('selectedPlayer2').innerHTML += `
    <h2>Warrior Two</h2>
    <img src="${playerTwo.icon}">
    <p>${localStorage.getItem('playerTwo')} <span id="playersTwoTurn"></span></p>
    `;
}
createPlayerToken()

