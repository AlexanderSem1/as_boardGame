function introPage() {
    location.replace('playerSelection.html');
}

function swapTitansToMinis() {
    document.getElementById('titans').innerHTML = " Minis";
    document.getElementById('titans').style.color = 'red';
    document.getElementById('titans2').innerHTML = " Minis-";
    document.getElementById('titans2').style.color = 'red';
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

function winnerPageMessage() {
    window.location.replace('winnerpage.html')
}



