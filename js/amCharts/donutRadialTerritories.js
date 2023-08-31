fetch('http://localhost:3000/influcard')
    .then(response => response.json())
    .then(data => modifyTerritoriesGraph(data));

function modifyTerritoriesGraph(infoInflu) {
    am5.ready(function () {

        var root = am5.Root.new("chartTerritoriesdiv");

        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5percent.PieChart.new(root, {
            radius: am5.percent(90),
            innerRadius: am5.percent(50),
            layout: root.horizontalLayout
        }));

        var series = chart.series.push(am5percent.PieSeries.new(root, {
            name: "Series",
            valueField: "sales",
            categoryField: "country"
        }));

        let amountMod = 0;
        let amountBel = 0;
        let amountFam = 0;
        let amountVia = 0;
        let amountMas = 0;
        let amountCul = 0;
        let amountOtr = 0;

        const amountTerritoryMod = infoInflu.post_territory.map((territory) => {
            return territory.category === "Moda" ? amountMod += parseFloat(territory.value) : amountMod = amountMod;
        })
        const amountTerritoryBel = infoInflu.post_territory.map((territory) => {
            return territory.category === "Belleza" ? amountBel += parseFloat(territory.value) : amountBel = amountBel;
        })
        const amountTerritoryFam = infoInflu.post_territory.map((territory) => {
            return territory.category === "Familia" ? amountFam += parseFloat(territory.value) : amountFam = amountFam;
        })
        const amountTerritoryVia = infoInflu.post_territory.map((territory) => {
            return territory.category === "Viajes" ? amountVia += parseFloat(territory.value) : amountVia = amountVia;
        })
        const amountTerritoryMas = infoInflu.post_territory.map((territory) => {
            return territory.category === "Mascotas" ? amountMas += parseFloat(territory.value) : amountMas = amountMas;
        })
        const amountTerritoryCul = infoInflu.post_territory.map((territory) => {
            return territory.category === "Cultura" ? amountCul += parseFloat(territory.value) : amountCul = amountCul;
        })
        const amountTerritoryOtr = infoInflu.post_territory.map((territory) => {
            return territory.category === "Otras" ? amountOtr += parseFloat(territory.value) : amountOtr = amountOtr;
        })

        series.data.setAll([{
            country: "Moda",
            sales: amountTerritoryMod[amountTerritoryMod.length - 1]
        }, {
            country: "Belleza",
            sales: amountTerritoryBel[amountTerritoryBel.length - 1]
        }, {
            country: "Familia",
            sales: amountTerritoryFam[amountTerritoryFam.length - 1]
        }, {
            country: "Viajes",
            sales: amountTerritoryVia[amountTerritoryVia.length - 1]
        }, {
            country: "Mascotas",
            sales: amountTerritoryMas[amountTerritoryMas.length - 1]
        }, {
            country: "Cultura",
            sales: amountTerritoryCul[amountTerritoryCul.length - 1]
        }, {
            country: "Otras",
            sales: amountTerritoryOtr[amountTerritoryOtr.length - 2]
        }]);



        series.labels.template.set("visible", false);
        series.ticks.template.set("visible", false);

        series.slices.template.set("strokeOpacity", 0);
        series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
            stops: [{
                brighten: -0.8
            }, {
                brighten: -0.8
            }, {
                brighten: -0.5
            }, {
                brighten: 0
            }, {
                brighten: -0.5
            }]
        }));

        var legend = chart.children.push(am5.Legend.new(root, {
            centerY: am5.percent(50),
            y: am5.percent(50),
            layout: root.verticalLayout
        }));

        legend.valueLabels.template.setAll({ textAlign: "center" })

        legend.labels.template.setAll({
            maxWidth: 140,
            width: 140,
            oversizedBehavior: "wrap"
        });

        legend.data.setAll(series.dataItems);

        series.appear(1000, 100);

    })
}
