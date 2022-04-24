let playArea = document.querySelector('#play-area')
let hold = document.querySelector('#hand')
let dice = 0

function Dice(url){
    let image = document.createElement('img')
    image.src = `./dice${url}.png`
    image.alt = `Dice side ${url} `
    image.id = url
    image.className = 'dice'
    image.addEventListener('click', () => {
        image.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./dice${url}.png`;
        inventoryItem.alt = `Dice side ${url}`
        inventoryItem.id = url
        inventoryItem.addEventListener('click', () => {
            inventoryItem.remove()
            playArea.append(image)
        })
        hold.append(inventoryItem)
    })
    playArea.append(image)
    return image
}

function diceCount() {
    var diceLimit = 5
    if (dice > diceLimit) {
        alert(`More than 5 dice!!`)
    } 
}

// Roll Button 
document.getElementById('roll').addEventListener('click', () => { 
    while ( dice < 5) {
        let rolledValue = Math.ceil(Math.random() * 6)
        // callBack funtion creats the image of a dice with it's properties
        Dice(rolledValue)
        dice++
    }   
    diceCount()
})

// temp button that removes dice
document.getElementById('pick-up').addEventListener('click', () => {
    document.querySelector('.dice').remove()
    dice--
    diceCount()
})


// Score board Functionality
// let chance = 
// // print score to chance square
// getElementById('chance').textContent = chance