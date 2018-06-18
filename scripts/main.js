

// selectors

const tiles = document.querySelectorAll('.tile');
const colorSave = document.querySelectorAll('.saved-color');
const code = document.querySelector('.code');
const allColors = document.querySelectorAll('.saved-color, .tile');
const colorGenBtn = document.querySelector('.gen-color-btn');
const saveBtn = document.querySelector('.save-palette-btn');

// Event Listeners

//applys random color to all tiles
colorGenBtn.addEventListener('click', () => {
    tiles.forEach(tile => tile.style.backgroundColor = genColor());
});

//displays rgba code in (p.code)
allColors.forEach(tile => tile.addEventListener('click', () => {
    code.textContent = tile.style.backgroundColor;
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

