function introPage() {
    location.replace('playerSelection.html'); 
}

function swapTitansToMinis() {
    document.getElementById('titans').innerHTML = "Minis"; 
    document.getElementById('titans2').innerHTML = "Minis-"; 
}

function swapPictureTyrionToMini() {
    document.getElementById('swapPictureTyrionToMini').innerHTML = `
    <img src="images/SVG/mini.svg">
    <p>Mini Lannister</p>
    <div id="player_Tyrion"></div>
    <button class="[ players__container--read ]" onclick="viewMore('1052', 'Mini')">Read More</button>
    <button class="[ players__container--read ]" onclick="localStoragePlayers('Mini')">Select Mini</button>
    `;  
}

function backtoIntroPage() {
    location.replace('index.html'); 
}