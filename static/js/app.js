const url = "https://weatherapi.smartnprivate.com/posts/last";

var matrix = [
  {name: "Lee Gai Fun", age: 42, sex: "M"},
  {name: "Laia Hamidullah", age: 27, sex: "F" },
  {name: "Abraham Mdulla", age: 33, sex: "M" }
 ];

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
  console.log(data.created_at)

  console.log(Object.values(data))
var list = [data]

  Object.values(data).forEach(function(d){return console.log(d)})

d3.select(".objecttable tbody").selectAll("tr").data(list).enter().append("tr")
.selectAll("td").data(Object.values(data))
.enter().append("td")
.text(function(d) { return d; });



});

