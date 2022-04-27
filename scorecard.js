//Declare Vars; connects to scorecard
let acesCount = document.getElementById('Aces-Count')
let twosCount = document.getElementById('Twos-Count')
let threesCount = document.getElementById('Threes-Count')
let foursCount = document.getElementById('Fours-Count')
let fivesCount = document.getElementById('Fives-Count')
let sixesCount = document.getElementById('Sixes-Count')
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


function ScoreCard(dieInHand) {
    // need to fill the Score Card
    // dieInHand.sort()
    // function countAces(aces) {
    //     aces.reduce
    //     return 
    // }

    for ( let i = 0; i < dieInHand.length; i++) {
        if (dieInHand[i] === 1) {
            acesCount.textContent = dieInHand
        }
        if (dieInHand[i] === 2) {
            twosCount.textContent = dieInHand
        }
        if (dieInHand[i] === 3) {
            threesCount.textContent = dieInHand
        }
        if (dieInHand[i] === 4) {
            foursCount.textContent = dieInHand
        }
        if (dieInHand[i] === 5) {
            fivesCount.textContent = dieInHand
        }
        if (dieInHand[i] === 6) {
            sixesCount.textContent = dieInHand
        }
    }
    

    chance.textContent = dieInHand.reduce((a, b) => a + b, 0)
    

}