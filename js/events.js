function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name

let blueButton = document.getElementById('make-Green-button');
blueButton.onclick = makeGreen;
function makeGreen() {
    document.body.style.backgroundColor = 'green'
}

// handle event using anonymous function

let grayButton = document.getElementById('make-gray-button')
// it's call anonymous function 
// without function name
grayButton.onclick = function () {
    document.body.style.backgroundColor = 'gray'
}

// handel by using add eventlisenter

let goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

// addEventListener

let hotPinkButton = document.getElementById('make-hotpink')
hotPinkButton.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'hotpink'
});

// direct shortcut addEventListener
document.getElementById('make-light-blue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue'
})