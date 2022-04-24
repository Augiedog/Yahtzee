let playArea = document.querySelector('#play-area')
let hand = document.querySelector('#hand')
let dice = 0
let dieInHand = []

function Dice(diceVal){
    let image = document.createElement('img')
    image.src = `./dice${diceVal}.png`
    image.alt = `Dice side ${diceVal} `
    image.id = 'Dice'
    image.className = 'play-dice'
    image.addEventListener('click', () => {
        image.remove()
        dieInHand.push(diceVal)
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./dice${diceVal}.png`;
        inventoryItem.alt = `Dice side ${diceVal}`
        inventoryItem.id = 'Dice'
        inventoryItem.addEventListener('click', () => {
            inventoryItem.remove()
            playArea.append(image)
            removeDieValue(diceVal)
        })
        hand.append(inventoryItem)
    })
    playArea.append(image)
    return image
}
// Removes the value of the dice from the array
function removeDieValue(val) {
    for (let i = 0; i < dieInHand.length; i++) {
        if (val === dieInHand[i]) {
            dieInHand.splice(i,1)
            break
        }
    }
}

function diceCount() {
    var diceLimit = 5
    document.querySelector('#total-score').textContent = dice
    
    if (dice > diceLimit) {
        alert(`You have more than 5 dice in Play!!`)
    } 
}

// Roll Button 
document.getElementById('roll').addEventListener('click', () => { 
    document.querySelector('#chance').textContent = dieInHand
    document.querySelectorAll('.play-dice').forEach(die => {
        die.remove()
        dice--
    })
    while ( dice < 5) {
        let rolledValue = Math.ceil(Math.random() * 6)
        // callBack funtion creats the image of a dice with it's properties
        Dice(rolledValue)
        dice++
    }   
    diceCount()
})

// temp button that removes dice from play-area
// document.getElementById('pick-up').addEventListener('click', () => {
//     // document.querySelector('#chance').textContent = dieInHand
//     // document.querySelectorAll('.play-dice').forEach(die => {
//     //     die.remove()
//     //     dice--
//     // })
//     // while ( dice > 0) {
//     //     document.querySelector('.dice').remove()
//     //     dice--
//     //     diceCount()
//     // }  
//     diceCount()
// })


// Score board Functionality
// let chance = 
// // print score to chance square
// getElementById('chance').textContent = chance