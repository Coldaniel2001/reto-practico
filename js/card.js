const section = document.getElementsByTagName("section")[0];
const infoCardComplete = document.getElementById("cardInfo");



fetch('http://localhost:3000/influcard')
    .then(response => response.json())
    .then(data => createCard(data));


function createCard(dataInfo) {
    for (let i = 0; i < 12; i++) {
        const divCard = document.createElement("div");
        //leftColumnCard
        const leftColumnCard = document.createElement("div");
        const divProfile = document.createElement("div");
        const headLine = document.createElement("span");

        const divSocial = document.createElement("div");
        const imgSocial = document.createElement("i");
        const nameSocial = document.createElement("span");

        const fatherInfoPreviusProfile = document.createElement("div");
        const fatherGenerAge = document.createElement("div");
        const generAge = document.createElement("span");
        const fatherFlag = document.createElement("div");
        const imgFlag = document.createElement("img");
        const nameFlag = document.createElement("span");

        const hobbies = document.createElement("span");


        //rightColumnCard
        const rightColumnCard = document.createElement("div");
        const menuTitle = document.createElement("div");
        const nameInfluence = document.createElement("h2");
        const imgMenu = document.createElement("i");

        const flexRightColumnAudicCard = document.createElement("div");
        const divfatherAudic = document.createElement("div");
        const imgAudic = document.createElement("i");
        const audic = document.createElement("span");
        const audicNumber = document.createElement("span");

        const flexRightColumnFakesCard = document.createElement("div");
        const divfatherFakes = document.createElement("div");
        const imgFakes = document.createElement("i");
        const fakes = document.createElement("span");
        const fakesNumber = document.createElement("span");

        const flexRightColumnMediaEngCard = document.createElement("div");
        const divfatherMediaEng = document.createElement("div");
        const imgMediaEng = document.createElement("i");
        const mediaEng = document.createElement("span");
        const mediaEngNumber = document.createElement("span");

        const flexRightColumnRateEngCard = document.createElement("div");
        const divfatherRateEng = document.createElement("div");
        const imgRateEng = document.createElement("i");
        const rateEng = document.createElement("span");
        const rateEngNumber = document.createElement("span");

        const flexRightColumnImpreCard = document.createElement("div");
        const divfatherImpre = document.createElement("div");
        const imgImpre = document.createElement("i");
        const impre = document.createElement("span");
        const impreNumber = document.createElement("span");

        //leftColumnCard
        divCard.classList.add("card-complete__div-full");
        divCard.style.background = `linear-gradient(rgba(231, 231, 231, 0.95), rgba(231, 231, 231, 0.95)), url(${dataInfo.account_picture})`;
        leftColumnCard.classList.add("left-column");
        divProfile.classList.add("img-profile");
        divProfile.style.backgroundImage = `url(${dataInfo.account_picture})`;
        headLine.setAttribute("id", "headLine");


        imgSocial.classList = "fab fa-instagram";
        imgSocial.style.color = "#a03cb4";
        nameSocial.innerText = dataInfo.username;

        generAge.innerText += dataInfo.gender === "1" ? `Mujer, ${dataInfo.age}` : `Hombre, ${dataInfo.age}`;
        imgFlag.classList.add("img-flag");
        imgFlag.setAttribute("src", "../img/Bandera_Nacional_de_España.png");
        imgFlag.setAttribute("alt", "icon-flag");
        nameFlag.innerText += dataInfo.country === "ES" ? "España" : "Desconocido";

        hobbies.innerText += `${dataInfo.interests.split(",", 2)},...`;



        //rightColumnCard
        rightColumnCard.classList.add("right-column");
        menuTitle.classList.add("menu-title");
        imgMenu.classList = "fa-solid fa-bars img-menu-bar";
        imgMenu.style.color = "#938585";
        nameInfluence.innerText = dataInfo.name.charAt(0).toUpperCase() + dataInfo.name.slice(1);

        flexRightColumnAudicCard.classList.add("flex-right-column");
        imgAudic.classList = "fa-solid fa-user-group";
        imgAudic.style.color = "#938585";
        audic.innerText += "Audiencia:";
        audicNumber.innerText += dataInfo.followers_formated;

        flexRightColumnFakesCard.classList.add("flex-right-column");
        imgFakes.classList = "fa-solid fa-user-group";
        imgFakes.style.color = "#938585";
        fakes.innerText += "Fakes:";
        fakesNumber.innerText += `${parseFloat(dataInfo.followers_fake.toLocaleString("de-DE")).toFixed(2)} K`;

        flexRightColumnMediaEngCard.classList.add("flex-right-column");
        imgMediaEng.classList = "fa-sharp fa-solid fa-heart";
        imgMediaEng.style.color = "#938585";
        mediaEng.innerText += "Media Eng:";
        mediaEngNumber.innerText += dataInfo.engagement_formated;

        flexRightColumnRateEngCard.classList.add("flex-right-column");
        imgRateEng.classList = "fa-solid fa-percent";
        imgRateEng.style.color = "#938585";
        rateEng.innerText += "Eng Rate:";
        rateEngNumber.innerText += `${dataInfo.er_audiencia.toLocaleString("de-DE")} K`;

        flexRightColumnImpreCard.classList.add("flex-right-column");
        imgImpre.classList = "fa-sharp fa-solid fa-eye";
        imgImpre.style.color = "#938585";
        impre.innerText += "Impresion:";
        impreNumber.innerText += dataInfo.impressions_formated;


        section.appendChild(divCard);
        //leftColumnCard
        divCard.appendChild(leftColumnCard);
        leftColumnCard.appendChild(divProfile);
        divProfile.appendChild(headLine);

        leftColumnCard.appendChild(divSocial);
        divSocial.appendChild(imgSocial);
        divSocial.appendChild(nameSocial);

        leftColumnCard.appendChild(fatherInfoPreviusProfile);
        fatherInfoPreviusProfile.appendChild(fatherGenerAge);
        fatherGenerAge.appendChild(generAge);
        fatherInfoPreviusProfile.appendChild(fatherFlag);
        fatherFlag.appendChild(imgFlag);
        fatherFlag.appendChild(nameFlag);

        leftColumnCard.appendChild(hobbies);


        //rightColumnCard
        divCard.appendChild(rightColumnCard);
        rightColumnCard.appendChild(menuTitle);
        menuTitle.appendChild(nameInfluence);
        menuTitle.appendChild(imgMenu);

        rightColumnCard.appendChild(flexRightColumnAudicCard);
        flexRightColumnAudicCard.appendChild(divfatherAudic);
        divfatherAudic.appendChild(imgAudic);
        divfatherAudic.appendChild(audic);
        flexRightColumnAudicCard.appendChild(audicNumber);

        rightColumnCard.appendChild(flexRightColumnFakesCard);
        flexRightColumnFakesCard.appendChild(divfatherFakes);
        divfatherFakes.appendChild(imgFakes);
        divfatherFakes.appendChild(fakes);
        flexRightColumnFakesCard.appendChild(fakesNumber);

        rightColumnCard.appendChild(flexRightColumnMediaEngCard);
        flexRightColumnMediaEngCard.appendChild(divfatherMediaEng);
        divfatherMediaEng.appendChild(imgMediaEng);
        divfatherMediaEng.appendChild(mediaEng);
        flexRightColumnMediaEngCard.appendChild(mediaEngNumber);

        rightColumnCard.appendChild(flexRightColumnRateEngCard);
        flexRightColumnRateEngCard.appendChild(divfatherRateEng);
        divfatherRateEng.appendChild(imgRateEng);
        divfatherRateEng.appendChild(rateEng);
        flexRightColumnRateEngCard.appendChild(rateEngNumber);

        rightColumnCard.appendChild(flexRightColumnImpreCard);
        flexRightColumnImpreCard.appendChild(divfatherImpre);
        divfatherImpre.appendChild(imgRateEng);
        divfatherImpre.appendChild(impre);
        flexRightColumnImpreCard.appendChild(impreNumber);

        divProfile.addEventListener("mouseover", function () {
            headLine.style.opacity = 1;
        })

        divProfile.addEventListener("mouseout", function () {
            headLine.style.opacity = 0;
        })

        divProfile.addEventListener("click", changePagesMenuProfile)


        infoCardComplete.style.display = "block";
        section.style.display = "none";
        function changePagesMenuProfile() {
            getInfo(dataInfo)
        }

        headLine.innerText += `Ver Influcard`;

    }
}








