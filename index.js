let playArea = document.querySelector('#play-area')
let hold = document.querySelector('#hand')
let dice = 0

function Dice(url){
    let image = document.createElement('img')
    image.src = `./dice${url}.png`
    image.alt = `Dice ${url}`
    image.id = url
    image.className = 'dice'
    image.addEventListener('click', () => {
        image.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./dice${url}.png`;
        inventoryItem.alt = `Dice ${url}`
        inventoryItem.id = url
        inventoryItem.className = 'dice'
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
        // trying to remove the dice in the play area and; roll the amount left in the play area
        // document.querySelector(div.img).remove(dice-diceLimit)
        alert(`More than 5 dice!!`)
    } 
}

// Roll Button 
document.getElementById('roll').addEventListener('click', () => {
    for ( i = 0; i < 5; i++) {
        let rolledValue = Math.ceil(Math.random() * 6)
        // callBack funtion creats the image of a dice
        Dice(rolledValue)
        dice++
        
    }   
    diceCount()
})
// temp button that removes dice
document.getElementById('pick-up').addEventListener('click', () => {
    document.querySelector('#dice').remove()
    dice--
})
