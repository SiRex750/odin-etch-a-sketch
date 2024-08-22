let dim = 16;
let color = "";

const dimensions = document.querySelector("#dimensions");
const box = document.querySelector(".box");

function createGrid(dim) {
    box.innerHTML = '';
    
    let numberOfMiniBoxes = dim * dim;

    let widthMB = 700 / dim;
    let heightMB = 700 / dim;

    for (let i = 0; i < numberOfMiniBoxes; i++) {
        const miniBox = document.createElement("div");
        miniBox.className = "miniBox";
        miniBox.style.width = widthMB + 'px';
        miniBox.style.height = heightMB + 'px';
        if (color === "g") {
            miniBox.style.backgroundColor = "darkolivegreen";
            miniBox.style.opacity = 0;
        }
        box.appendChild(miniBox); 
        
        let isMouseDown = false;

        document.addEventListener("mousedown", () => {
            isMouseDown = true;
        });

        document.addEventListener("mouseup", () => {
            isMouseDown = false;
        });

        miniBox.addEventListener("mouseover", () => {
            if (color === "s" && isMouseDown) {
                miniBox.style.backgroundColor = "darkolivegreen";
            }
            if (color === "e" && isMouseDown) {
                miniBox.style.backgroundColor = "whitesmoke";
            }
            if (color === "r" && isMouseDown) {
                miniBox.style.backgroundColor = getRainbow();
            }
            if (color === "g" && isMouseDown) {
                miniBox.style.opacity = getGradient(miniBox.style.opacity);
            }
        });
    }
}

createGrid(dim);

dimensions.addEventListener("click", () => {
    newDim = prompt("Enter the new dimensions (between 2 and 100):");

    if (newDim !== null && !isNaN(newDim) && newDim > 1 && newDim < 101) {
        dim = Number(newDim);
        createGrid(dim);
    }
    else {
        alert("Please enter a valid number!");
    }
});

const solid = document.querySelector("#solid");
const rainbow = document.querySelector("#rainbow");
const gradient = document.querySelector("#gradient");
const erase = document.querySelector("#erase");

solid.addEventListener("click", () => {
    color = "s";
    createGrid(dim);
})
rainbow.addEventListener("click", () => {
    color = "r";
    createGrid(dim);
})
gradient.addEventListener("click", () => {
    color = "g";
    createGrid(dim);
})
erase.addEventListener("click", () => {
    color = "e";
})

function getRainbow() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getGradient(opa) {
    let opacity = parseFloat(opa);
    opacity = Math.min(1, opacity + 0.1);
    return opacity;
}