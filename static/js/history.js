const url = "https://weatherapi.smartnprivate.com/posts/day";

//const url = "localhost:8000/posts/day";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {

var tempValues = data.map(d => d.temp);
var humidValues = data.map(d => d.humid);
var wind_directionValues = data.map(d => d.wind_direction);
var wind_speedValues = data.map(d => d.wind_speed);
var dateValues = data.map(d => d.created_at);

var graphData1 = [{
y: tempValues,
x: dateValues,
type: "line"
}];

var layout = {
  title: "Chart"
};

Plotly.newPlot('temp', graphData1, layout);

var graphData2 = [{
  y: humidValues,
  x: dateValues,
  type: "line"
  }];
  
  var layout = {
    title: "Chart"
  };
  
  Plotly.newPlot('humid', graphData2, layout);

  var graphData3 = [{
    y: wind_speedValues,
    x: dateValues,
    type: "line"
    }];
    
    var layout = {
      title: "Chart"
    };
    
    Plotly.newPlot('speed', graphData3, layout);

    var graphData4 = [{
      y: wind_directionValues,
      x: dateValues,
      type: "line"
      }];
      
      var layout = {
        title: "'Bar' Chart"
      };
      
      Plotly.newPlot('direction', graphData4, layout);

      console.log('print data');
      console.log(data);
    
      var humidValues = data.map(d => d.humid);
    console.log('humid values');
    console.log(humidValues)
    
      console.log(Object.values(data))
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
    
    var rows = d3.select("tbody").selectAll("tr").data(data).enter().append("tr");
    
    var cells = rows
    .html(function(d) {
      return `<td>${d.humid}</td><td>${d.id}</td><td>${d.wind_direction}</td><td>${d.current}</td><td>${d.power}</td>
      <td>${d.press}</td><td>${d.wind_speed}</td><td>${d.temp}</td><td>${d.bno_direction}</td><td>${d.voltage}</td><td>${d.created_at}</td>`
    })

});

