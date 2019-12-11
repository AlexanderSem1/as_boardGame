function viewMore(id, character) {

    document.getElementById('player_' + character).innerHTML = '';
    fetch('https://anapioficeandfire.com/api/characters/' + id)
    .then(function (response) {
        return response.json()
    })
    .then(function (result) {
        let playerInfo = result;

        if (playerInfo.aliases[0] === '') {
            document.getElementById('player_' + character).innerHTML += `
            <p>Title: ${playerInfo.titles[0]}</p>
            <p>Gender: ${playerInfo.gender}</p>
            <p>Aliases: No Alias for ${playerInfo.name}</p>`;
        } else {
            document.getElementById('player_' + character).innerHTML += `
            <p>Title: ${playerInfo.titles[0]}</p>
            <p>Gender: ${playerInfo.gender}</p>
            <p>Aliases: ${playerInfo.aliases[0]}</p>`;
        }
    })
}