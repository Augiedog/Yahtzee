let playArea = document.querySelector('#play-area')

function Dice(url){
    let image = document.createElement('img')
    image.src = `./dice${url}.png`
    playArea.append(image)
    return image
}
// hold a dice from rolling
// document.querySelectorAll('img').addEventListener('click', function() {
//     document.querySelector('img')
// })

// Roll Button 
document.getElementById('roll').addEventListener('click', function() {
    // document.querySelector('#play-area').removeChild(document.getElementsByTagName('img'));
    // Determine dice roll using Math.random()
    let rolledValue = Math.ceil(Math.random() * 6)
    Dice(rolledValue)
        
      
})

// Score Board Functionality

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');


table.appendChild(thead);
table.appendChild(tbody);

function scoreBoard(tbRow, tbCol, data) {
    let (tbRow) = document.createElement('tr');
    let (tbCol) = document.createElement('th');
    data.innerHTML = `${data}`;
        return tbRow.appendChild(tbCol), thead.appendChild(tbRow);
}
scoreBoard('row_1', 'heading_1', "Upper Section");
scoreBoard('row_1', 'heading_2', "How to Score");
scoreBoard('row_1', 'heading_2', "Game#1");
scoreBoard('row_1', 'heading_2', "Game#2");

// Creating and adding data to first row of the table
// let row_1 = document.createElement('tr');
// let heading_1 = document.createElement('th');
// heading_1.innerHTML = "Upper Section";
// let heading_2 = document.createElement('th');
// heading_2.innerHTML = "How to Score";
// let heading_3 = document.createElement('th');
// heading_3.innerHTML = "Game#1";
// let heading_4 = document.createElement('th');
// heading_4.innerHTML = "Game#2";

// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// row_1.appendChild(heading_4);
// thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Aces =1";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "Count and add only Aces";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Two's =2";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "Count and add only Twos";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

// Adding the entire table to the main tag
document.querySelector('main').appendChild(table);