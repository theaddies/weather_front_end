const url = "https://weatherapi.smartnprivate.com/posts/day";

//const url = "localhost:8000/posts/day";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {

data.sort(function(a, b) {return a.id - b.id});

var tempValues = data.map(d => d.temp);
var humidValues = data.map(d => d.humid);
var wind_directionValues = data.map(windDirection);
var wind_speedValues = data.map(d => d.wind_speed);
var dateValues = data.map(d => d.created_at);
var watertemperatureValues = data.map(d => d.w_temp);

function windDirection (d) {
  return d.wind_direction + d.bno_direction - 180;
}

var graphData1 = [{
y: tempValues,
x: dateValues,
type: "line"
}];

var layout = {
  yaxis: {
    title: 'Temperature, '+'\u00B0'+'F',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'black'
    }
  },
};

Plotly.newPlot('temp', graphData1, layout);

var graphData2 = [{
  y: humidValues,
  x: dateValues,
  type: "line"
  }];
  
  var layout = {
    yaxis: {
      title: 'Humidity, %',
      titlefont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'black'
      }
    },
  };
  
  Plotly.newPlot('humid', graphData2, layout);

  var graphData3 = [{
    y: wind_speedValues,
    x: dateValues,
    type: "line"
    }];
    
    var layout = {
      yaxis: {
        title: 'Speed, mph',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'black'
        }
      },
    };
    
    Plotly.newPlot('speed', graphData3, layout);

    var graphData4 = [{
      y: wind_directionValues,
      x: dateValues,
      type: "line"
      }];
      
      var layout = {
        yaxis: {
          title: 'degrees '+'\u00B0',
          titlefont: {
            family: 'Arial, sans-serif',
            size: 18,
            color: 'black'
          }
        },
      };
      
      Plotly.newPlot('direction', graphData4, layout);

      var graphData5 = [{
        y: watertemperatureValues,
        x: dateValues,
        type: "line"
        }];
        
        var layout = {
          yaxis: {
            title: 'Temperature, '+'\u00B0'+'F',
            titlefont: {
              family: 'Arial, sans-serif',
              size: 18,
              color: 'black'
            }
          },
        };
        
        Plotly.newPlot('direction_2', graphData5, layout);


      console.log('print data');
      console.log(data);
    
      var humidValues = data.map(d => d.humid);
    console.log('humid values');
    console.log(humidValues)
    console.log('object values');
      console.log(Object.values(data))
      console.log('object keys');
      console.log(Object.keys(data))
    var list = [data]
    console.log('simple for each');
    data.forEach(d => console.log(d));
    
      Object.values(data).forEach(function(d){return console.log(d)})
      console.log("here we are");
      Object.values(data).forEach(d => console.log(d))
    
     //d3.select(".col-md-12").selectAll("thead").data(list).enter().data(Object.keys(data)).enter().append("th").text(d => d)
    
     d3.select(".col-md-12").select("thead").selectAll("tr").data([1]).enter().append("tr")
     .selectAll("th").data(Object.keys(data[0])).enter().append("th").text(d => d)

    //var header = "<th>id</th><th>temp</th><th>humid</th><th>press</th><th>wind_speed</th><th>direction</th><th>voltage</th><th>current</th><th>power</th><th>created_at</th>"
    
//     var header = "<th>id</th>"
//     var header1 = "<th>temp</th>"

//     var heading = d3.select(".col-md-12").select("thead").selectAll("tr").data([1]).enter().append("tr")
//     .selectAll("th").data(Object.keys([1])).enter().append("th").html(header).html(header1);

// //console.log(data[0]);

// //console.log(Object.keys(data[0])[0]);

    var rows = d3.select("tbody").selectAll("tr").data(data).enter().append("tr");
    
    var cells = rows
    .html(function(d) {
      return `<td>${d.humid}</td><td>${d.temp}</td><td>${d.wind_speed}</td><td>${d.bno_direction}</td><td>${d.voltage}</td>
      <td>${d.created_at}</td><td>${d.id}</td><td>${d.press}</td><td>${d.wind_direction}</td><td>${d.current}</td><td>${d.power}</td>`
    })

});



