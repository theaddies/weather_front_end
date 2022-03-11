
// Feel free to change or delete any of the code you see in this editor!
var svg1 = d3.select("#direction_2")

var arc = d3.arc()
.innerRadius(80)
.outerRadius(100)
.startAngle(0)
.endAngle(2 * Math.PI);

svg1.append("path")
.attr('d', arc)
.attr("fill", "pink")
.attr("stroke", "gray")
.attr("stroke-width", 1);

svg2 = svg1.append("svg")
  .attr("width", 200)
  .attr("height", 200)
  .attr('viewBox', '-50 -50 100 100')



var path_d = "M 0,0 L 0,-10 L 50,0 L 0,10 Z";

function updateAngle(value) {
  var angle = parseInt(value);
  var data = [{
    angle: angle,
    color: 'black'
  }, {
    angle: (180 + angle) % 360,
    color: 'red'
  }];

  paths = svg2.selectAll('path')
    .data(data);

  paths.enter()
    .append('path')
    .attr('d', path_d)
    .merge(paths)
    .style('fill', d => d.color)
    .attr('transform', d => `rotate(${d.angle})`);

  paths.exit().remove();
}

updateAngle(20);

