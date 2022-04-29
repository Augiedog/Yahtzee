//Declare Vars; connects to scorecard
let acesCount = document.getElementById('Aces-Count')
acesCount.addEventListener('click', () => {
    aces = false
    acesCount.style.backgroundColor = 'red'
})
let twosCount = document.getElementById('Twos-Count')
twosCount.addEventListener('click', () => {
    twos = false
    twosCount.style.backgroundColor = 'red'
})
let threesCount = document.getElementById('Threes-Count')
threesCount.addEventListener('click', () => {
    threes = false
    threesCount.style.backgroundColor = 'red'
})
let foursCount = document.getElementById('Fours-Count')
foursCount.addEventListener('click', () => {
    fours = false
    foursCount.style.backgroundColor = 'red'
})
let fivesCount = document.getElementById('Fives-Count')
fivesCount.addEventListener('click', () => {
    fives = false
    fivesCount.style.backgroundColor = 'red'
})
let sixesCount = document.getElementById('Sixes-Count')
sixesCount.addEventListener('click', () => {
    sixes = false
    sixesCount.style.backgroundColor = 'red'
})
let bonus = document.getElementById('Bonus')
let threeKind = document.getElementById('3-Kind')
let fourKind = document.getElementById('4-Kind')
let fullHouse = document.getElementById('Full-House')
let smallStraight = document.getElementById('small-Straight')
let largeStraight = document.getElementById('large-Straight')
let yatzee = document.getElementById('Yatzee')
let chance = document.getElementById('Chance')
let yatzeeBonus = document.getElementById('Extra-Yatzee')
let totalScore = document.getElementById('total-score')

let aces = true
let twos = true
let threes = true
let fours = true
let fives = true
let sixes = true

function ScoreCard(dieInHand) {
    // need to fill the Score Card
    let countAces = 0
    let countTwos = 0
    let countThrees = 0
    let countFours = 0
    let countFives = 0
    let countSixes = 0
    for ( let i = 0; i < dieInHand.length; i++) {
        if (dieInHand[i] === 1 && aces !== false) {
            countAces += dieInHand[i]
            acesCount.textContent = countAces
        } else 
        if (dieInHand[i] === 2 && twos !== false) {
            countTwos += dieInHand[i]
            twosCount.textContent = countTwos
        } else
        if (dieInHand[i] === 3 && threes !== false) {
            countThrees += dieInHand[i]
            threesCount.textContent = countThrees
        } else
        if (dieInHand[i] === 4 && fours !== false) {
            countFours += dieInHand[i]
            foursCount.textContent = countFours
        } else
        if (dieInHand[i] === 5 && fives !== false) {
            countFives += dieInHand[i]
            fivesCount.textContent = countFives
        } else
        if (dieInHand[i] === 6 && sixes !== false) {
            countSixes += dieInHand[i]
            sixesCount.textContent = countSixes
        }
    }
    

    chance.textContent = dieInHand.reduce((a, b) => a + b, 0)
    

}