let playerOne = {
    name: localStorage.getItem('playerOne'),
    isTurn: true,
    tilePosition: 0,
    // newTilePosition: function(dice) {
    //     this.tilePosition = this.tilePosition +  dice 
    // },
    icon: ''
}

let playerTwo = {
    name: localStorage.getItem('playerTwo'),
    isTurn: false,
    tilePosition: 0,
    //newTilePosition: function (dice) {
    //  this.tilePosition = this.tilePosition + dice
    //},
    icon: ''
}