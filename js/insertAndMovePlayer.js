function createPlayerToken() {
    playerOne.icon = 'images/' + localStorage.getItem('playerOne') + '.png'
    playerTwo.icon = 'images/' + localStorage.getItem('playerTwo') + '.png'

    document.getElementById('selectedPlayer1').innerHTML += `
    <h2>Player 1</h2>
    <p>${localStorage.getItem('playerOne')}</p>
    <img src="${playerOne.icon}">
    `

    document.getElementById('selectedPlayer2').innerHTML += `
    <h2>Player 2</h2>
    <p>${localStorage.getItem('playerTwo')}</p>
    <img src="${playerTwo.icon}">
    `
    document.getElementById('tile1').innerHTML += `<img src=${playerOne.icon}>`
    document.getElementById('tile1').innerHTML += `<img src=${playerTwo.icon}>`
}

createPlayerToken()

