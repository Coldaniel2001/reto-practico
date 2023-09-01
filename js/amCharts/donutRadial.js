fetch('/db.json')
    .then(response => response.json())
    .then(data => modifyGraph(data));

function modifyGraph(infoInflu) {
    am5.ready(function () {
        var root = am5.Root.new("chartdiv");

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

        let amount13 = 0;
        let amount18 = 0;
        let amount25 = 0;
        let amount35 = 0;
        let amount45 = 0;
        let amount65= 0;

       const amountAge13 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="13"?amount13 += parseFloat(age.amount):amount13=amount13;
        })
       const amountAge18 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="18"?amount18 += parseFloat(age.amount):amount18=amount18;
        })
       const amountAge25 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="25"?amount25 += parseFloat(age.amount):amount25=amount25;
        })
       const amountAge35 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="35"?amount35 += parseFloat(age.amount):amount35=amount35;
        })
       const amountAge45 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="45"?amount45 += parseFloat(age.amount):amount45=amount45;
        })
       const amountAge65 = infoInflu.insightsAge.map((age)=>{
            return age.age_range==="65"?amount65 += parseFloat(age.amount):amount65=amount65;
        })


        series.data.setAll([{
            country: "13-17",
            sales:amountAge13[amountAge13.length-1]
        }, {
            country: "18-24",
            sales: amountAge18[amountAge18.length-1]
        }, {
            country: "25-34",
            sales: amountAge25[amountAge25.length-1]
        }, {
            country: "35-44",
            sales: amountAge35[amountAge35.length-1]
        }, {
            country: "45-64",
            sales: amountAge45[amountAge45.length-1]
        }, {
            country: "65+",
            sales: amountAge65[amountAge65.length-1]
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

