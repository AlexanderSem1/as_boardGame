function introPage() {
    location.replace('playerSelection.html'); 
}

function swapTitansToMinis() {
    document.getElementById('titans').innerHTML = "Minis"; 
    document.getElementById('titans').style.color = 'red'; 
}

function swapPictureTyrionToMini() {
    console.log('whaaaaaaat?')
    // location.reload(); 
    document.getElementById('swapPictureTyrionToMini').innerHTML = `
    <img src="images/SVG/mini.svg">
    <p>Mini Lannister</p>
    <div id="player_Tyrion"></div>
    <button class="[ players__container--read ]" onclick="viewMore('1052', 'Tyrion')">Read More</button>
    <button class="[ players__container--read ]" onclick="localStoragePlayers('Tyrion')">Select Mini</button>
    `;  
}

function backtoIntroPage() {
    location.replace('index.html'); 
}