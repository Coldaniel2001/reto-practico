
function getInfo(infoInflu) {
    infoCardComplete.innerHTML = `
    <div class="navBar__div--profile">
    <div id="profileNavbar">

        <div id="imgProfile">
            <i id="squareInsta" class="fa-brands fa-square-instagram fa-2xl" style="color: #b007df;"></i>
            <img src=${infoInflu.account_picture} class="img-profile__img--info" id="profileImg" alt="profile-img" />
        </div>


        <div id="infoProfile">
            <div>
                <span style="font-size: 1.5rem;">${infoInflu.name}</span>

                <div style="font-size: 0.8rem;">
                    <i class="fab fa-instagram" style="color: #a03cb4;"></i>
                    <span style="color: rgb(12, 222, 246);">${infoInflu.username}</span>
                </div>

            </div>

            <div style="font-size: 0.8rem;">
                <img style="width: 1rem;" src="../img/Bandera_Nacional_de_España.png" alt="" />
                <span>${infoInflu.country} -</span>
                ${infoInflu.gender === "1" ? `<i class="fa-solid fa-venus" style="color: #f906c4;"></i>` : `<i class="fa-solid fa-mars" style="color: #004cff;"></i>`}
                <span >${infoInflu.gender === "1" ? "Mujer" : "Hombre"}, ${infoInflu.age} años</span>
            </div>
        </div>

    </div>

    <div id="graficNavbar">
        <div class='porcentajes' style="--porcentaje: ${infoInflu.reach_formated_graph}; --color: blue">
            <p class="typeClass" style="color: blue;">Reach</p>
            <svg width="140" height="140">
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
            </svg>
            <span>${infoInflu.reach_formated_graph}%</span>
        </div>
        <div class='porcentajes' style="--porcentaje: ${infoInflu.relevance_formated_graph} ; --color: orange">
            <p class="typeClass"  style="color: orange;">Relevance</p>
            <svg width="140" height="140">
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
            </svg>
            <span>${infoInflu.relevance_formated_graph}%</span>
        </div>
        <div class='porcentajes' style="--porcentaje: ${infoInflu.resonance_formated_graph}  ; --color: cyan">
            <p class="typeClass" style="color: cyan;">Resonance</p>
            <svg width="140" height="140">
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
                <circle r="25" cx="50%" cy="50%" pathlength="100" />
            </svg>
            <span>${infoInflu.resonance_formated_graph}%</span>
        </div>
    </div>

    <div id="opcions">

        <div id="return" onClick="changePagesPreviousProfile()" style="cursor: pointer;">
            <i class="fa-solid fa-right-from-bracket" style="color: #938585;"></i>
            <span>Salir</span>
        </div>
        <div id="download" onClick="dowloadScreenShot()" style="cursor: pointer;">
            <i class="fa-solid fa-download" style="color: #938585;"></i>
            <span>Descargar Influcard</span>
        </div>
        <div>
            <i class="fa-solid fa-eye" style="color: #938585;"></i>
            <span>Ver perfil</span>
        </div>
        
    </div>
</div>
    `
}

function dowloadScreenShot() {
    html2canvas(infoCardComplete)
    .then(canvas =>{
        let link = document.createElement("a");
        link.download = "Influcard.png";
        link.href = canvas.toDataURL();
        link.click();
    })
}

function changePagesPreviousProfile() {
    infoCardComplete.style.display = "none";
    section.style.display = "flex";
}


