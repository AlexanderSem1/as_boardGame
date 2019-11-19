function viewMore(id, character) {
    // document.getElementById(id + 'ReadMore').innerHTML

    fetch('https://anapioficeandfire.com/api/characters/' + id)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            // return result
            console.log(result)
        })
}