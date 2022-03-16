
// Feel free to change or delete any of the code you see in this editor!
var screenWidth = window.innerWidth;

var margin = {left: 20, top: 20, right: 20, bottom: 20},
  width = Math.min(screenWidth, 500) - margin.left - margin.right,
  height = Math.min(screenWidth, 500) - margin.top - margin.bottom;

var svga = d3.select("#direction").append("svg")

var svg = svga
.attr("width", (width + margin.left + margin.right))
.attr("height", (height + margin.top + margin.bottom))
 .append("g").attr("class", "wrapper")
.attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")");

////////////////////////////////////////////////////////////// 
///////////////////// Data &  Scales ///////////////////////// 
////////////////////////////////////////////////////////////// 

//Some random data
var donutData = [
{name: "N", 	value: 45},
{name: "NE", 		value: 45},
{name: "E", 	value: 45},
{name: "SE", 	value: 45},
{name: "S",	value: 45},
{name: "SW", 	value: 45},
{name: "W", value: 45},
{name: "NW", 	value: 45}
];

//Create a color scale
var colorScale = d3.scaleLinear()
.domain([1,3,6])
.range(["#2c7bb6", "#11ffbf", "#d7191c"])
.interpolate(d3.interpolateHcl);

//Create an arc function   
var arc = d3.arc()
.innerRadius(width*0.75/2) 
.outerRadius(width*0.75/2 + 30);

//Turn the pie chart 90 degrees counter clockwise, so it starts at the left	
var pie = d3.pie()
.startAngle(0)
.endAngle(2*Math.PI)
.value(function(d) { return d.value; })
.padAngle(.01)
.sort(null);

////////////////////////////////////////////////////////////// 
//////////////////// Create Donut Chart ////////////////////// 
////////////////////////////////////////////////////////////// 

//Create the donut slices
svg.selectAll(".donutArcSlices")
.data(pie(donutData))
.enter().append("path")
.attr("class", "donutArcSlices")
.attr("id", function(d,i) { return "donutArc"+i; })
.attr("d", arc)
.style("fill", function(d,i) {
if(i === 7) return "#CCCCCC"; //Other
else return colorScale(i); 
});

//Append the label names on the outside
svg.selectAll(".donutText")
.data(donutData)
.enter().append("text")
.attr("class", "donutText")
.attr("dy", -13)
.attr('dx', -5)
.append("textPath")
.attr("xlink:href",function(d,i){return "#donutArc"+i;})
.style('font-size', '1.5em')
.text(function(d){return d.name;});

// var path_d = "M 0,20 L 0,-20 L 160,0 L 0,20 Z";
var arrowWidth = 18;
var arrowHeadWidth = 40;
var arrowLength = 160;
var arrowHeadLength = 60;
//var arrowHead = `L ${arrowLength-arrowHeadLength},${-arrowWidth} L ${arrowLength-arrowHeadLength},${-arrowHeadWidth} L ${-arrowLength},0 L ${arrowLength-arrowHeadLength}, ${arrowWidth} L ${arrowLength-arrowHeadLength},${arrowHeadWidth}`
var path_d_1 = `M ${-arrowLength},${arrowWidth} L ${-arrowLength},${-arrowWidth} L ${arrowLength-arrowHeadLength},${-arrowWidth} `;
var path_d_2 = `L ${arrowLength-arrowHeadLength},${-arrowHeadWidth} L ${arrowLength},0 L ${arrowLength-arrowHeadLength},${arrowHeadWidth} L ${arrowLength-arrowHeadLength},${arrowWidth}Z`
var path_d = path_d_1 + path_d_2
// var path_d = "M -160,20 L -160,-20 L 110,-20 L 110,-40 L 160,0 L 110, 40 L 110,20 L -160,20 Z";

function updateAngle(value) {
  var angle = [parseInt(value)];
  // var data = [{
  //   angle: angle,
  //   color: 'black'
  // }, {
  //   angle: (180 + angle) % 360,
  //   color: 'red'
  // }];

  paths = svga.append('svg')
  .attr("width", (width + margin.left + margin.right))
.attr("height", (height + margin.top + margin.bottom))
 .append("g").attr("class", "wrapper")
.attr("transform", "translate(" + (width / 2 + margin.left) + "," + (height / 2 + margin.top) + ")")
.selectAll('path')
    .data(angle);

  paths.enter()
    .append('path')
    .attr('d', path_d)
    .style('fill', 'green')
    .attr('transform', `rotate(${angle-90})`);
    // .style('fill', d => d.color)
    // .attr('transform', d => `rotate(${d.angle+90})`);

  paths.exit().remove();
}



