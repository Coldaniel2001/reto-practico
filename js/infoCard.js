const profileImg = document.getElementById("profileImg");
const nicknameProfile = document.getElementById("nicknameProfile");
const nameProfile = document.getElementById("nameProfile");
const nameCountry = document.getElementById("nameCountry");
const genAge = document.getElementById("genAge");
const faVenus = document.getElementsByClassName("fa-venus")[0];

const reachGraph = document.getElementById("reach");
const revelanceGraph = document.getElementById("revelance");
const resonanceGraph = document.getElementById("resonance");

const reachInfo= document.getElementById("reachInfo");
const revelanceInfo = document.getElementById("revelanceInfo");
const resonanceInfo = document.getElementById("resonanceInfo");

const numberAudience = document.getElementById("numberAudience");
const numberScope = document.getElementById("numberScope");
const numberImpressions = document.getElementById("numberImpressions");
const numberImpressionsScope = document.getElementById("numberImpressionsScope");
const numberImpressionsAudience = document.getElementById("numberImpressionsAudience");
const numberReproductions = document.getElementById("numberReproductions");
const numberReproductionsScope = document.getElementById("numberReproductionsScope");
const numberReproductionsAudience = document.getElementById("numberReproductionsAudience");
const numberEngagement = document.getElementById("numberEngagement");
const numberEngagementScope = document.getElementById("numberEngagementScope");
const numberEngagementAudience = document.getElementById("numberEngagementAudience");

function modifyInfo(infoInflu) {
    profileImg.setAttribute("src", infoInflu.account_picture)
    nameProfile.innerText = infoInflu.name;
    nicknameProfile.innerText = infoInflu.username;
    nameCountry.innerText = infoInflu.country;
    infoInflu.gender !== "1" ? faVenus.setAttribute("class", "fa-mars" ) : "";
    genAge.innerText = `${infoInflu.gender === "1" ? "Mujer" : "Hombre"}, ${infoInflu.age} años`;
    
    reachGraph.setAttribute("style", `--porcentaje: ${infoInflu.reach_formated_graph}; --color: blue`)
    revelanceGraph.setAttribute("style", `--porcentaje: ${infoInflu.relevance_formated_graph}; --color: orange`)
    resonanceGraph.setAttribute("style", `--porcentaje: ${infoInflu.resonance_formated_graph}; --color: cyan`)
    
    reachInfo.innerText = `${infoInflu.reach_formated_graph}%`;
    revelanceInfo.innerText = `${infoInflu.relevance_formated_graph}%`;
    resonanceInfo.innerText = `${infoInflu.resonance_formated_graph}%`;

    numberAudience.innerText= infoInflu.followers_formated;
    numberScope.innerText= infoInflu.reach_formated;
    numberImpressions.innerText= infoInflu.impressions_formated;
    numberImpressionsScope.innerText= `${infoInflu.ir_alcance}%`;
    numberImpressionsAudience.innerText= `${infoInflu.ir_audiencia}%`;
    numberReproductions.innerText= infoInflu.vplays_formated;
    numberReproductionsScope.innerText= `${infoInflu.vr_alcance}%`;
    numberReproductionsAudience.innerText= `${infoInflu.vr_audiencia}%`;
    numberEngagement.innerText= infoInflu.engagement_formated;
    numberEngagementScope.innerText= `${infoInflu.er_alcance}%`;
    numberEngagementAudience.innerText= `${infoInflu.er_audiencia}%`;

}


const returns = document.getElementById("return")
const download = document.getElementById("download")

returns.addEventListener("click", changePagesPreviousProfile);
download.addEventListener("click", dowloadScreenShot);



function dowloadScreenShot() {
    Swal.fire({
        text: 'La generación de la imagen puede tardar, por favor espere',
        icon:"info",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
          Swal.fire({
            icon: 'success',
            title: 'La descarga ha sido un exito',
          })
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          html2canvas(infoCardComplete)
          .then(canvas => {
            canvas.width = 1720
            canvas.height = 900
            canvas.style = "width: 1720px; height: 900px"
              let link = document.createElement("a");
              link.download = "Influcard.png";
              link.href = canvas.toDataURL();
              link.click();
              console.log(canvas)
          })
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Por favor, espere a que finalize la descarga.',
          })
        }
      })

}

function changePagesPreviousProfile() {
    infoCardComplete.style.display = "none";
    section.style.display = "flex";
}


