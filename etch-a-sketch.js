const etchContainer = document.getElementById("etchContainer");
const etchASketchDimensions = 16;
createEtchASketch(etchASketchDimensions);

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

function newEtchASketch(dimensions) {
    while (etchContainer.firstChild) {
        etchContainer.remove(etchContainer.firstChild);
    }
    createEtchASketch(dimensions);
}