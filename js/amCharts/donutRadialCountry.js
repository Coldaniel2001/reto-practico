fetch('http://localhost:3000/influcard')
    .then(response => response.json())
    .then(data => modifyCountryGraph(data));

function modifyCountryGraph(infoInflu) {
    am5.ready(function () {

        var root = am5.Root.new("chartCountrydiv");

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

        let amountEs = 0;
        let amountUs = 0;
        let amountMx = 0;
        let amountFr = 0;
        let amountIt = 0;
        let amountOtros= 0;

       const amountCountryEs = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="ES"?amountEs += parseFloat(country.value):amountEs=amountEs;
        })

       const amountCountryUs = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="US"?amountUs += parseFloat(country.value):amountUs=amountUs;
        })
       const amountCountryMx = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="MX"?amountMx += parseFloat(country.value):amountMx=amountMx;
        })
       const amountCountryFr = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="FR"?amountFr += parseFloat(country.value):amountFr=amountFr;
        })
       const amountCountryIt = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="IT"?amountIt += parseFloat(country.value):amountIt=amountIt;
        })
       const amountCountryOther = infoInflu.top_countries_formated.map((country)=>{
            return country.country_short==="Otros"?amountOtros += parseFloat(country.value):amountOtros=amountOtros;
        })
        am5.Picture.new(root, {
            width: 32,
            height: 32,
            src: "../img/flags/es.png"
          });

        series.data.setAll([{
            country: `ES`,
            sales:amountCountryEs[amountCountryEs.length-1]
        }, {
            country: `US`,
            sales: amountCountryUs[amountCountryUs.length-1]
        }, {
            country: `MX`,
            sales: amountCountryMx[amountCountryMx.length-1]
        }, {
            country: `FR`,
            sales: amountCountryFr[amountCountryFr.length-1]
        }, {
            country: `IT`,
            sales: amountCountryIt[amountCountryIt.length-1]
        }, {
            country: `Otros`,
            sales: amountCountryOther[amountCountryOther.length-1]
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
