fetch('/db.json')
    .then(response => response.json())
    .then(data => createBands(data));

const bandsDiv = document.getElementById("brands");

function createBands (infoInflu){
    infoInflu.brands_images.map((bands)=>{
        const containerBands = document.createElement("div");
        const imgBands = document.createElement("img");
        const nameBands = document.createElement("span");

        containerBands.classList.add("bands__div--container")
        imgBands.classList.add("bands__img")
        nameBands.classList.add("bands__span")
        imgBands.setAttribute("src", bands.image);
        nameBands.innerText = bands.name;

        bandsDiv.appendChild(containerBands);
        containerBands.appendChild(imgBands);
        containerBands.appendChild(nameBands);
        
    })
}