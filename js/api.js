function viewMore(id, character) {
    
    document.getElementById('player_' + character).innerHTML = ''; 

    
    fetch('https://anapioficeandfire.com/api/characters/' + id)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            // return result
            console.log(result)

            let playerInfo = result; 

console.log(result.gender)
            
            return document.getElementById('player_' + character).innerHTML += `
            <p>Gender: ${playerInfo.gender}</p>
            <p>Aliases: ${playerInfo.aliases}</p>
            `


        })
}