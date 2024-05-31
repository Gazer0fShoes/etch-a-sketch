const etchContainer = document.getElementById("etchContainer");
const button = document.querySelector("button");
const input = document.querySelector("input");
const span = document.querySelector("span");
const etchASketchDimensions = 16;
createEtchASketch(etchASketchDimensions);

button.addEventListener("click", () => {
    newEtchASketch()
});

// FUNCTIONS
function createEtchASketch (dimensions) {
    for (let i = 0; i < dimensions; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("column");
        etchContainer.appendChild(newDiv);
        
        for (let n = 0; n < dimensions; n++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("cell");
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "red";
            })
            etchContainer.lastChild.appendChild(newDiv);
        }
    }
}

function newEtchASketch() {
    if (input.value > 100) {
        span.hidden = false;
        input.value = "";
        return;
    }
    span.hidden = true;
    while (etchContainer.firstChild) {
        etchContainer.removeChild(etchContainer.firstChild);
    }
    createEtchASketch(input.value);
    input.value = "";
}