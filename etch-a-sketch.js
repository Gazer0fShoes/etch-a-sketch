const etchContainer = document.getElementById("etchContainer");

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.class = "column";
    etchContainer.appendChild(newDiv);

    for (let n = 0; n < 16; n++) {
        let newDiv = document.createElement("div");
        newDiv.class = "row";
        newDiv.textContent = n;
        etchContainer.lastChild.appendChild(newDiv);
    }
}

