fetch('http://localhost:3000/influcard')
    .then(response => response.json())
    .then(data => modifyBarWeekGraph(data));


function modifyBarWeekGraph(infoInflu) {
    am5.ready(function () {

        var root = am5.Root.new("barWeek");


        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true
        }));

        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
        cursor.lineY.set("visible", false);

        var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
        xRenderer.labels.template.setAll({
            rotation: -90,
            centerY: am5.p50,
            centerX: am5.p100,
            paddingRight: 15
        });

        xRenderer.grid.template.setAll({
            location: 1
        })

        var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
            maxDeviation: 0.3,
            categoryField: "country",
            renderer: xRenderer,
            tooltip: am5.Tooltip.new(root, {})
        }));

        var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            maxDeviation: 0.3,
            renderer: am5xy.AxisRendererY.new(root, {
                strokeOpacity: 0.1
            })
        }));


        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
            name: "Series 1",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            sequencedInterpolation: true,
            categoryXField: "country",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueY}"
            })
        }));

        series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
        series.columns.template.adapters.add("fill", function (fill, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        series.columns.template.adapters.add("stroke", function (stroke, target) {
            return chart.get("colors").getIndex(series.columns.indexOf(target));
        });

        let amount1 = 0;
        let amount2 = 0;
        let amount3 = 0;
        let amount4 = 0;
        let amount5 = 0;
        let amount6 = 0;
        let amount7 = 0;

        const amountMonday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "1" ? amount1 += parseFloat(week.engrate) : amount1 = amount1;
        })
        const amountTuesday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "2" ? amount2 += parseFloat(week.engrate) : amount2 = amount2;
        })
        const amountWednesday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "3" ? amount3 += parseFloat(week.engrate) : amount3 = amount3;
        })
        const amountThrusday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "4" ? amount4 += parseFloat(week.engrate) : amount4 = amount4;
        })
        const amountFriday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "5" ? amount5 += parseFloat(week.engrate) : amount5 = amount5;
        })
        const amountSaturday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "6" ? amount6 += parseFloat(week.engrate) : amount6 = amount6;
        })
        const amountSunday = infoInflu.account_post_day.map((week) => {
            return week.day_id === "7" ? amount7 += parseFloat(week.engrate) : amount7 = amount7;
        })



        // Set data
        var data = [{
            country: "Lunes",
            value: amountMonday[amountMonday.length - 1]
        }, {
            country: "Martes",
            value:  amountTuesday[amountTuesday.length - 1]
        }, {
            country: "Miercoles",
            value:  amountWednesday[amountWednesday.length - 1]
        }, {
            country: "Jueves",
            value:  amountThrusday[amountThrusday.length - 1]
        }, {
            country: "Viernes",
            value:  amountFriday[amountFriday.length - 1]
        }, {
            country: "Sabado",
            value:  amountSaturday[amountSaturday.length - 1]
        }, {
            country: "Domingo",
            value:  amountSunday[amountSunday.length - 1]
        }];

        xAxis.data.setAll(data);
        series.data.setAll(data);

        series.appear(1000);
        chart.appear(1000, 100);

    });
}
