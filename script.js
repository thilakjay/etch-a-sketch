let container = document.querySelector("#container");
let clearButton = document.querySelector("#clearBtn");
const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

clearButton.addEventListener("click", clearGrid);


function fillGrid(size) {
    //1.create row(div) 
    //2.create squares to fill out the row, then append them to row
    //3.now append row to container
    //repeat steps 1-3 until container is filled out

    for(let i=1; i<=size; i++) { //add row by one by one
        let row = document.createElement("div");
        row.className = "row";
        for(let j=1; j<=size; j++){ //add squares one by one to each row
            let square = document.createElement("div");        
            square.className = "square";
            square.style.width = (containerWidth/size) + "px";
            square.style.height = (containerHeight/size) + "px";
            square.style.filter = "brightness(1)";
            square.addEventListener("mouseover", () => {
                    addRandomRGB(square);        
                    darken(square);          
                });
            row.appendChild(square);
        }
        container.appendChild(row);           
    }       
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }  
    let size = prompt("Enter grid size (1 - 100)")
    if(size === null || size === "") {
        return;
    }else if (size <= 0 || size > 100){
        clearGrid();
    }else {
        fillGrid(size);
    }
}

function addRandomRGB(node) {
    if(!node.style.backgroundColor){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        node.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
}

function darken(node) {
    if(node.style.filter !== "brightness(0)") {
        let brightValue = parseFloat(node.style.filter.slice(11,-1));
        brightValue -= 0.1;
        node.style.filter = `brightness(${brightValue})`;
    }
}


//fitting up to 100 x 100 squares without modifying size of grid.
//taking user input for up to 100 x 100 sized grid.