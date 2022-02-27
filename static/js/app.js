const url = "https://weatherapi.smartnprivate.com/posts/last";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log('print data');
  console.log(data);
  console.log(data.created_at)

  console.log(Object.values(data))
  console.log(Object.keys(data))
var list = [data]

  Object.values(data).forEach(function(d){return console.log(d)})
  console.log("here we are");
  Object.values(data).forEach(d => console.log(d))

 //d3.select(".col-md-12").selectAll("thead").data(list).enter().data(Object.keys(data)).enter().append("th").text(d => d)

 d3.select(".col-md-12").select("thead").selectAll("tr").data([1]).enter().append("tr")
 .selectAll("th").data(Object.keys(data)).enter().append("th").text(d => d)

d3.select("tbody").selectAll("tr").data([1]).enter().append("tr")
.selectAll("td").data(Object.values(data))
.enter().append("td")
.text(function(d) { return d; });


var graphData1 = [
  {
      domain:{x: [0,1], y: [0,1]},
      value: data.temp,
      //title: {text: "Scrubs per Week"},
      type: "indicator",
      // name: 'where is this',
      // visible: "True",
      // legendgrouptitle: {font: {color: 'orange', size: 20}, text: 'wassup' },
      mode: "gauge+number",
      // text: ['first', 'second', 'third'],
      number: {font: {color : 'blue', family:'Open Sans', size: 100}, suffix: '\u00B0'},
      gauge: {
          type: 'pie',
          shape: "angular",
          bar: {color: "blue"}, //line: {color: 'green', width: 5}, thickness: 1},
          bgcolor:'grey',
          axis: {range: [40, 100], tick0: 0, dtick: 10, tickangle: 0,
                  ticklen: 20, tickwidth: 5,tickfont: {color: 'green', size : 20},
                showticksuffix: 'all', ticksuffix: '\u00B0'},
          steps: [
              {range: [40, 50], color: '54478c'}, //, line: { color: "red", width: 10 }
              {range: [50, 60], color: '048ba8'},
              {range: [60, 70], color: '0db39e'},
              {range: [70, 80], color: '83e377'},
              {range: [80, 90], color: 'efea5a'},
              {range: [90, 100], color: 'f29e4c'}
          
          ],

      }
  }
];

var layout = {
  height: 300,
  width: 600,
  margin: {t:1, b:0, l:100, r:100}
};

Plotly.newPlot('temp', graphData1, layout);


var graphData2 = [
  {
      domain:{x: [0,1], y: [0,1]},
      value: data.humid,
      //title: {text: "Scrubs per Week"},
      type: "indicator",
      // name: 'where is this',
      // visible: "True",
      // legendgrouptitle: {font: {color: 'orange', size: 20}, text: 'wassup' },
      mode: "gauge+number",
      // text: ['first', 'second', 'third'],
      number: {font: {color : 'blue', family:'Open Sans', size: 100}, suffix: '%'},
      gauge: {
          type: 'pie',
          shape: "angular",
          bar: {color: "blue"}, //line: {color: 'green', width: 5}, thickness: 1},
          bgcolor:'grey',
          axis: {range: [0, 100], tick0: 0, dtick: 10, tickangle: 0,
                  ticklen: 20, tickwidth: 5,tickfont: {color: 'green', size : 20},
                showticksuffix: 'all', ticksuffix: '%'},
          steps: [
              {range: [0, 30], color: 'rgb(255,230,255, 0.1)', thickness:1}, //, line: { color: "red", width: 10 }
              // {'range': [10, 20], 'color': 'rgb(255,200,255)'},
              // {'range': [20, 30], 'color': 'rgb(255,170,255)'},
              // {'range': [30, 40], 'color': 'rgb(255,140,255)'},
              // {'range': [40, 50], 'color': 'rgb(255,100,255)'},
              {range: [30, 70], color: 'rgb(255,50,255,0.5)'},
              // {'range': [60, 70], 'color': 'rgb(255,0,255)'},
              // {'range': [70, 80], 'color': 'rgb(200,0,200)'},
              // {'range': [80, 90], 'color': 'rgb(150,0,150)'},
              {range: [70, 100], color: 'rgb(100,0,100, 0.5)'}
          
          ],

      }
  }
];


var layout3 = {width: 600, height: 300 , margin: {t:1, b:0, l:100, r:100}, templateitemname: 'step 1'};
Plotly.newPlot('humid', graphData2, layout3);

var windDirection = data.wind_direction;

var windDirectionOpposite = windDirection + 180

if(windDirectionOpposite > 360) {
  windDirectionOpposite = windDirectionOpposite - 360;
}

var graphData3 = [
  {
    type: "scatterpolar",
    mode: "lines",
    r: [0, 4.8, 3.5, 4.8, 3.5],
    theta: [0, windDirection, windDirection+5, windDirection, windDirection-5],
    fillcolor: '#709BFF',
    line: {
      color: 'black',
      width: 10
    }
  },
  {
    type: "scatterpolar",
    mode: "lines",
    r: [0, 5],
    theta: [0, windDirectionOpposite],
    fillcolor: '#709BFF',
    line: {
      color: 'black',
      width: 10
    }
  }
]


layout3 = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 5]
    }
  },
  showlegend: false
}



Plotly.newPlot('direction', graphData3, layout3);

var windSpeed = data.wind_speed

let windConversion = (windSpeed) => 10.08 * windSpeed -36;

var score = windConversion(windSpeed);


score_value = ({
  type: "indicator",
  mode: "number",
  value: windSpeed,
  domain: {
    x: [0,1],
    y: [0.2,0.4]
  }
})

var graphData4 = [
  score_value,
  {
		values: [14, 14, 14, 14, 14, 30],
	//"labels": ['very poor', 'poor','average','good','excellent',' '],
		marker: {
        colors: [
          "rgb(72, 210, 45)",
          "rgb(183, 210, 45)",
          "rgb(229, 161, 26)",
          "rgb(229, 128, 26)",
          "rgb(229, 60, 26)",
          'rgba(255, 255, 255, 0)'
				],
				line: {
						width: 4,
						color: "white"
				}
		},
		name: "Gauge",
		hole: .85,
		type: "pie",
    rotation: -126,
		direction: "clockwise",
		sort: false,
		showlegend: false,
		hoverinfo: "none",
		textinfo: "none",
		textposition: "outside"
	}
];


pointer = ({
  type: 'path',
  path: function() {
    const radius = 0.45;
    const size = 0.025;

    let theta = score;
    let rads = radians(theta);
    let x1 = -1 * radius * Math.cos(rads) + 0.5;
    let y1 = radius * Math.sin(rads) + 0.5;
    let p0 = [-1 * size * Math.cos(radians(theta-90)) + 0.5,
              size * Math.sin(radians(theta-90)) + 0.5]
    let p1 = [-1 * size * Math.cos(radians(theta+90)) + 0.5,
              size * Math.sin(radians(theta+90)) + 0.5]
    return `
      M ${x1} ${y1}
      L ${p0[0]} ${p0[1]}
      L ${p1[0]} ${p1[1]}
      ${drawBezierSemicircle(p1[0],p1[1],p0[0],p0[1]).path}
      Z`;
  }(),
  fillcolor: 'black',
  line: {
    width: 0
  }
})

layout4 = {
  shapes: [pointer],
  width: 500,
  height: 500,
  margin: {"t": 1, "b": 1, "l": 1, "r": 1}
}
console.log(layout4)
//var layout4 = {width: 600, height: 300 }//, margin: {t:1, b:0, l:100, r:100}, templateitemname: 'step 1'};
Plotly.newPlot('speed', graphData4, layout4);


});

