const container = document.querySelector("#container");
const sizeButton = document.querySelector("#sizeBtn");
const clearButton = document.querySelector("#clearBtn");
const eraseButton = document.querySelector("#eraseBtn");
const TOTAL_DARK = "brightness(0)";
const STANDARD_BRIGHT = "brightness(1)";

let drawMode = true;
let eraseMode = false;

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

clearButton.addEventListener("click", clearGrid);
sizeButton.addEventListener("click", () => {
    let size = prompt("Enter grid size (1 - 100)"); 
    fillGrid(size);
});
eraseButton.addEventListener("click", () => {
    if(drawMode == true) {
        eraseMode = true;
        drawMode = false;
        eraseButton.value = "Draw";
    }else{
        eraseMode = false;
        drawMode = true;
        eraseButton.value = "Erase";
    }
});

fillGrid(15);

function fillGrid(size) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    if(size === null || size === "") {
        return;
    }else if (size <= 0 || size > 100){
        fillGrid();
    }else if (size > 0 && size <= 100){
        for(let i=1; i<=size; i++) { //add row by one by one
            let row = document.createElement("div");
            row.className = "row";
            for(let j=1; j<=size; j++){ //add squares one by one to each row
                let square = document.createElement("div");
                square.className = "square";
                square.style.width = (containerWidth/size) + "px";
                square.style.height = (containerHeight/size) + "px";
                square.style.filter = "brightness(1)";
                square.addEventListener("mouseover", draw);                                       
                row.appendChild(square);
            }
            container.appendChild(row);        
        } 
    }              
}

function clearGrid() {
    let squares = document.querySelectorAll(".square");   
    for(let node of squares) {
        node.style.backgroundColor = "";
        node.style.filter = "brightness(1)";
    }
}

function draw() {
    if(drawMode) {
        addRandomRBG(this);
        darken(this);
    }else if(eraseMode) {
        erase(this);
    }
}

function addRandomRBG(node) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    node.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function darken(node) {
    if(node.style.filter !== TOTAL_DARK) {
        let brightValue = parseFloat(node.style.filter.slice(11,-1));
        brightValue -= 0.1;
        node.style.filter = `brightness(${brightValue})`;
    }
}

function erase(node){
    node.style.backgroundColor = "white";
    node.style.filter = STANDARD_BRIGHT;
}

