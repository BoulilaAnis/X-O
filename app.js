const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "" ,"", "", "" ,"", "", ""
]


let go = "circle"
infoDisplay.textContent = "Circle goes first"




function createBoard(){
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)

    })
}

createBoard()



function addGo(e){
    console.log(e.target)
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === 'circle' ? 'cross' : "circle"
    infoDisplay.textContent = "it is now " + go + "'s go"
    e.target.removeEventListener("click", addGo)
    checkScore()
}


function checkScore(){
    const allSquears = document.querySelectorAll('.square')
    console.log(allSquears)
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    
    console.log(allSquears[4])
    
    winningCombos.forEach(array => {
        let circleWiner = array.every(cell => 
            allSquears[cell].firstChild?.classList.contains('circle'))
        if (circleWiner) {
            infoDisplay.textContent = "Circle Wins!"
            allSquears.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
    })
    
    
    winningCombos.forEach(array => {
        let crossWins = array.every(cell => 
            allSquears[cell].firstChild?.classList.contains('cross'))
        if (crossWins) {
            infoDisplay.textContent = "cross Wins!"
            allSquears.forEach(square => square.replaceWith(square.cloneNode(true)));
            return
        }
    })
}


