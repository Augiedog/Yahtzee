let playArea = document.querySelector('#play-area')

function newImage(url){
    let image = document.createElement('img')
    image.src = `./assets/dice/${url}.png`
    playArea.append(image)
    return image
}
newImage('dice1')
newImage('dice2')
newImage('dice3')
newImage('dice4')
newImage('dice5')
newImage('dice6')
