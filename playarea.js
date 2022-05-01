let playArea = document.querySelector('#play-area')
let hand = document.querySelector('#hand')
let dice = 0
let dieInHand = []

function Dice(diceVal) {
    let image = document.createElement('img')
    image.src = `./assets/dice${diceVal}.png`
    image.alt = `Dice side ${diceVal} `
    image.id = 'Dice'
    image.className = 'play-dice'
    image.addEventListener('click', () => {
        image.remove()
        dieInHand.push(diceVal)
        ScoreCard(dieInHand)
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./assets/dice${diceVal}.png`;
        inventoryItem.alt = `Dice side ${diceVal}`
        inventoryItem.id = 'Dice'
        inventoryItem.addEventListener('click', () => {
            inventoryItem.remove()
            playArea.append(image)
            removeDieValue(diceVal)
            ScoreCard(dieInHand)
        })
        hand.append(inventoryItem)
    })
    playArea.append(image)
    return image
}
// Removes the value of the dice from the array, when dice moves back to play area
function removeDieValue(val) {
    for (let i = 0; i < dieInHand.length; i++) {
        if (val === dieInHand[i]) {
            dieInHand.splice(i,1)
            break
        }
    }
}
// makes sure only 5 dice are in play
function diceCount() {
    var diceLimit = 5
    if (dice > diceLimit) {
        alert(`You have more than 5 dice in Play!!`)
    } 
}

// Roll Button 
document.getElementById('roll').addEventListener('click', () => { 
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

// Roll limits and turn base play


// Get the 'How to Play' modal
let howtomodal = document.getElementById('howToPlay')
let hpbtn = document.getElementById('howtobut')
hpbtn.onclick = function() {
  howtomodal.style.display = "block"
}
//Get the 'About' modal
let aboutmodal = document.getElementById('About')
let abbtn = document.getElementById('aboutbut')
abbtn.onclick = function() {
    aboutmodal.style.display = "block"
}
// closes
let span = document.getElementsByClassName('close')[0]
let span2 = document.getElementsByClassName('close')[1] 
span.onclick = function() {
  howtomodal.style.display = "none";
}
span2.onclick = function() {
    aboutmodal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == howtomodal) {
    howtomodal.style.display = "none";
  }
  if (event.target == aboutmodal) {
      aboutmodal.style.display = "none";
  }
}