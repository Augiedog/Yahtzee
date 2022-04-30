//Declare Vars; connects to scorecard; writes in score 
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
let countBonus = acesCount.textContent + twosCount.textContent + threesCount +fivesCount + fivesCount + sixesCount.textContent

let threeKindCount = document.getElementById('3-Kind')
let fourKindCount = document.getElementById('4-Kind')
let fullHouseCount = document.getElementById('Full-House')
let smallStraightCount = document.getElementById('small-Straight')
let largeStraightCount = document.getElementById('large-Straight')
let yatzeeCount = document.getElementById('Yatzee')
let chanceCount = document.getElementById('Chance')
chanceCount.addEventListener('click', () => {
    chance = false
    chanceCount.style.backgroundColor = 'red'
})
let yatzeeBonusCount = document.getElementById('Extra-Yatzee')
let totalScoreCount = document.getElementById('total-score')

let aces = true
let twos = true
let threes = true
let fours = true
let fives = true
let sixes = true

let chance = true

function ScoreCard(dieInHand) {
    // need to fill the Score Card
    let countAces = 0
    let countTwos = 0
    let countThrees = 0
    let countFours = 0
    let countFives = 0
    let countSixes = 0
    let countBonus = 0

    for ( let i = 0; i < dieInHand.length; i++) {
        if (dieInHand[i] === 1 && aces !== false) {
            countAces += dieInHand[i]
            acesCount.textContent = countAces
            countAces += countBonus
        } else 
        if (dieInHand[i] === 2 && twos !== false) {
            countTwos += dieInHand[i]
            twosCount.textContent = countTwos
            countTwos += countBonus
        } else
        if (dieInHand[i] === 3 && threes !== false) {
            countThrees += dieInHand[i]
            threesCount.textContent = countThrees
            countThrees += countBonus
        } else
        if (dieInHand[i] === 4 && fours !== false) {
            countFours += dieInHand[i]
            foursCount.textContent = countFours
            countFours += countBonus
        } else
        if (dieInHand[i] === 5 && fives !== false) {
            countFives += dieInHand[i]
            fivesCount.textContent = countFives
            countFives += countBonus
        } else
        if (dieInHand[i] === 6 && sixes !== false) {
            countSixes += dieInHand[i]
            sixesCount.textContent = countSixes
            countSixes += countBonus
            console.log(countBonus)
        }        
    }
    if ( countBonus > 63 ) {
        bonus.textContent = 35
        
    } 
            

    if (chance !== false) {
        chanceCount.textContent = dieInHand.reduce((a, b) => a + b, 0)
    }
        
    

}
