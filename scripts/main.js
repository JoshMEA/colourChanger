

// selectors

const tiles = document.querySelectorAll('.tile');
const colorSave = document.querySelectorAll('.saved-color');
const colorCode = document.querySelector('.color-code');
const savedColorCode = document.querySelector('.saved-color-code');
const allTiles = document.querySelectorAll('.tile');
const savedColor = document.querySelectorAll('.saved-color');
const colorGenBtn = document.querySelector('.gen-color-btn');
const saveBtn = document.querySelector('.save-color-btn');
let clicked;
let savedClicked;

// Event Listeners

//applys random color to all tiles
colorGenBtn.addEventListener('click', () => {
    tiles.forEach(tile => tile.style.backgroundColor = genColor());
});

// Applies color to the palette
saveBtn.addEventListener('click', () => {
    // Error handler
    if(clicked === undefined && savedClicked === undefined) { // if neither is selected
        console.log('select a colour and a palette to save it to');
    } else if (savedClicked === undefined) { // if no palette tab is selected
        console.log('Please select a palette to save this color to');
    } else if (clicked === undefined) { // if no color is selected
        console.log('please select a color to save to this palette');
    } else {
        savedClicked.style.backgroundColor = clicked.style.backgroundColor;
        console.log('color saved!');
    }

});

// handles a click on a generated color tile
allTiles.forEach(tile => tile.addEventListener('click', () => {
    colorCode.textContent = tile.style.backgroundColor;
    clicked != undefined ? clicked.classList.remove('clicked'): false;
    tile.classList.add('clicked');
    clicked = document.querySelector('.clicked');
}));

// handles a click on a saved color tile
savedColor.forEach(tile => tile.addEventListener('click', () => {
    savedColorCode.textContent = tile.style.backgroundColor;
    savedClicked != undefined ? savedClicked.classList.remove('saved-clicked'): false;
    tile.classList.add('saved-clicked');
    savedClicked = document.querySelector('.saved-clicked');
}));



// functions

//color generate function
function genColor() {
    let colorCode = 'rgba(';
    for(let i = 0; i < 3; i++) {    // generates RGB code
        let num = Math.floor(Math.random() * 255) + 1;
        colorCode += num;
        colorCode += ',';
    }
    let aVal = (Math.random() * (1 - 0.3) + 0.3).toFixed(2); // Random float between 0.3 - 1
    colorCode += aVal; 
    colorCode += ')';
    return colorCode;
}