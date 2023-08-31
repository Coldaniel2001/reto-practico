fetch('http://localhost:3000/influcard')
    .then(response => response.json())
    .then(data => modifyTimeZoneGraph(data));

function modifyTimeZoneGraph(infoInflu) {
    am5.ready(function () {
        var root = am5.Root.new("chartTimeZonediv");

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

        let amount1 = 0;
        let amount2 = 0;
        let amount3 = 0;

       const amountTimeZone1 = infoInflu.account_post_moment.map((zoneTime)=>{
            return zoneTime.moment_id==="100"?amount1 += parseFloat(zoneTime.total):amount1=amount1;
        })
       const amountTimeZone2 = infoInflu.account_post_moment.map((zoneTime)=>{
            return zoneTime.moment_id==="200"?amount2 += parseFloat(zoneTime.total):amount2=amount2;
        })
       const amountTimeZone3 = infoInflu.account_post_moment.map((zoneTime)=>{
            return zoneTime.moment_id==="300"?amount3 += parseFloat(zoneTime.total):amount3=amount3;
        })

        series.data.setAll([{
            country: "Mañana",
            sales:amountTimeZone1[amountTimeZone1.length-1]
        }, {
            country: "Tarde",
            sales: amountTimeZone2[amountTimeZone2.length-1]
        }, {
            country: "Noche",
            sales: amountTimeZone3[amountTimeZone3.length-1]
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

        legend.valueLabels.template.setAll({ textAlign: "right" })

        legend.labels.template.setAll({
            maxWidth: 140,
            width: 140,
            oversizedBehavior: "wrap"
        });

        legend.data.setAll(series.dataItems);

        series.appear(1000, 100);

    })
}

