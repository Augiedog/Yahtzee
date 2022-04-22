let playArea = document.querySelector('#play-area')
let hold = document.querySelector('#hand')
let diceCount = document.getElementsByTagName('img')

function Dice(url){
    let image = document.createElement('img')
    image.src = `./dice${url}.png`
    image.alt = `Dice ${url}`
    image.id = url
    image.addEventListener('click', () => {
        image.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = `./dice${url}.png`;
        inventoryItem.alt = `Dice ${url}`
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

// Roll Button 
document.getElementById('roll').addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        let rolledValue = Math.ceil(Math.random() * 6)
        // callBack funtion creats the image of a dice
        Dice(rolledValue)
    }         
})
