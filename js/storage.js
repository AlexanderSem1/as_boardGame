function localStoragePlayers(name) {
    if (localStorage.getItem('playerOne') === null) {
        localStorage.setItem('playerOne', name)
        document.getElementById('selectedPlayer1').innerHTML += `
        <h2>Player 1</h2>
        <p>${name}</p>
        <img src="https://via.placeholder.com/200">
        `
    } else {
        localStorage.setItem('playerTwo', name)
        document.getElementById('selectedPlayer2').innerHTML += `
        <h2>Player 2</h2>
        <p>${name}</p>
        <img src="https://via.placeholder.com/200">
        `
        //Redirect 
    }
    console.log(name)

}




function resetPlayerSelection() {
    localStorage.clear();
    document.getElementById('selectedPlayer1').innerHTML += ''
    document.getElementById('selectedPlayer2').innerHTML += ''
    // window.location.reload();
}






