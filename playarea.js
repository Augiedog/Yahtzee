let playArea = document.querySelector('#play-area')
let hand = document.querySelector('#hand')
let dice = 0
let dieInHand = []

function Dice(diceVal) {
    let image = document.createElement('img')
    image.src = `./dice${diceVal}.png`
    image.alt = `Dice side ${diceVal} `
    image.id = 'Dice'
    image.className = 'play-dice'
    image.addEventListener('click', () => {
        image.remove()
        dieInHand.push(diceVal)
        ScoreCard(dieInHand)
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./dice${diceVal}.png`;
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

function diceCount() {
    var diceLimit = 5
    // document.querySelector('#total-score').textContent = dice
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
let modal = document.getElementById("howToPlay");
let btn = document.getElementById("howtobut");
let span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}