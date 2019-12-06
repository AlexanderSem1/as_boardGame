function localStoragePlayers(name) {
    if (localStorage.getItem('playerOne') === null) {
        localStorage.setItem('playerOne', name)
        document.getElementById('selectedPlayer1').innerHTML += `
        <h2>Player 1</h2>
        <p>${name}</p>
        <img src="https://via.placeholder.com/150">
        `
       
    } else {
        localStorage.setItem('playerTwo', name)
        document.getElementById('selectedPlayer2').innerHTML += `
        <h2>Player 2</h2>
        <p>${name}</p>
        <img src="https://via.placeholder.com/150">
        `
        window.location.replace('boardgame.html')
    }
    console.log(name)

}

function resetPlayerSelection() {
    localStorage.clear();
    document.getElementById('clearStorage').innerHTML = ''; 
}






