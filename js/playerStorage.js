function localStoragePlayers(name) {
    if (localStorage.getItem('playerOne') === null) {
        localStorage.setItem('playerOne', name)
        document.getElementById('bordgameIntroText').innerHTML = ''; 
        document.getElementById('selectedPlayer1').innerHTML += `
        <h2>Warrior One</h2>
        <p>${name}</p>
        <img src="images/SVG/${name}.svg">
        <button class="[ selectedPlayers__reset ]" onclick="resetPlayerSelection()">Reset Selection</button>
        `;        
    } else {
        localStorage.setItem('playerTwo', name)
        document.getElementById('selectedPlayer2').innerHTML += `
        <h2>Warrior Two</h2>
        <p>${name}</p>
        <img src="images/SVG/${name}.svg">
        <button class="[ selectedPlayers__reset ]" onclick="startTheGame()" >Confirm Selection</button>
        `; 
    }
}

function resetPlayerSelection() {
    localStorage.clear(); 
    document.getElementById('clearStorage').innerHTML = ''; 
    location.reload(); 
}

function startTheGame() {
    location.replace('boardgame.html'); 
}






